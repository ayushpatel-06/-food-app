const rawApiUrl = import.meta.env.VITE_API_URL || import.meta.env.VITE_BACKEND_URL || 'http://localhost:8001/api';

export const API_URL = rawApiUrl.replace(/\/$/, '');

export function getImageUrl(imagePath?: string) {
  if (!imagePath) return '';
  if (/^https?:\/\//i.test(imagePath)) return imagePath;

  const baseUrl = API_URL.replace(/\/api$/, '');
  const normalizedPath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
  return `${baseUrl}${normalizedPath}`;
}
