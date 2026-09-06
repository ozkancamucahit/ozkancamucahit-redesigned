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
3. In **Settings → Environments → github-pages**, review **Deployment branches and tags**.
   Allow the `main` branch, or remove the branch restriction for this environment.
4. Push to `main`, or run **Deploy to GitHub Pages** manually from the **Actions** tab.
5. Open the deployment URL shown in the workflow run or in **Settings → Pages**.

The `github-pages` environment is used by the workflow's deploy job. If it has
protection rules, GitHub must explicitly allow the branch that triggered the
workflow. Otherwise the build succeeds but the deployment is rejected with:
`Branch "main" is not allowed to deploy to github-pages`.

The site is configured for this project Pages URL:
`https://ozkancamucahit.github.io/ozkancamucahit-redesigned/`.
The repository name is part of `baseUrl` in `docusaurus.config.ts`; keep that
path when deploying this repository as a project site.
