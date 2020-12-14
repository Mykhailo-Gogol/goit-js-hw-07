const divContainerRef = document.querySelector("#counter");
const decrementButtonRef = document.querySelector("[data-action='decrement']");
const incrementButtonRef = document.querySelector("[data-action='increment']");

const value = document.querySelector("#value");
let counterValue = 0;

function increment() {
  counterValue += 1;
  value.textContent = counterValue;
}

function decrement() {
  counterValue -= 1;
  value.textContent = counterValue;
}

decrementButtonRef.addEventListener("click", decrement);
incrementButtonRef.addEventListener("click", increment);
