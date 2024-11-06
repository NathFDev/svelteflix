import { O as ensure_array_like, P as add_styles, F as attr, G as stringify, N as bind_props, E as pop, B as push } from "./index.js";
import { m as media } from "./api.js";
function ResultsPage($$payload, $$props) {
  push();
  let movies = $$props["movies"];
  let next = $$props["next"];
  let a = 0;
  let b = movies.length;
  let paddingTop = 0;
  let paddingBottom = 0;
  const each_array = ensure_array_like(movies.slice(a, b));
  $$payload.out += `<div class="viewport svelte-4psko2"><div${add_styles({
    "padding-top": `${stringify(paddingTop)}px`,
    "padding-bottom": `${stringify(paddingBottom)}px`
  })} class="results svelte-4psko2"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let movie = each_array[$$index];
    $$payload.out += `<a${attr("href", `/movies/${stringify(movie.id)}`)} class="svelte-4psko2"><img${attr("src", media(movie.poster_path, 500))}${attr("alt", movie.title)} class="svelte-4psko2"></a>`;
  }
  $$payload.out += `<!--]--></div> `;
  if (next) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<a${attr("href", next)} class="svelte-4psko2">next page</a>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div>`;
  bind_props($$props, { movies, next });
  pop();
}
export {
  ResultsPage as R
};
