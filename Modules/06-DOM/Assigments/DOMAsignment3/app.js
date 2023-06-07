const register = document.getElementById("register");
const close = document.getElementsByClassName("close-button");
const container = document.getElementsByClassName("slide-over-container");
const background = document.getElementsByClassName("bg-backdrop");

background[0].style.opacity = "0";

register.addEventListener("click", () => {
  background[0].style.opacity = "0.2";
  register.style.opacity = "0.5";
  container[0].classList.remove("display-none");
  container[0].classList.remove("slide-out");
  container[0].classList.add("slide-in");
});

close[0].addEventListener("click", () => {
  container[0].classList.remove("slide-in");
  container[0].classList.add("slide-out");
  background[0].style.opacity = "0";
  register.style.opacity = "1";
});
