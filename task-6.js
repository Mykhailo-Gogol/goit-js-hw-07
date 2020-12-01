const inputRef = document.querySelector("#validation-input");
inputRef.style.outline = "none";
let requiredLength = parseInt(inputRef.dataset.length);
inputRef.addEventListener("input", onValidation);

function onValidation(e) {
  if (e.target.value.length === requiredLength) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.add("invalid");
  }
  if (e.target.value.length < 1) {
    inputRef.classList.remove("valid");
    inputRef.classList.remove("invalid");
  }
}

inputRef.style.marginTop = "50px";
inputRef.style.marginBottom = "50px";
