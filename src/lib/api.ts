export const base = "https://api.movies.tastejs.com";
export const mediaBase = "https://image.tmdb.org/t/p";

const cache = new Map();

export async function get(
	fetch: typeof globalThis.fetch,
	endpoint: string,
	params?: Record<string, string>
) {
	const query = new URLSearchParams(params);
	const url = `${base}/${endpoint}?${query}`;

	if (cache.has(url)) return cache.get(url);

	const res = await fetch(url);

	const data = await res.json();
	cache.set(url, data)

	return data;
}

export function media(filePath: string, width: number) {
	return `${mediaBase}/w${width}${filePath}`;
}
