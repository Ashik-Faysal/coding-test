// write your JavaScript here
const mobileMenu = document.getElementById("mobileMenu");
const humbergerMenu = document.getElementById("menu");

humbergerMenu.addEventListener("click", () => {
  humbergerMenu.classList.toggle("fa-xmark");
  mobileMenu.classList.toggle("active");
});
