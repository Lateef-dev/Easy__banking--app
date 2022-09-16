const navButton = document.querySelector(".nav__list--btn");
const closeButton = document.querySelector(".nav__list--btn__close");
const listContainer = document.querySelector(".nav__list");
const overlay= document.querySelector(".overlay");

const openNavList = function() {
    [listContainer,overlay,closeButton].forEach(sel => sel.style.display = "block");
    navButton.style.display = "none";
}

const closeNavList = function() {
    [listContainer,overlay,closeButton].forEach(sel => sel.style.display = "none");
    navButton.style.display = "block";
}

navButton.addEventListener("click", openNavList)
closeButton.addEventListener("click", closeNavList)