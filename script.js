const button = document.querySelector(".button");
const inputBox = document.querySelector(".input");

button.addEventListener("click", function (event) {
  event.preventDefault();
  checkForValidEmail();
});

function checkForValidEmail() {
  if (inputBox.value.includes("@")) {
    window.sessionStorage.setItem("key", inputBox.value);
    document.getElementById("input-form").reset();
  } else {
    alert("Please Provide A Valid Email");
  }
}
