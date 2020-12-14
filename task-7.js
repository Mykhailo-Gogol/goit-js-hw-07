const inputRef = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");

inputRef.addEventListener("input", onChangeInputValue);

function onChangeInputValue(element) {
  spanText.style.fontSize = element.target.value + "px";
}

/*
 * REFACTORING: Замінив змінну івента з e на element
 */
