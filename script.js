let menuBtn = document.getElementById("menu-btn");
let navbar = document.getElementById("header");

function clickHandler() {
    console.log(window.innerWidth);
    if (window.innerWidth <= 1000) {
        if (menuBtn.classList.contains("active")) {
            menuBtn.classList.toggle("non-active");
            menuBtn.classList.remove("active");
            navbar.style.height = "10vh";

        } else {
            menuBtn.classList.toggle("active");
            menuBtn.classList.remove("non-active");
            navbar.style.height = "max-content"

        }

    }

}

