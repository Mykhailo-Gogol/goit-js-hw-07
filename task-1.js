const categories = document.querySelectorAll(".item");
console.log(`В списке ${categories.length} категории.`);

const headings = document.querySelectorAll("h2");
const listOfElements = document.querySelectorAll("li.item ul");

listOfElements.forEach((element, index) => {
  console.log(`Категория: ${headings[index].textContent}`);
  console.log(`Количество елементов: ${element.children.length}`);
});

/*
 * REFACTORING: Замінив let на const
 * REFACTORING: Замінив for на функциональний метод forEach
 * REFACTORING: Виконав завдання з одну операцію
 */
