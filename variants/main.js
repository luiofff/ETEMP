const OpenBurger = () => {
    fJs.classList.toggle("first-stick")
    sJs.classList.toggle("second-stick")
    burgerMenuJs.classList.toggle("burger-open")
    fullScreen.classList.toggle("")
}

burgerBtn.addEventListener('click', OpenBurger)