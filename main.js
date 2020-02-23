

var backgroundImage = {
    image: "basketball.jpg"
};

const canvas = document.getElementById("draw"); 
const ctx = canvas.getContext("2d"); 
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.zIndex = "-30"; 
canvas.style.position = "absolute"; 

var boxFour = document.querySelector("#Four"); 

var oneColor = document.querySelector("#One");  

var colorOverlay = document.createElement("div"); 

var backImage  = document.createElement("img");


// function changecolor (){

// colorOverlay.style.width = "100%"; 
// colorOverlay.style.height = "100%"; 
// colorOverlay.style.mixBlendMode = "overlay";
// colorOverlay.style.backgroundColor = "lightBlue"; 
// colorOverlay.style.opacity = "100%"; 
// colorOverlay.style.position = "absolute"; 
// colorOverlay.style.cursor = "pointer"; 

// backImage.style.width = "100%"; 
// backImage.style.height = "100%"; 
// backImage.style.zIndex = "-5"; 
// backImage.style.position = "absolute";
// backImage.style.mixBlendMode = "multiply"; 
// backImage.style.opacity = "50%";

// backImage.src = backgroundImage.image; 



// oneColor.appendChild(backImage); 
// oneColor.appendChild(colorOverlay); 


// };

// function deleteChild(){

// oneColor.removeChild(backImage); 
// oneColor.removeChild(colorOverlay); 

// };


// function hoverAction(){
// boxFour.style.position = "absolute";
// boxFour.style.bottom = "30px"; 

// };


//  function deleteHover(){
  
//   boxFour.removeAttribute(boxFour); 
// }; 



// function canvasLoad(){
//     canvas.style.width = "100%"; 
//     canvas.style.height = "100%"; 
//     canvas.style.zIndex = "-30"; 
//     canvas.style.position = "absolute";   
//     canvas.style.margin = "0";  
//     canvas.style.padding = "0"; 
//     canvas.style.overflow = "hidden"; 
    
// };

function draw(){

}; 



