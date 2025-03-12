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
    if (!inputField.matches(":focus")) {
      keepFocus();
    }
  });
});
