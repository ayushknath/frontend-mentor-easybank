const hamMenu = document.querySelector(".ham-menu");
const menuImg = document.querySelector(".ham-menu > img");
const mobileNav = document.querySelector(".ham-menu + nav");
let isMenuOpen = false;

hamMenu.addEventListener("click", (e) => {
  if (isMenuOpen) {
    menuImg.src = "./images/icon-hamburger.svg";
    mobileNav.style.display = "none";
    isMenuOpen = false;
  } else {
    menuImg.src = "./images/icon-close.svg";
    mobileNav.style.display = "flex";
    isMenuOpen = true;
  }
});
