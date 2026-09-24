# kavienanj.github.io

Personal academic/research portfolio site for Kavienan Jegatheesan, built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Structure

- `src/pages/` — routes (Home, Research, Publications, Projects, CV, Blog)
- `src/content/` — content collections: `publications/`, `projects/`, `blog/`
- `src/data/` — hand-curated structured data (`news.ts`, `social.ts`, `cv.ts`)
- `src/components/`, `src/layouts/` — UI
- `latex/` — the source-of-truth LaTeX CVs (`cv_professional.tex`, `cv_research.tex`). **Not edited by the website build** — update the site's content by hand in `src/content/` and `src/data/cv.ts` when the CVs change.
- `public/cv/` — compiled CV PDFs (`professional-cv.pdf`, `research-cv.pdf`) linked from the `/cv` page. Recompile from `latex/` (e.g. `latexmk -xelatex cv_research.tex`) and drop the output here when the CVs are updated.

## Development

```bash
npm install
npm run dev       # http://localhost:4321
npm run build      # outputs to dist/
npm run preview
```

## Adding a blog post

Drop a new `.md` or `.mdx` file into `src/content/blog/` with frontmatter matching the schema in `src/content.config.ts` (`title`, `date`, `description`, `tags`, `draft`). It will appear automatically on `/blog`.

## Deployment

Pushing to `main` triggers `.github/workflows/pages.yml`, which builds the site with the official [Astro GitHub Pages action](https://github.com/withastro/action) and publishes it via GitHub Pages (Settings → Pages → Source: GitHub Actions).
