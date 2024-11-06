import { F as attr, L as escape_html, N as bind_props, E as pop, B as push, G as stringify } from "../../../../chunks/index.js";
import { C as Carousel } from "../../../../chunks/Carousel.js";
import { m as media } from "../../../../chunks/api.js";
function Hero($$payload, $$props) {
  push();
  let backdrop;
  let movie = $$props["movie"];
  backdrop = movie.images.backdrops.find((image) => !image.iso_639_1) || movie.images.backdrops[0];
  $$payload.out += `<div class="hero svelte-vqc02o"><div class="backdrop svelte-vqc02o"><img${attr("src", media(backdrop.file_path, 1280))}${attr("alt", movie.title)} class="svelte-vqc02o"></div> <div class="info svelte-vqc02o"><h1 class="svelte-vqc02o">${escape_html(movie.title)}</h1> <p class="svelte-vqc02o">${escape_html(movie.overview)}</p></div></div>`;
  bind_props($$props, { movie });
  pop();
}
function _page($$payload, $$props) {
  push();
  let data = $$props["data"];
  Hero($$payload, { movie: data.movie });
  $$payload.out += `<!----> <div class="column grid svelte-rt3lau">`;
  if (data.trailer) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<iframe${attr("src", `https://www.youtube.com/embed/${stringify(data.trailer.key)}`)} title="Youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscrope; picture-in-picture; web-share" allowfullscreen class="svelte-rt3lau"></iframe>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <dl class="svelte-rt3lau"><dt class="svelte-rt3lau">Released</dt> <dd class="svelte-rt3lau">${escape_html(data.movie.release_date)}</dd> <dt class="svelte-rt3lau">Runtime</dt> <dd class="svelte-rt3lau">${escape_html(data.movie.runtime)} minutes</dd> <dt class="svelte-rt3lau">Budget</dt> <dd class="svelte-rt3lau">$${escape_html(Math.round(data.movie.budget) / 1e6)}M</dd> <dt class="svelte-rt3lau">Revenue</dt> <dd class="svelte-rt3lau">$${escape_html(Math.round(data.movie.revenue) / 1e6)}M</dd> <dt class="svelte-rt3lau">Genre</dt> <dd class="svelte-rt3lau">${escape_html(data.movie.genres.map((g) => g.name).join(", "))}</dd></dl></div> `;
  if (data.movie.recommendations.results.length < 0) {
    $$payload.out += "<!--[-->";
    Carousel($$payload, {
      view: { title: "You might also like", endpoint: "" },
      movies: data.movie.recommendations.results,
      href: null
    });
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { data });
  pop();
}
export {
  _page as default
};
