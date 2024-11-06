import { g as get } from "../../../../chunks/api.js";
async function load({ params, fetch }) {
  const movie = await get(fetch, `movie/${params.id}`, {
    append_to_response: "images,videos,recommendations"
  });
  const trailer = movie.videos.results.find((video) => {
    return video.official && video.site === "Youtube" && (video.type === "Trailer" || video.type === "Teaser");
  });
  return {
    movie,
    trailer
  };
}
export {
  load
};
