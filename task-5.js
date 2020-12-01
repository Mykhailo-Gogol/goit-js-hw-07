const inputRef = document.querySelector("#name-input");
const containerRef = document.querySelector(".task-5-container");
const spanOutputRef = document.querySelector("#name-output");

inputRef.addEventListener("input", onChangeInput);

function onChangeInput(e) {
  spanOutputRef.textContent = e.target.value;
  if (e.target.value.length < 1) {
    spanOutputRef.textContent = "незнайомець";
  }
}

containerRef.style.marginTop = "50px";
containerRef.style.marginBottom = "50px";
