"use strict";

for (const element of document.getElementsByClassName("toggle")) {
  element.onclick = _ => {
    if (element.dataset.active === "false") {
      element.dataset.active = "true";
    } else {
      element.dataset.active = "false"
    }
    const targets = document.getElementsByClassName(element.dataset.for);
    for (const target of targets) {
      if (target.dataset.active === "false") {
        target.dataset.active = "true";
      } else {
        target.dataset.active = "false";
      }
    }
  };
}

const links = document.links;
for (const link of links) {
  if (link.hostname != window.location.hostname) {
    link.target = "_blank";
    link.rel = "nofollow noopener noreferrer";
  }
}
