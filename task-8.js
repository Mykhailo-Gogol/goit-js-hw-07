const mainContinerRef = document.querySelector("#controls");
const containerRef = document.querySelector("#boxes");
const createButtonRef = document.querySelector("[data-action='render']");
const destroyButtonRef = document.querySelector("[data-action='destroy']");
const amountOfBoxes = document.querySelector("[type='number']");

//Додає змінні
let amount = 0;
let startWidth = 20;
let startHeight = 20;
let arrayOfBoxes = [];

// Присвоює значення input amount-у
function onAmount(amountOfBoxes) {
  amount = amountOfBoxes.target.value;
}

// Генерує рандомні кольори
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Збільшує ширину на 10
function setWidth() {
  startWidth += 10;
  return startWidth;
}
// Збільшує висоту на 10
function setHeight() {
  startHeight += 10;
  return startHeight;
}

//Додає згенеровані div
function createBoxes() {
  for (let i = 0; i < amount; i++) {
    const colorDiv = document.createElement("div");
    colorDiv.style.backgroundColor = getRandomColor();
    colorDiv.style.width = setWidth() + "px";
    colorDiv.style.height = setHeight() + "px";
    arrayOfBoxes.push(colorDiv);
  }
  containerRef.append(...arrayOfBoxes);
}

// Видаляє згенеровані div
function destroyBoxes() {
  containerRef.innerHTML = "";
  arrayOfBoxes = [];
  startWidth = 20;
  startHeight = 20;
}

//Додає слухачів для input i Створити
amountOfBoxes.addEventListener("input", onAmount);
createButtonRef.addEventListener("click", createBoxes);
destroyButtonRef.addEventListener("click", destroyBoxes);

/*
 * REFACTORING: Замінив let на const
 */
