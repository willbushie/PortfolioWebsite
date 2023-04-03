// All Website functionality code will be held here



// Navbar hamburger menu functionality
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
    ul.classList.toggle("show");
});

// remove hamburger menu when link is clicked
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) => link.addEventListener("click", () => {
    ul.classList.remove("show");
  }));
