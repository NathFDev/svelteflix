import { v as views } from "../../chunks/views.js";
const match = (param) => {
  return param in views;
};
export {
  match
};
