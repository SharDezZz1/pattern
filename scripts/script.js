const BURGER = document.getElementById("burger");
const MOBILE_MENU = document.getElementById("mobile__menu");
const HEADER = document.querySelector("header");
const MOBILE_MENU_LINKS = document.querySelectorAll("li")


BURGER.addEventListener('click', () => {
    BURGER.classList.toggle("active");
    MOBILE_MENU.classList.toggle("active");
    HEADER.classList.toggle("active")
});

MOBILE_MENU_LINKS.forEach((link) => {
    link.addEventListener('click', () => {

    })
})
