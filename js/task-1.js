"use strict";

const categoriesAmount = document.querySelector("#categories").children.length;
console.log(`В списке ${categoriesAmount} категории.`);

const itemRef = document.querySelectorAll(".item");

itemRef.forEach((item) =>
  console.log(
    `Категория: ${item.firstElementChild.textContent} 
    Элементов: ${item.firstElementChild.nextElementSibling.children.length} `
  )
);
