let categories = document.querySelectorAll(".item");
console.log(`В списке ${categories.length} категории.`);

let headings = document.querySelectorAll("h2");
// headings.forEach((e) => {
//   console.log(`Категория: ${e.textContent}`);
// });

let listOfElements = document.querySelectorAll("li.item ul");
// listOfElements.forEach((e) => {
//   console.log(`Количество елементов: ${e.children.length}`);
// });

// console.log(`Категория: ${headings[0].textContent}`);
// console.log(`Количество елементов: ${listOfElements[0].children.length}`);

// console.log(`Категория: ${headings[1].textContent}`);
// console.log(`Количество елементов: ${listOfElements[1].children.length}`);

// console.log(`Категория: ${headings[2].textContent}`);
// console.log(`Количество елементов: ${listOfElements[2].children.length}`);

for (let i = 0; i < listOfElements.length; i++) {
  console.log(`Категория: ${headings[i].textContent}`);
  console.log(`Количество елементов: ${listOfElements[i].children.length}`);
}
