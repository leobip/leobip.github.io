#!/usr/bin/env node

/**
 * Generates a daily tech ephemeris via OpenAI and writes it to _data/ephemeris.json
 * Called by GitHub Actions (.github/workflows/ephemeris-cron.yml)
 */

const https = require("https");
const fs = require("fs");
const path = require("path");

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
if (!OPENAI_API_KEY) {
  console.error("❌ OPENAI_API_KEY is not set");
  process.exit(1);
}

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

  const prompt = `Generate a tech history ephemeris for ${MONTHS[month - 1]} ${day}.

Find a real historical event related to programming, software, hardware, or technology
that occurred on ${MONTHS[month - 1]} ${day} of any year.

Reply ONLY with valid JSON, no markdown:
{
    "event": "Full sentence describing the event in English",
    "historical_year": <year as integer>,
    "historical_month": ${month},
    "historical_day": ${day}
}`;

  const res = await makeRequest(
    "https://api.openai.com/v1/chat/completions",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
    },
    {
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are a historian of computing and software. You return concise, accurate tech history facts as valid JSON only — no markdown, no extra text.",
        },
        { role: "user", content: prompt },
      ],
      max_tokens: 300,
    },
  );

  if (res.status !== 200) {
    console.error("❌ OpenAI error:", res.status, JSON.stringify(res.data));
    process.exit(1);
  }

  let content = res.data.choices[0]?.message?.content?.trim();
  if (!content) {
    console.error("❌ Empty response");
    process.exit(1);
  }

  // Strip markdown code fences if present
  content = content
    .replace(/^```[a-z]*\n?/, "")
    .replace(/\n?```$/, "")
    .trim();

  const ephemeris = JSON.parse(content);
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
