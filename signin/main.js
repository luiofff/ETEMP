const show = () => {
    if (passwordJs.type === "password") {
        passwordJs.type = "text";
        showBtnJs.innerHTML = visibility_off
    } else {
        passwordJs.type = "password";
        showBtnJs.innerHTML = visibility
    }
}

showBtnJs.addEventListener("click", show)
