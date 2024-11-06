const base = "https://api.movies.tastejs.com";
const mediaBase = "https://image.tmdb.org/t/p";
const cache = /* @__PURE__ */ new Map();
async function get(fetch, endpoint, params) {
  const query = new URLSearchParams(params);
  const url = `${base}/${endpoint}?${query}`;
  if (cache.has(url)) return cache.get(url);
  const res = await fetch(url);
  const data = await res.json();
  cache.set(url, data);
  return data;
}
function media(filePath, width) {
  return `${mediaBase}/w${width}${filePath}`;
}
export {
  get as g,
  media as m
};
