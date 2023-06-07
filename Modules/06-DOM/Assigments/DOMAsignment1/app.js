const notification = document.getElementsByClassName("notification");
const button = document.getElementsByClassName("add__button");
const ctaButton = document.getElementsByClassName("cta__button");

button[0].addEventListener("click", () => {
  notification[0].classList.add("show");
});

ctaButton[0].addEventListener("click", () => {
  notification[0].classList.remove("show");
});
