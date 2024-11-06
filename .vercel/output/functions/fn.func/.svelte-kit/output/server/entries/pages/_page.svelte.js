import { F as attr, G as stringify, N as bind_props, E as pop, B as push } from "../../chunks/index.js";
import { v as views } from "../../chunks/views.js";
import { C as Carousel } from "../../chunks/Carousel.js";
import { m as media } from "../../chunks/api.js";
function Hero($$payload, $$props) {
  push();
  let images, backdrop, logo;
  let movie = $$props["movie"];
  images = movie.images;
  backdrop = images.backdrops.find((image) => !image.iso_639_1) || images.backdrops[0];
  logo = images.logos.find((logo2) => logo2.iso_639_1 === "en") || images.logos[0];
  $$payload.out += `<a${attr("href", `/movies/${stringify(movie.id)}`)} class="column svelte-167lnyy"><img class="backdrop svelte-167lnyy"${attr("src", media(backdrop.file_path, 1280))}${attr("alt", movie.title)}${attr("style", `aspect-ratio: ${stringify(backdrop.aspect_ratio)};`)}> <img class="logo svelte-167lnyy"${attr("src", media(logo.file_path, 1280))}${attr("alt", movie.title)}${attr("style", `aspect-ratio: ${stringify(logo.aspect_ratio)};`)}></a>`;
  bind_props($$props, { movie });
  pop();
}
function _page($$payload, $$props) {
  push();
  let data = $$props["data"];
  $$payload.out += `<h1 class="column">Top trending movies</h1> `;
  Hero($$payload, { movie: data.featured });
  $$payload.out += `<!----> `;
  Carousel($$payload, {
    movies: data.trending.results,
    view: views.trending,
    href: "/movies/trending"
  });
  $$payload.out += `<!----> `;
  Carousel($$payload, {
    movies: data.nowPlaying.results,
    view: views.now_playing,
    href: "/movies/now_playing"
  });
  $$payload.out += `<!----> `;
  Carousel($$payload, {
    movies: data.upcoming.results,
    view: views.upcoming,
    href: "/movies/upcoming"
  });
  $$payload.out += `<!---->`;
  bind_props($$props, { data });
  pop();
}
export {
  _page as default
};
