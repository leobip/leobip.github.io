#!/usr/bin/env node

/**
 * Generates a daily tech ephemeris via Groq and writes it to _data/ephemeris.json
 * Called by GitHub Actions (.github/workflows/ephemeris-cron.yml)
 */

const https = require("https");
const fs = require("fs");
const path = require("path");

const GROQ_API_KEY = process.env.GROQ_API_KEY;
if (!GROQ_API_KEY) {
  console.error("❌ GROQ_API_KEY is not set");
  process.exit(1);
}

const MODEL = process.env.GROQ_MODEL || "openai/gpt-oss-120b";

function makeRequest(url, options = {}, data = null) {
  return new Promise((resolve, reject) => {
    const u = new URL(url);
    const req = https.request(
      {
        hostname: u.hostname,
        path: u.pathname + u.search,
        method: options.method || "GET",
        headers: options.headers || {},
      },
      (res) => {
        let body = "";
        res.on("data", (chunk) => (body += chunk));
        res.on("end", () => {
          try {
            resolve({ status: res.statusCode, data: JSON.parse(body) });
          } catch {
            resolve({ status: res.statusCode, data: body });
          }
        });
      },
    );
    req.on("error", reject);
    if (data) req.write(JSON.stringify(data));
    req.end();
  });
}

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

async function main() {
  const arg = process.argv[2];
  const target = arg ? new Date(arg + "T00:00:00Z") : new Date();
  const day = target.getUTCDate();
  const month = target.getUTCMonth() + 1;

  console.log(`🤖 Generating ephemeris for ${MONTHS[month - 1]} ${day}...`);
  console.log(`🧠 Model: ${MODEL}`);

  const prompt = `Generate a tech history ephemeris for ${MONTHS[month - 1]} ${day}.

Find a real historical event related to programming, software, hardware, or technology
that occurred on ${MONTHS[month - 1]} ${day} of any year.
If you are not certain the event happened on this exact date, choose a different event.

Reply ONLY with valid JSON, no markdown:
{
    "event": "Full sentence describing the event in English",
    "historical_year": <year as integer>,
    "historical_month": ${month},
    "historical_day": ${day}
}`;

  const res = await makeRequest(
    "https://api.groq.com/openai/v1/chat/completions",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${GROQ_API_KEY}`,
        "Content-Type": "application/json",
      },
    },
    {
      model: MODEL,
      messages: [
        {
          role: "system",
          content:
            "You are a historian of computing and software. Return concise, accurate tech history facts as valid JSON only — no markdown, no extra text.",
        },
        { role: "user", content: prompt },
      ],
      // gpt-oss is a reasoning model: leave room for reasoning + the JSON answer
      max_completion_tokens: 2000,
      reasoning_effort: "low",
      response_format: { type: "json_object" },
    },
  );

  if (res.status !== 200) {
    console.error("❌ Groq error:", res.status, JSON.stringify(res.data));
    process.exit(1);
  }

  const choice = res.data.choices?.[0];
  let content = choice?.message?.content?.trim();
  if (!content) {
    console.error("❌ Empty response. finish_reason:", choice?.finish_reason);
    console.error(JSON.stringify(res.data, null, 2));
    process.exit(1);
  }

  // Strip markdown code fences if present
  content = content
    .replace(/^```[a-z]*\n?/, "")
    .replace(/\n?```$/, "")
    .trim();

  let ephemeris;
  try {
    ephemeris = JSON.parse(content);
  } catch (e) {
    console.error("❌ Invalid JSON from model:", content);
    process.exit(1);
  }

  if (!ephemeris.event || !ephemeris.historical_year) {
    console.error("❌ Incomplete response:", content);
    process.exit(1);
  }

  const output = {
    event: ephemeris.event,
    historical_year: ephemeris.historical_year,
    historical_month: ephemeris.historical_month,
    historical_day: ephemeris.historical_day,
    display_date: target.toISOString().split("T")[0],
  };

  const outPath = path.join(__dirname, "..", "_data", "ephemeris.json");
  fs.writeFileSync(outPath, JSON.stringify(output, null, 2) + "\n");
  console.log(`✅ Written to _data/ephemeris.json`);
  console.log(`📖 ${output.event}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
