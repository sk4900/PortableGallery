 function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function openRegistration() {
    document.getElementById("RegistrationForm").style.display = "block";

}
function closeRegistration() {
    document.getElementById("RegistrationForm").style.display = "none";
}
function confirmRegistration() {
    document.getElementById("register").style.display = "none";
}

    function closeForm() {
    document.getElementById("myForm").style.display = "none";
}
function goHome() {
    document.getElementById("myForm").style.display = "none";
    document.getElementById("login").style.display = "none";
    document.getElementById("register").style.display = "none";
    document.getElementById("search").style.display = "block";
    document.getElementById("home").style.visibility= "visible";
    document.getElementById("Go").style.display= "block";
}