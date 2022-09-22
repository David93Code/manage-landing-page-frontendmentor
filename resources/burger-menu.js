let burger = document.getElementById("burger");
let isBurger = true;

burger.onclick = function() {
    if(isBurger) {
        burger.src = "./resources/images/icon-close.svg"
        document.getElementById("nav-mobile").style.display = "block";
        document.getElementById("burger-background").style.display ="block";

        isBurger = false;

    } else {
        burger.src = "./resources/images/icon-hamburger.svg"
        isBurger = true;
        document.getElementById("nav-mobile").style.display = "none";
        document.getElementById("burger-background").style.display ="none";
    }
    
    

}