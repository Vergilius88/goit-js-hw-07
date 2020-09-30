"use strict";

const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", () => {
  if (inputRef.value.length === Number.parseInt(inputRef.dataset.length)) {
    inputRef.classList = "valid";
  } else {
    inputRef.classList = "invalid";
  }
});
