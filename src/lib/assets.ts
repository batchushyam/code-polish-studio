/**
 * Prefix a public asset path with the Vite base URL.
 * In dev this is "/", on GitHub Pages it becomes "/code-polish-studio/".
 */
export function assetUrl(path: string): string {
  const base = import.meta.env.BASE_URL;
  // Remove leading slash from path to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${cleanPath}`;
}
