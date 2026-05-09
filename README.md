# leobip.github.io

Personal portfolio & blog built with [Jekyll](https://jekyllrb.com/) + [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/) theme. Hosted on GitHub Pages.

🔗 **Live site:** [https://leobip.github.io](https://leobip.github.io)

## Local Development (Docker)

No local Ruby installation required — everything runs inside a container.

### Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop/)

### Run the site

From the **root of the repository**:

```bash
cd /path/to/leobip.github.io
docker compose up
```

Then open [http://localhost:4000](http://localhost:4000).

### Useful commands

| Command | Description |
|---|---|
| `docker compose up` | Build (first time) and start the site |
| `docker compose up -d` | Start in background |
| `docker compose down` | Stop the server |
| `docker compose build` | Rebuild image (after Gemfile changes) |
| `docker compose logs -f` | Follow build/serve logs |

> **Note:** First build takes ~1-2 min (installs gems). Subsequent runs use cached image and start in seconds. Changes to files are auto-reloaded via `--force_polling`.

## Tech Stack

- **Theme:** Minimal Mistakes 4.27.3 (remote_theme, skin: contrast)
- **Hosting:** GitHub Pages
- **Plugins:** jekyll-paginate, jekyll-sitemap, jekyll-gist, jekyll-feed, jekyll-include-cache
