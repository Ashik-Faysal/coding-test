const mobileMenu = document.getElementById("mobileMenu");
const humbergerMenu = document.getElementById("menu");
const loginButton = document.getElementById("log-in");
const loginContainer = document.getElementById("login-container");
const loginForm = document.getElementById("login-form");

humbergerMenu.addEventListener("click", () => {
  humbergerMenu.classList.toggle("fa-xmark");
  mobileMenu.classList.toggle("active");
});

loginButton.addEventListener("click", () => {
  // Toggle the visibility of the login container when the "Log In" button is clicked
  loginContainer.classList.toggle("show-login");

  // Add or remove a class on the body to hide background content
  document.body.classList.toggle("hide-background");
});

// If you want to close the login form when clicking outside of it
document.addEventListener("click", (event) => {
  if (!loginContainer.contains(event.target) && event.target !== loginButton) {
    loginContainer.classList.remove("show-login");
    document.body.classList.remove("hide-background");
  }
});
