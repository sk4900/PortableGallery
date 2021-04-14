var imgArray= new Array();
imgArray[0] = new Image();
imgArray[0].src = "the-starry-night-photo-u4.jpg";

imgArray[1] = new Image();
imgArray[1].src = 'africa.jpg';
<!--
imgArray[2] = new Image();
imgArray[2].src = 'africa.jpg';

imgArray[3] = new Image();
imgArray[3].src = 'images/img/Splash_image4.jpg';

imgArray[4] = new Image();
imgArray[4].src = 'images/img/Splash_image5.jpg';

imgArray[5] = new Image();
imgArray[5].src = 'images/img/Splash_image6.jpg';
-->

function nextImage()
{
    var img= document.getElementById("Main")

    for(var i = 0; i < imgArray.length;i++)
    {
        if(imgArray[i].src === img.src) // << check this
        {
            if(i === imgArray.length){
                document.getElementById(element).src = imgArray[0].src;
                break;
            }
            document.getElementById(element).src = imgArray[i+1].src;
            break;
        }
    }
}

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
}