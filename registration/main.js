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

const ConfirmClose = () => {
  const confirm = document.querySelector(".confirmation-scenario")
  confirm.classList.remove("confirm-open")
}

confBack.addEventListener("click", ConfirmClose)