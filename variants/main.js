const OpenBurger = () => {
    fJs.classList.toggle("first-stick")
    sJs.classList.toggle("second-stick")
    burgerMenuJs.classList.toggle("burger-open")
}

burgerBtn.addEventListener('click', OpenBurger)


// buttonts logic

const SwipeBtns = () => {
    var target = event.target;
    
}

const buttonHeader = document.querySelector(".header-btn")

buttonHeader.addEventListener("click", SwipeBtns)