# NEXPI Landing Page

Static landing page for GitHub Pages deployment.

## Files

- `index.html` - page structure and copy
- `styles.css` - layout, theme, motion, responsive behavior
- `script.js` - mobile nav and reveal animations

## Local preview

Open `index.html` in a browser, or run a basic static server:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## GitHub Pages deployment

1. Create a new GitHub repository.
2. Push this folder to the `main` branch.
3. In GitHub: `Settings -> Pages`.
4. Set source to `Deploy from a branch`.
5. Choose branch `main` and folder `/ (root)`.
6. Save. GitHub Pages will serve `index.html`.

## Custom domain

This project already includes a `CNAME` file for:

```txt
nexpi.tech
```

Then point your DNS records to GitHub Pages using GitHub's documented setup for apex or subdomain records.
