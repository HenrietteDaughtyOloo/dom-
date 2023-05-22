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

document.getElementById('title').style.color='green'
document.getElementById('title').style.textAlign = 'center'


document.getElementById('heading3').style.textTransform = "uppercase";

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
anImage.style.width='50%';
anImage.style.mar


src.appendChild(anImage);




document.body.style.backgroundImage = 'images/tomato.jpg'
document.body.style.backgroundColor='silver'





