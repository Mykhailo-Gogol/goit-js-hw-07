const inputRef = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");
const containerRef = document.querySelector(".task-7-container");

containerRef.style.marginTop = "50px";
containerRef.style.marginBottom = "50px";

inputRef.addEventListener("input", onChangeInputValue);

function onChangeInputValue(element) {
  spanText.style.fontSize = element.target.value + "px";
}

/*
 * REFACTORING: Замінив змінну івента з e на element
 */
