const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];
const rootContainerRef = document.querySelector("#ingredients");

const arrayOfElements = ingredients.map((element) => {
  const item = document.createElement("li");
  item.textContent = element;
  return item;
});

rootContainerRef.append(...arrayOfElements);

/*
 * REFACTORING: Замінив let на const
 * REFACTORING: Замінив for на функциональний метод forEach
 * REFACTORING: Виконав завдання з одну операцію
 */
