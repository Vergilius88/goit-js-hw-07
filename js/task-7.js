"use strict";
const sliderRef = document.querySelector("#font-size-control");
const mutableTextRef = document.querySelector("#text");

function textSizeControl(keyup, elm) {
  elm.style.fontSize = keyup.target.value + "px";
}

sliderRef.addEventListener("input", (keyup) =>
  textSizeControl(keyup, mutableTextRef)
);
