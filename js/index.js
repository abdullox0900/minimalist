const elHamburgerBtn = document.querySelector(".burger-btn");
const elHeader = document.querySelector(".header");

elHamburgerBtn.addEventListener('click', () => {
    elHeader.classList.toggle("header--open");
})