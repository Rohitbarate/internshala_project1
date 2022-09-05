let menuBtn = document.getElementById("menu-btn");
let navbar = document.getElementById("navbar");

function clickHandler(){
    if(menuBtn.classList.contains("active")){
        menuBtn.classList.toggle("non-active");
        menuBtn.classList.remove("active");
        navbar.style.display="none"
        
    }else{
        menuBtn.classList.toggle("active");
        menuBtn.classList.remove("non-active");
        navbar.style.display="flex"

    }

}

