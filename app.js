document.addEventListener("DOMContentLoaded", function () {
  const inputField = document.querySelector(".user-input");

  function keepFocus() {
    inputField.focus();
    inputField.setSelectionRange(
      inputField.value.length,
      inputField.value.length
    );
  }

  keepFocus();

  inputField.addEventListener("blur", function () {
    setTimeout(keepFocus, 10);
  });

  document.addEventListener("keydown", function (event) {
    const allowedKeys = "1234567890./*+-%()";

    if (!inputField.matches(":focus")) {
      keepFocus();
    }

    if (["Backspace", "Enter", "Delete"].includes(event.key)) {
      return;
    }

    if (!allowedKeys.includes(event.key)) {
      event.preventDefault();
    }
  });

  document.querySelector(".equals").addEventListener("click", function () {
    calculateResult();
  });

  inputField.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      calculateResult();
    }
  });

  document.querySelector(".AC").addEventListener("click", function () {
    inputField.removeAttribute("disabled");
    inputField.value = "";
    inputField.setAttribute("disabled", "true");
  });

  document.querySelector(".DE").addEventListener("click", function () {
    inputField.removeAttribute("disabled");
    inputField.value = inputField.value.slice(0, -1);
    inputField.setAttribute("disabled", "true");
  });

  function calculateResult() {
    try {
      inputField.value = eval(inputField.value);
    } catch (error) {
      inputField.value = "Error";
    }
  }
});
