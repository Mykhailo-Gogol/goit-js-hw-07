const divContainerRef = document.querySelector("#counter");
divContainerRef.style.width = "600px";
divContainerRef.style.backgroundColor = "yellow";
divContainerRef.style.margin = "auto";
divContainerRef.style.padding = "50px";
divContainerRef.style.marginTop = "50px";
divContainerRef.style.marginBottom = "50px";

divContainerRef.style.display = "flex";
divContainerRef.style.justifyContent = "center";
divContainerRef.style.alignItems = "center";

const decrementButtonRef = document.querySelector("[data-action='decrement']");
//console.log("decrementButtonRef :>> ", decrementButtonRef);

decrementButtonRef.style.display = "inline-block";
decrementButtonRef.style.width = "200px";
decrementButtonRef.style.padding = "20px";
decrementButtonRef.style.marginRight = "20px";

const incrementButtonRef = document.querySelector("[data-action='increment']");
//console.log("incrementButtonRef :>> ", incrementButtonRef);

incrementButtonRef.style.display = "inline-block";
incrementButtonRef.style.width = "200px";
incrementButtonRef.style.padding = "20px";
incrementButtonRef.style.marginLeft = "20px";

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
