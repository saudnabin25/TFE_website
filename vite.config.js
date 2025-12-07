import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const repoName = "TFE_website";
const basePath = process.env.GITHUB_ACTIONS ? `/${repoName}/` : "/";

export default defineConfig({
  base: basePath,
  plugins: [react()],
});
