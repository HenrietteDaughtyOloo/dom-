/*
Change document background color to
silver......................................

Change the font color for h1 title tag to
green........................................

Change the font case for h3 title tags to
uppercase....................................

Add one more fruit to the fruits list
............................................

Add one more vegetable to the vegetables
list .......................................
*/
document.body.style.backgroundColor='silver'
document.body.style.fontSize='20px'
document.body.style.marginLeft='2%'

document.getElementById('title').style.color='green'
document.getElementById('title').style.textAlign = 'center'
document.getElementById('title2').style.textAlign = 'center'
document.getElementById('title').style.fontSize='30px'




document.getElementById('heading3').style.textTransform = "uppercase";
document.getElementById('heading3-2').style.textTransform = "uppercase";


let addedFruit = document.createElement('li')
addedFruit.innerHTML = 'Apple'
document.getElementById('fruList').appendChild(addedFruit)


let addedVeg = document.createElement('li')
addedVeg.innerHTML = 'Cabbages'
document.getElementById('vegList').appendChild(addedVeg)


// document.h3.style.textTransform = uppercase; 

var anImage = document.createElement("img");

anImage.src = "images/tomato.jpg";

var src = document.getElementById("img1");
anImage.style.width='20%';
anImage.style.height='60%';
anImage.style.marginLeft='50%';
anImage.style.marginTop = '-25%';


src.appendChild(anImage);




document.body.style.backgroundImage = 'images/tomato.jpg'
document.body.style.backgroundColor='silver'





