
var hoverColor = document.querySelector("#title"); 
var hoverColor2 = document.querySelector("#summary");

var next = document.querySelector("#next"); 
var previous = document.querySelector("#previous"); 
var home = document.querySelector("#home1"); 

var nextID = document.querySelector("#nextID");
var previousID = document.querySelector("#previousID"); 
var homeID = document.querySelector("#homeID");

function colorChange(){
   hoverColor.style.color = "#EBC829";
    hoverColor.style.transition = "color ease-in-out 1s";   

    hoverColor2.style.color = "#EBC829";
    hoverColor2.style.transition = "color ease-in-out 1s";   

};



function colorRemove(){

    hoverColor.style.color = "white"; 
    hoverColor.style.transition = "color ease-in-out 1s";

    hoverColor2.style.color = "white"; 
    hoverColor2.style.transition = "color ease-in-out 1s";

};


function nextColor(){

    next.style.color = "#EBC829";
    next.style.transition = "color ease-in-out 1s";   

    nextID.style.borderColor = "#EBC829";
    nextID.style.transition = "border-color 1s ease-in-out"; 

    nextID.style.top = "29rem";
    nextID.style.transition = "top ease-in-out 1s"; 
}; 

function nextRemove(){

    next.style.color = "white"; 
    next.style.transition = "color ease-in-out 1s";

    nextID.style.borderColor = "white";
    nextID.style.transition = "border-color 1s ease-in-out"; 

    nextID.style.top = "30rem";
    nextID.style.transition = "top ease-in-out 1s";
};
    

function previousColor(){

    previous.style.color = "#EBC829";
    previous.style.transition = "color ease-in-out 1s";  

    previousID.style.borderColor = "#EBC829";
    previousID.style.transition = "border-color 1s ease-in-out"; 

    previousID.style.top = "29rem";
    previousID.style.transition = "top ease-in-out 1s"; 
}; 

function previousRemove(){

    previous.style.color = "white"; 
    previous.style.transition = "color ease-in-out 1s";

    previousID.style.borderColor = "white";
    previousID.style.transition = "border-color ease-in-out 1s";

    previousID.style.top = "30rem";
    previousID.style.transition = "top ease-in-out 1s"; 
}; 


function homeColor(){

    home.style.color = "#EBC829";
    home.style.transition = "color ease-in-out 1s";

    homeID.style.borderColor = "#EBC829";
    homeID.style.transition = "border-color 1s ease-in-out"; 

    homeID.style.top = "29rem";
    homeID.style.transition = "top ease-in-out 1s";
}; 


function homeRemove(){

    home.style.color = "white"; 
    home.style.transition = "color ease-in-out 1s";

    homeID.style.borderColor = "white";
    homeID.style.transition = "border-color ease-in-out 1s";

    homeID.style.top = "30rem";
    homeID.style.transition = "top ease-in-out 1s"; 

};