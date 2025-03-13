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
    inputField.value = "";
    keepFocus();
  });

  document.querySelector(".DE").addEventListener("click", function () {
    inputField.value = inputField.value.slice(0, -1);
    keepFocus();
  });

  document.querySelector(".brackets").addEventListener("click", function () {
    let value = inputField.value;
    let openBrackets = (value.match(/\(/g) || []).length;
    let closeBrackets = (value.match(/\)/g) || []).length;

    if (openBrackets > closeBrackets) {
      inputField.value += ")";
    } else {
      inputField.value += "(";
    }
    keepFocus();
  });

  document.querySelector(".percent").addEventListener("click", function () {
    inputField.value = parseFloat(inputField.value) / 100;
    formatNumber();
    keepFocus();
  });

  function formatNumber() {
    let value = inputField.value.replace(/,/g, "");
    if (!isNaN(value) && value !== "") {
      inputField.value = Number(value).toLocaleString();
    }
  }

  function calculateResult() {
    try {
      let result = eval(inputField.value.replace(/,/g, ""));
      inputField.value = result.toLocaleString();
    } catch (error) {
      inputField.value = "Error";
    }
    keepFocus();
  }
});
