const isScrolling = () => {
    const headerEl = document.querySelector('.for-backgroundcolor-logic')
    const secondNAV = document.querySelector(".additional-block")
    let windowPosition = window.scrollY > 350
    headerEl.classList.toggle('active', windowPosition)

    let windowPositionSecondNavOpen = window.scrollY > 20
    secondNAV.classList.toggle('secondJs',  windowPositionSecondNavOpen)

    if (window.scrollY > 450) {
        secondNAV.classList.remove('secondJs')
    }

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

