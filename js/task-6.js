"use strict";

const inputRef = document.querySelector("#validation-input");
const correctInputLength = Number.parseInt(inputRef.dataset.length);


inputRef.addEventListener("blur", () => {
  if (inputRef.value.length === correctInputLength) {
    inputRef.classList = "valid";
  } else {
    inputRef.classList = "invalid";
  }
});
