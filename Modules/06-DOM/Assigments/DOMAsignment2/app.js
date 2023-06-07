const palette = document.getElementsByClassName("palette");

document.addEventListener("keydown", (e) => {
  // ctrl + k will open the search bar so i changed to ctrl + m
  if (e.ctrlKey && e.key === "m") {
    palette[0].classList.toggle("fade-out");
    palette[0].classList.toggle("fade-in");
  }
});
