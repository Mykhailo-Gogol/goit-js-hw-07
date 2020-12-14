const inputRef = document.querySelector("#name-input");
const spanOutputRef = document.querySelector("#name-output");

inputRef.addEventListener("input", onChangeInput);

function onChangeInput(e) {
  spanOutputRef.textContent = e.target.value;
  if (e.target.value.length < 1) {
    spanOutputRef.textContent = "незнайомець";
  }
}
