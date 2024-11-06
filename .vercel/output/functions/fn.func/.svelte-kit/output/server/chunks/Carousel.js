import { O as ensure_array_like, L as escape_html, F as attr, G as stringify, N as bind_props, E as pop, B as push } from "./index.js";
import { m as media } from "./api.js";
function Carousel($$payload, $$props) {
  push();
  let movies = $$props["movies"];
  let view = $$props["view"];
  let href = $$props["href"];
  const each_array = ensure_array_like(movies);
  $$payload.out += `<h2 class="column svelte-1dxe271">${escape_html(view.title)} `;
  if (href) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<a${attr("href", href)} class="svelte-1dxe271">see all</a>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></h2> <div class="carousel svelte-1dxe271"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let movie = each_array[$$index];
    $$payload.out += `<a${attr("href", `movies/${stringify(movie.id)}`)} class="svelte-1dxe271"><img${attr("src", media(movie.poster_path, 500))}${attr("alt", movie.title)} class="svelte-1dxe271"></a>`;
  }
  $$payload.out += `<!--]--></div>`;
  bind_props($$props, { movies, view, href });
  pop();
}
export {
  Carousel as C
};
