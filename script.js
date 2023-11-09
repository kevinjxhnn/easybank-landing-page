const hamburgerMenu = document.querySelector(".hamburger-menu");
const navBar = document.querySelector("nav");
const menuClose = document.querySelector(".close");
const popup = document.querySelector(".popup");

popup.style.zIndex = "-1";

hamburgerMenu.addEventListener("click", () => {
  navBar.classList.remove("mobile-menu");
  popup.style.opacity = "1";
  menuClose.classList.remove("display-none");
  hamburgerMenu.classList.add("display-none");
  popup.style.zIndex = "10";
});

menuClose.addEventListener("click", () => {
  navBar.classList.add("mobile-menu");
  popup.style.opacity = "0";
  menuClose.classList.add("display-none");
  hamburgerMenu.classList.remove("display-none");
});
