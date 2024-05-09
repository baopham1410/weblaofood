// -----------Menu-item ----------------------------------
const toP = document.querySelector(".logo")
window.addEventListener("scroll", function(){
const X = this.pageYOffset;
if(X>1){toP.classList.add("active")}
else {
toP.classList.remove("active")
}
})


//-----------Menu-SLIDEBAR-CARTEGORY-------------------------------
const itemsliderbar = document.querySelectorAll(".cartegory-left-li")
itemsliderbar.forEach(function(Menu, index){
Menu.addEventListener("click", function(){
Menu. classList.toggle("block")
})
})



const header = document.querySelector("header")
window.addEventListener("scroll", function(){
x = window.pageYOffset
if(x>0){
header.classList.add("sticky")
}
else {
header.classList.remove("sticky")
}
})



 const imgPosition = document.querySelectorAll(".aspect-ratio-169 img")
const imgContainer = document.querySelector( '.aspect-ratio-169')
const dotItem = document.querySelectorAll(".dot")
let imgNuber = imgPosition.length
let index = 0
//console.log(imgPosition)
imgPosition.forEach(function(image, index){
image.style.left = index*100 + "%"

dotItem[index].addEventListener("click", function(){
slider (index)
})

})
function imgSlide (){
index++;


console.log(index)
if (index>=imgNuber) {index=0}
slider (index)

}

function slider (index) {
imgContainer.style.left = "-" +index*100+ "%"
const dotActive = document.querySelector('.active')
dotActive.classList.remove("active")
dotItem[index].classList.add("active")

}
setInterval (imgSlide,5000)
// Automatic Slideshow - change image every 4 seconds
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 4000);    
}

// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}

// When the user clicks anywhere outside of the modal, close it
var modal = document.getElementById('ticketModal');
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


