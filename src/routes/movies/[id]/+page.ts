import { get } from "$lib/api.js";
import type { MovieDetails, Video } from "$lib/types.js";

export async function load({ params, fetch }) {
	const movie = (await get(fetch, `movie/${params.id}`, {
		append_to_response: "images,videos,recommendations"
	})) as MovieDetails;

	const trailer = movie.videos.results.find((video) => {
		return (
			video.official &&
			video.site === "Youtube" &&
			(video.type === "Trailer" || video.type === "Teaser")
		);
	});

	return {
		movie, 
		trailer
	}
}
