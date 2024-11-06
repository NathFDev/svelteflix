import { L as escape_html, N as bind_props, E as pop, B as push } from "../../../../chunks/index.js";
import { R as ResultsPage } from "../../../../chunks/ResultsPage.js";
function _page($$payload, $$props) {
  push();
  let data = $$props["data"];
  $$payload.out += `<div class="column svelte-9b8h0p"><h1>${escape_html(data.title)}</h1> `;
  ResultsPage($$payload, {
    movies: data.movies,
    next: data.next_page ? `/movies/${data.view}?page=${data.next_page}` : null
  });
  $$payload.out += `<!----></div>`;
  bind_props($$props, { data });
  pop();
}
export {
  _page as default
};
