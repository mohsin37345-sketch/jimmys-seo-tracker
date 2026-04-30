# The Royals Removals SEO Tracker

A personal 28-day SEO task tracker for **The Royals Removals**, a Birmingham-based removals company.

## What It Does

- Tracks a 28-day SEO, backlinks, citations, GBP, social media, partner outreach, blog and monthly task plan
- Dashboard with progress cards, progress bars and filters
- Checkboxes and status dropdowns on every task
- Citation directory tracker with submission status
- Partner outreach table with contact tracking
- Blog tracker with publish status
- Google Search Console and GBP checklists
- Copy buttons for business details, GBP services, email templates and the full plan
- Export/Import progress as JSON
- Dark mode toggle
- Mobile-friendly responsive design
- All progress saved in localStorage

## How to Run Locally

1. Clone or download this repository
2. Open `index.html` in your browser

No server, no build step, no dependencies needed.

## How to Deploy to GitHub Pages

1. Create a new GitHub repository
2. Push all files to the `main` branch
3. Go to **Settings > Pages**
4. Under **Source**, select `Deploy from a branch`
5. Select **main** branch and **/ (root)** folder
6. Click **Save**
7. Your site will be live at `https://yourusername.github.io/repo-name/`

## How Progress Is Saved

All progress is saved in your browser using `localStorage` under the key `royals_seo_state`. This means:

- Progress persists after refreshing the page
- Progress stays until you clear browser data or click Reset
- You can export progress as a JSON file and import it on another device
- No server or database is needed

## Files

| File | Purpose |
|------|---------|
| `index.html` | Main HTML structure |
| `styles.css` | All styling with dark mode support |
| `data.js` | Task data, directories, services, templates |
| `app.js` | Application logic, rendering, localStorage |
| `README.md` | This file |
