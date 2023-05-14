function show(value) {
  dropText.innerHTML = value;
  dropText.classList.add("dropdown_text_active");
  document.querySelector(".bottom_line_dropdown").classList.remove("bottom_line_dropdown_active");
  document.querySelector(".material-symbols-outlined").classList.remove("material-symbols-outlined_active");
}




const dropdownActive = () => {
  document.querySelector(".material-symbols-outlined").classList.toggle("material-symbols-outlined_active");
  document.querySelector(".bottom_line_dropdown").classList.toggle("bottom_line_dropdown_active");
}

document.querySelector(".input_field_dropdown").addEventListener("click", dropdownActive);


