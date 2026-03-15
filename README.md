# Aboubacar Ari Gonimi – Personal Portfolio

Personal portfolio website for **Aboubacar Ari Gonimi**, Senior Data Engineer. Built as a static site for [GitHub Pages](https://pages.github.com/) with support for the custom domain **aarigonimi.com**.

**Live (after deployment):**
- GitHub Pages: `https://aarigonimi.github.io`
- Custom domain: `https://aarigonimi.com`

---

## Project structure

```
aarigonimi.github.io/
├── index.html          # Single-page site (all sections)
├── css/
│   └── styles.css      # Layout, dark/light theme, responsive
├── js/
│   └── main.js         # Theme toggle, mobile nav, footer year
├── assets/
│   └── favicon.svg     # Favicon
├── CNAME               # Custom domain (aarigonimi.com)
└── README.md           # This file
```

No build step: the site is plain HTML, CSS, and JavaScript.

---

## Run locally

1. Clone the repo:
   ```bash
   git clone https://github.com/aarigonimi/aarigonimi.github.io.git
   cd aarigonimi.github.io
   ```

2. Serve the folder with any static server, for example:
   ```bash
   # Python
   python3 -m http.server 8000

   # Node (npx)
   npx serve .

   # VS Code Live Server
   # Right-click index.html → "Open with Live Server"
   ```

3. Open `http://localhost:8000` (or the port shown).

---

## Deploy to GitHub Pages

### Option A: User/org site (repo name `username.github.io`)

1. Create a repository named **`aarigonimi.github.io`**.
2. Push this project to the `main` branch:
   ```bash
   git remote add origin https://github.com/aarigonimi/aarigonimi.github.io.git
   git branch -M main
   git add .
   git commit -m "Initial portfolio"
   git push -u origin main
   ```
3. In GitHub: **Settings → Pages**:
   - **Source:** Deploy from a branch
   - **Branch:** `main` / `/(root)`
   - Save. The site will be at `https://aarigonimi.github.io`.

### Option B: Project site (repo name anything else)

1. Push the project to a repo (e.g. `my-portfolio`).
2. **Settings → Pages**:
   - Source: Deploy from a branch
   - Branch: `main`, folder **`/ (root)`**
3. Site URL will be `https://<username>.github.io/<repo-name>/`.  
   If you use a custom domain, add the `CNAME` file and point the domain as below (and set **Base URL** if you use a framework with base path).

---

## Custom domain: aarigonimi.com

### 1. Add the CNAME file (already in the repo)

The repo contains a **CNAME** file with one line:

```
aarigonimi.com
```

Do **not** add `www` or `https://`. Keep the file in the root so it’s deployed with the site.

### 2. Configure DNS at your domain registrar

At the registrar where **aarigonimi.com** is registered (e.g. Namecheap, Google Domains, Cloudflare), add:

| Type  | Name/Host | Value |
|-------|-----------|--------|
| **A** | `@`       | `185.199.108.153` |
| **A** | `@`       | `185.199.109.153` |
| **A** | `@`       | `185.199.110.153` |
| **A** | `@`       | `185.199.111.153` |
| **CNAME** | `www`  | `aarigonimi.github.io.` |

(Use your actual GitHub Pages CNAME if GitHub shows different IPs in **Settings → Pages → Custom domain**.)

### 3. Set the custom domain in GitHub

1. Repo → **Settings → Pages**.
2. Under **Custom domain**, enter: **aarigonimi.com**
3. Save. Wait for DNS to propagate (up to 48 hours).
4. Optionally enable **Enforce HTTPS** once the domain is verified.

### 4. Optional: redirect www to apex

If you want `www.aarigonimi.com` to redirect to `aarigonimi.com`, you can use a redirect service at your DNS/CDN provider or keep only the apex (non-www) in CNAME and point www to the same GitHub Pages URL if your host supports it.

---

## SEO and branding

- **Title:** Aboubacar Ari Gonimi | Senior Data Engineer | AWS Community Builder | Databricks Certified
- **Meta description** and **Open Graph** tags are set in `index.html` for sharing and search.
- **Canonical URL** is set to `https://aarigonimi.com/` so it works once the custom domain is active.

---

## Tech stack

- **HTML5** (semantic sections, accessibility)
- **CSS3** (custom properties, dark/light theme, responsive)
- **Vanilla JavaScript** (theme toggle, mobile menu, footer year)
- **Fonts:** DM Sans, JetBrains Mono (Google Fonts)

No frameworks or build tools; deployment is upload/push to GitHub.

---

## License

Content and design © Aboubacar Ari Gonimi. All rights reserved.
