const nav = document.querySelector(".nav");
const navLinks = document.querySelector(".nav__links");
nav.addEventListener("click", function (e) {
  if (e.target.className === "menu") {
    navLinks.classList.toggle("toggle_menu");
  }
});
