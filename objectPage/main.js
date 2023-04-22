const isScrolling = () => {
    const headerEl = document.querySelector('.primary-header')
    let windowPosition = window.scrollY > 350
    headerEl.classList.toggle('active', windowPosition)
}
window.addEventListener('scroll', isScrolling)

const OpenBurger = () => {
    const headerEl = document.querySelector('.primary-header')
    fJs.classList.toggle("first-stick")
    sJs.classList.toggle("second-stick")
    burgerMenuJs.classList.toggle("burger-open")
    headerEl.classList.toggle('active')
}

burgerBtn.addEventListener('click', OpenBurger)

