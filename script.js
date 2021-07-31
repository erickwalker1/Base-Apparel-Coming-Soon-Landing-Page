const button = document.querySelector(".button");
const emailInput = document.querySelector(".input");
const errorMessage = document.querySelector(".error-container");

button.addEventListener("click", function (event) {
  // JS Email Regex
  const mailformat =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!mailformat.test(emailInput.value.trim())) {
    event.preventDefault();
    errorMessage.style.display = "flex";
    emailInput.style.borderBottom = "1px solid red";
  }
});
