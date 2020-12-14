const inputRef = document.querySelector("#validation-input");

const requiredLength = parseInt(inputRef.dataset.length);
inputRef.addEventListener("blur", onValidation);

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

/*
 * REFACTORING: Замінив подію з 'input' на 'change'
 */
