const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];

let rootContainerRef = document.querySelector("#gallery");
rootContainerRef.style.marginTop = "50px";

for (let i = 0; i < ingredients.length; i++) {
  let itm = document.createElement("li");
  itm.textContent = ingredients[i];
  rootContainerRef.append(itm);
}
