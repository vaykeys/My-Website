# Deploying to Vercel

This personal portfolio website is configured for 1-click or automated deployment on [Vercel](https://vercel.com).

## What Was Configured for Vercel

1. **`vercel.json`**:
   - Explicitly defines Vite as the build framework.
   - Sets the build command to `npm run build`.
   - Sets the output directory to `dist`.
   - Enables `cleanUrls: true` (so URLs like `/projects` or `/contact` work smoothly with or without `.html`).

2. **Multi-Page Static Output**:
   - `vite.config.ts` bundles all HTML pages (`index.html`, `projects.html`, `skills.html`, `fun-facts.html`, `contact.html`, and `404.html`) into the production `dist/` directory.

3. **Static Image Assets (`public/images/`)**:
   - Images and SVGs are placed in both `public/images/` and copied automatically during build, ensuring all placeholder graphics and user photos display without 404 errors.

4. **Custom 404 Fallback**:
   - A branded `404.html` error page is included so missing routes render a friendly page with navigation back to Home.

5. **Favicon (`public/favicon.svg`)**:
   - Branded sparkle SVG icon linked across all pages.

---

## How to Deploy to Vercel

### Option 1: Deploy via GitHub (Recommended)
1. Push this project to your GitHub repository.
2. Log in to [vercel.com](https://vercel.com) and click **"Add New..."** > **"Project"**.
3. Import your GitHub repository.
4. Vercel will automatically detect Vite and use settings from `vercel.json`:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **"Deploy"**. Your website will be live with a free SSL certificate!

### Option 2: Deploy via Vercel CLI
1. In your terminal, run:
   ```bash
   npm i -g vercel
   vercel
   ```
2. Follow the terminal prompts. For production:
   ```bash
   vercel --prod
   ```
