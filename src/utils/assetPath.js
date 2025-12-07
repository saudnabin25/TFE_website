export const assetPath = relativePath => {
  if (!relativePath) return relativePath;
  const normalized = relativePath.replace(/^\/+/, "");
  return new URL(`/${normalized}`, import.meta.env.BASE_URL).href;
};
