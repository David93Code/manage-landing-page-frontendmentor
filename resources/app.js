function formSubmit(e) {
    e.preventDefault() 
    let email = document.getElementById("email").value
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        console.log("true")
    }
}