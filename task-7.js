const inputRef = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");
const containerRef = document.querySelector(".task-7-container");

containerRef.style.marginTop = "50px";
containerRef.style.marginBottom = "50px";

inputRef.addEventListener("input", onChangeInputValue);

function onChangeInputValue(e) {
  spanText.style.fontSize = e.target.value + "px";
}
