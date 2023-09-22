import { initAdd } from "./pages/add-car/add-car.js";
import { initEdit } from "./pages/edit-car/edit-car.js";
import { initSearch } from "./pages/search-car/search-car.js";
import { initShowAll } from "./pages/show-all/show-all.js";
import { loadHtml, renderHtml } from "./util.js";

window.addEventListener("load", async () => {
  const templateAdd = await loadHtml("./pages/add-car/add-car.html");
  const templateEdit = await loadHtml("./pages/edit-car/edit-car.html");
  const templateSearch = await loadHtml("./pages/search-car/search-car.html");
  const templateShowAll = await loadHtml("./pages/show-all/show-all.html");

  document.getElementById("btns").onclick = handleButtonClicks;
  renderHtml(templateShowAll, "content");

  function handleButtonClicks(evt) {
    const target = evt.target;
    const isMenuBtn = target.tagName === "BUTTON" && target.id.startsWith("menu-btn-");
    if (!isMenuBtn) {
      console.log("Not a menu button, Remove this line when you know what is going on here");
      return;
    }
    if (target.id === "menu-btn-show") {
      renderHtml(templateShowAll, "content");
      initShowAll();
    }
    if (target.id === "menu-btn-search") {
      renderHtml(templateSearch, "content");
      initSearch();
    }
    if (target.id === "menu-btn-add") {
      renderHtml(templateAdd, "content");
      initAdd();
    }
    if (target.id === "menu-btn-edit") {
      renderHtml(templateEdit, "content");
      initEdit();
    }
  }
});
