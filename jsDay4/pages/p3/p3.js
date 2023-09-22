import { getText } from "../p2/p2.js";

export function initP3() {
  console.log("In initP3()");
  document.getElementById("text").innerText = getText();
}
