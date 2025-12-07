import { defineConfig } from "vite";

const repoName = "TFE_website";
const basePath = process.env.GITHUB_ACTIONS ? `/${repoName}/` : "/";

export default defineConfig({
  base: basePath,
});
