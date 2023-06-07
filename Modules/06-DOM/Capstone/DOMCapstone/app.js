const header = document.querySelector("header");
console.log(header);

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.remove("slide-down");
    header.classList.add("slide-up");
  } else {
    header.classList.remove("slide-up");
    header.classList.add("slide-down");
    header.style.display = "flex";
  }
});

window.addEventListener("mousemove", function (e) {
  if (header.classList.contains("slide-up")) {
    if (e.clientY <= 100) {
      header.classList.remove("slide-up");
      header.classList.add("slide-down");
    }
  } else if (header.classList.contains("slide-down") && window.scrollY > 100) {
    if (e.clientY > 150) {
      header.classList.remove("slide-down");
      header.classList.add("slide-up");
    }
  }
});
