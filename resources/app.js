const slider = document.querySelector(".said-section");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
})

slider.addEventListener("mouseleave", () => {
    isDown = false;
})

slider.addEventListener("mouseup", () => {
    isDown = false;
})

slider.addEventListener("mousemove", (e) => {
    if(!isDown) {
        return;
    }
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x- startX)*1.5;
    slider.scrollLeft = scrollLeft - walk;
})








function formSubmit(e) {
    e.preventDefault() 
    let email = document.getElementById("email").value
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        console.log("true")
    }
}