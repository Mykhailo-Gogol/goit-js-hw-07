const inputRef = document.querySelector("#validation-input");
inputRef.style.outline = "none";

const requiredLength = parseInt(inputRef.dataset.length);
inputRef.addEventListener("change", onValidation);

function onValidation(element) {
  if (element.target.value.length === requiredLength) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.add("invalid");
  }
  if (element.target.value.length < 1) {
    inputRef.classList.remove("valid");
    inputRef.classList.remove("invalid");
  }
}

inputRef.style.marginTop = "50px";
inputRef.style.marginBottom = "50px";

/*
 * REFACTORING: Замінив подію з 'input' на 'change'
 */
