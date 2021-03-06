"use strict";

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsRef = document.querySelector("#ingredients");
const ingredientsListGenerator = (ingredients) => {
  const containerIngredients = document.createElement("li");
  containerIngredients.textContent = ingredients;
  return containerIngredients;
};
const ingredientsListAcc = ingredients.map((ingredients) =>
  ingredientsListGenerator(ingredients)
);

ingredientsRef.append(...ingredientsListAcc);
