const isScrolling = () => {
  const headerEl = document.querySelector('.primary-header')
  const content = document.querySelector('.f-page-cont-for-js')
  let windowPosition = window.scrollY > 350
  headerEl.classList.toggle('active', windowPosition)
  content.classList.toggle('invisible', windowPosition)
}
window.addEventListener('scroll', isScrolling)