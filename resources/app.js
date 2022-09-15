const slider = document.querySelector(".said-section");
let isDown = false;
let startX;
let scrollLeft;
const click = document.getElementById("click")

slider.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX;
    scrollLeft = slider.scrollLeft;
    click.style.cursor = "grab";
})

 slider.addEventListener("mouseleave", () => {
     isDown = false;
     click.style.cursor = "pointer";
 })

slider.addEventListener("mouseup", () => {
    isDown = false;
    click.style.cursor = "pointer";
})

slider.addEventListener("mousemove", (e) => {
    if(!isDown) {
        return;
    }
    e.preventDefault();
    const x = e.pageX;
    const walk = (x - startX)*1.5;
    slider.scrollLeft = scrollLeft - walk;
})




document.getElementById("email").addEventListener("input", removeError);

function removeError(e) {
    document.getElementById("email-error").style.display = "none"
    document.getElementById("email").classList.remove("email-error-input")
}

function formSubmit(e) {
    e.preventDefault() 
    const emailError = document.getElementById("email-error");
    let email = document.getElementById("email").value
    
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))){
        emailError.style.display = "block"
        document.getElementById("email").classList.add("email-error-input")
        emailError.style.color = "red"
        emailError.innerHTML = "Please insert a valid email"
        
    } else {
        emailError.style.display = "block"
        emailError.style.color = "green"
        emailError.innerHTML = "Submitted successfully"
    }
}