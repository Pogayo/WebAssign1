const welcomediv=document.getElementById('welcome');

//slideshowing the top images

var topimg=document.querySelector('#topimg');

var imgIndex = 0;
runSlideShow();  //function that will run the slideshow

function runSlideShow() {
    var i;
    var x = topimg.getElementsByClassName("top-imges");
    for (i = 0; i < x.length; i++) {   //all images display property is set to none
        x[i].style.display = "none";
    }
    imgIndex++;
    if (  imgIndex > x.length) {  imgIndex = 1}
    x[  imgIndex-1].style.display = "block";
    setTimeout(runSlideShow, 2500); // image is changed every 2.5 seceonds
}

//form validation



function validateForm() {
    var x = document.forms["myForm"]["user-name"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}
var myform=document.forms["myForm"];
myform.addEventListener('submit',validateForm());