const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];

ingredients.forEach((element) => {
  const rootContainerRef = document.querySelector("#ingredients");
  rootContainerRef.style.marginTop = "50px";
  rootContainerRef.style.marginBottom = "50px";

  const itm = document.createElement("li");
  itm.textContent = element;
  rootContainerRef.append(itm);
});

/*
 * REFACTORING: Замінив let на const
 * REFACTORING: Замінив for на функциональний метод forEach
 * REFACTORING: Виконав завдання з одну операцію
 */
