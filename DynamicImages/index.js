"use strict";

let imageFiles = [
  {name: "images/bugatti.jpeg", description: "Bugatti"},
  {name: "images/ferrari.jpeg", description: "Ferrari"},
  {name: "images/lambo.jpeg", description: "Lamborgini"},
  {name: "images/mclaren.jpeg", description: "McLaren"},
  {name: "images/porsche.jpeg", description: "Porche"}

];


window.onload = function(){

  let addBtn = document.getElementById("addBtn");
  addBtn.onclick = addImage;
  
  
  let clearBtn =  document.getElementById("clearBtn");
  clearBtn.onclick = clear;


  populateImageDescription();
}
  

function populateImageDescription(){
 
  let imageDescription = document.getElementById("imageDescription");  
  let defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.text = "Please Select Car!";

  imageDescription.appendChild(defaultOption);


  for (let index of imageFiles){
    let newOption = document.createElement("option");
   
    newOption.text = index.description;
   
    imageDescription.appendChild(newOption);
  }
 
  
  let addImage = document.querySelectorAll("div.imgId:not(.src)");;
  addImage.forEach(addImage => {
    addImage.setAttribute("src", );


  });
  
}


function addImage(){


  let imageDescription = document.getElementById("imageDescription");  

 for(let img of imageFiles){
  
  if(imageDescription.value == img.description ){
   
    createDiv(img);
   
  }
 }  
}

function createDiv(img){


  let newDiv = document.createElement("div");  
  newDiv.id = "divId";
  newDiv.className = "col-3"
  document.getElementById("myDiv").appendChild(newDiv);


  let newImg = document.createElement("img");  
   newImg.id = "imgId";
   newImg.src = img.name;
  
   newImg.className ="img"


   newDiv.appendChild(newImg);



}


function clear(){
  let imageDescription = document.getElementById("imageDescription");  
  let clearBtn =  document.getElementById("myDiv");
  clearBtn.textContent = ""
  imageDescription.value= ""
}

  











