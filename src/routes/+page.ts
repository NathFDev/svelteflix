import type { MovieDetails, MovieList } from "$lib/types.js";
import { get } from "$lib/api.js";

export async function load({ fetch }) {
	const [trending, nowPlaying, upcoming] = await Promise.all([
		get(fetch, "trending/movie/day", { page: "1" }) as Promise<MovieList>,
		get(fetch, "movie/now_playing", { page: "1" }) as Promise<MovieList>,
		get(fetch, "movie/upcoming", { page: "1" }) as Promise<MovieList>
	]);

	const featured = (await get(fetch, `movie/${trending.results[0].id}`, {
		append_to_response: "images,videos,recommendations"
	})) as MovieDetails;

	return {
		trending,
		featured,
		nowPlaying,
		upcoming
	};
}
