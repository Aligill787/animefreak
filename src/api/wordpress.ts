const wordpressApiUrl = (import.meta.env.VITE_WORDPRESS_API_URL || '').replace(/\/$/, '');

export const isWordPressConfigured = Boolean(wordpressApiUrl);

export async function wordpressRequest<T>(
  path: string,
  options: RequestInit = {}
): Promise<T> {
  if (!wordpressApiUrl) {
    throw new Error('VITE_WORDPRESS_API_URL is not configured.');
  }

  const response = await fetch(`${wordpressApiUrl}/${path.replace(/^\//, '')}`, {
    ...options,
    headers: {
      Accept: 'application/json',
      ...options.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`WordPress request failed with status ${response.status}.`);
  }

  return response.json() as Promise<T>;
}

export function getWordPressApiUrl(path: string): string {
  if (!wordpressApiUrl) {
    throw new Error('VITE_WORDPRESS_API_URL is not configured.');
  }

  return `${wordpressApiUrl}/${path.replace(/^\//, '')}`;
}
