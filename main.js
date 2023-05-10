const openBurger = () => {
    document.querySelector(".array_down").classList.toggle("array_down_active");
    document.querySelector(".burger_menu").classList.toggle("burger_menu_active");
}

document.querySelector(".array_down").addEventListener("click", openBurger);