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
  const conteinerIngredients = document.createElement("li");
  conteinerIngredients.textContent = ingredients;
  return conteinerIngredients;
};
const ingredientsListAcc = ingredients.map((ingredients) =>
  ingredientsListGenerator(ingredients)
);

ingredientsRef.append(...ingredientsListAcc);
