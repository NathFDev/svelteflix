import { F as attr, N as bind_props, E as pop, B as push } from "../../../chunks/index.js";
import { R as ResultsPage } from "../../../chunks/ResultsPage.js";
function _page($$payload, $$props) {
  push();
  let data = $$props["data"];
  $$payload.out += `<div class="column"><h1>Search</h1> <form action=""><input type="text" name="query"${attr("value", data.query)} autocomplete="off" spellcheck="false" class="svelte-kk6u5n"></form> `;
  if (data.query) {
    $$payload.out += "<!--[-->";
    ResultsPage($$payload, { movies: data.movies, next: null });
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div>`;
  bind_props($$props, { data });
  pop();
}
export {
  _page as default
};
