const closeDropDown = () => {
  const dropMenu = document.querySelector(".drop-variants");
  dropMenu.classList.remove("drop-menu-open");
}

document.addEventListener("click", closeDropDown)


const DropDownOpen = () => {
  const dropMenu = document.querySelector(".drop-variants");
  dropMenu.classList.toggle("drop-menu-open");
}

dropMenuBtn.addEventListener("click", DropDownOpen)

function show(value) {
  document.querySelector(".dropdownmain").value = value;
}

const ConfirmFunc = () => {
  const confirm = document.querySelector(".confirmation-scenario")
  confirm.classList.toggle("confirm-open")
}

confBtnJS.addEventListener("click", ConfirmFunc)
