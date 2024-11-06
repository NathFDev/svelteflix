import { g as get } from "../../chunks/api.js";
async function load({ fetch }) {
  const [trending, nowPlaying, upcoming] = await Promise.all([
    get(fetch, "trending/movie/day", { page: "1" }),
    get(fetch, "movie/now_playing", { page: "1" }),
    get(fetch, "movie/upcoming", { page: "1" })
  ]);
  const featured = await get(fetch, `movie/${trending.results[0].id}`, {
    append_to_response: "images,videos,recommendations"
  });
  return {
    trending,
    featured,
    nowPlaying,
    upcoming
  };
}
export {
  load
};
