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

//adding read more at the more products

//adding readMore for tea;
var teaDiv=document.getElementById('tea');
var readMoreTea=document.getElementById('tea-button');
readMoreTea.addEventListener('click',()=>{readMore(teaDiv,readMoreTea);});
//adding readMore for coffee;
var latteDiv=document.getElementById('latte');
var readMoreLatte=document.getElementById("latte-button");
readMoreLatte.addEventListener('click',()=>{readMore(latteDiv,readMoreLatte);});

//function that will do the necessary when the buttons are clicked.
function readMore(parDiv,button){
    if(parDiv.childElementCount===4){  //if the only one paragraph is there
        var newPar=document.createElement('p');
        //checking if it was coffee or tea
        if (parDiv==teaDiv) {
            newPar.textContent = "We work with only the finest ingredients, many of which are Fair Trade and / or Certified Organic, and we never use artificial flavors or preservatives. Over the years, we have formulated custom blends with a master blender to supply our customers to surprise and delight our customers with unique, flavorful blends, and we have expanded our collection to include more pure teas for the tea connoisseurs looking for something special. We are always on the lookout for the next great tea to add to our offerings, so check back often for additions!";
        }else {
            newPar.textContent="Coffee and milk have been part of European cuisine since the 17th century. Caffè latte, Milchkaffee, café au lait and café con leche are domestic terms of traditional ways of drinking coffee, usually as part of breakfast in the home. Public cafés in Europe and the US it seems have no mention of the terms until the 20th century, although Kapuziner is mentioned in Austrian coffee houses in Vienna and Trieste in the 2nd half of 1700s as \"coffee with cream, spices and sugar\" (being the origin of the Italian cappuccino).";
        }
        parDiv.removeChild(parDiv.lastChild);
        parDiv.appendChild(newPar);
        parDiv.appendChild(button);
        button.textContent="Read less";
    }
    else{
        parDiv.removeChild(parDiv.lastChild);
        parDiv.removeChild(parDiv.lastChild);
        parDiv.appendChild(button);
        button.textContent="Read More";
    }

}


//improving come and try our new products
var handMade=document.getElementById('hand-made-button');
var thingsRwanda=document.getElementById('things-rwanda-button');
var madeRwanda=document.getElementById('made-rwanda-button');
//removing the readmore buttons
//handMade.style.display="none";
//thingsRwanda.style.display='none';
//madeRwanda.style.display="none"
//getting the images

var handMadeimg=document.getElementById('hand-made-img');
var thingsRwandaimg=document.getElementById('things-rwanda-img');
var madeRwandaimg=document.getElementById('made-rwanda-img');

var mysheet = document.styleSheets[0];
mysheet.insertRule();
