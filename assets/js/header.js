"use strict";

for (const element of document.getElementsByClassName("toggle")) {
  element.onclick = _ => {
    const target = document.getElementById(element.dataset.for);
    if (target.dataset.active === "false") {
      element.dataset.active = "true";
      target.dataset.active = "true";
    } else {
      element.dataset.active = "false"
      target.dataset.active = "false";
    }
  };
}
