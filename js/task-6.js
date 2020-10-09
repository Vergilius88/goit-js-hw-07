"use strict";

const inputRef = document.querySelector("#validation-input");
const correctInputLength = Number.parseInt(inputRef.dataset.length);

inputRef.addEventListener("blur", () => {
  if (inputRef.value.length === correctInputLength) {
    inputRef.classList.add("valid"),
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.add("invalid"),
    inputRef.classList.remove("valid");
  }
});
