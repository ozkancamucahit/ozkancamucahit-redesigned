# mucahito.dev

Personal developer blog built with Docusaurus, MDX, and Bun.

## Run locally

```sh
bun install
bun start
```

The default locale is English. Use the locale switcher in the navbar to view the Turkish version.

## Write

Add Turkish posts to `blog/` and English translations to `i18n/en/docusaurus-plugin-content-blog/`. Posts are paginated at six per page.

## Deploy to GitHub Pages

The repository includes a GitHub Actions workflow at `.github/workflows/deploy.yml`.
Every push to `main` builds the site with Bun and publishes the `build/` directory
to GitHub Pages.

1. Push the repository to GitHub.
2. In **Settings → Pages**, set **Source** to **GitHub Actions**.
3. Push to `main`, or run **Deploy to GitHub Pages** manually from the **Actions** tab.
4. Open the deployment URL shown in the workflow run or in **Settings → Pages**.

This project is already configured for the custom domain `https://mucahito.dev`.
To use that domain, add `mucahito.dev` as the custom domain in **Settings → Pages**,
then create the DNS records required by GitHub:

- Apex `A` records for `mucahito.dev` pointing to GitHub Pages:
  `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, and `185.199.111.153`.
- A `CNAME` record for `www.mucahito.dev` pointing to the GitHub Pages hostname.

If you do not want to use the custom domain, update `url` and `baseUrl` in
`docusaurus.config.ts` to match the GitHub Pages project URL before deploying.
