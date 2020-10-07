"use strict";

const additionBtn = document.querySelector('button[data-action="increment"]');
const subtractionBtn = document.querySelector(
  'button[data-action="decrement"]'
);
const counterValue = document.querySelector("#value");

const increment = () =>
  (counterValue.textContent = Number.parseInt(counterValue.textContent) + 1);
const decrement = () =>
  (counterValue.textContent = Number.parseInt(counterValue.textContent) - 1);

additionBtn.addEventListener("click", increment);
subtractionBtn.addEventListener("click", decrement);
