
let imageDiv = document.getElementsByClassName("imageGroup");
let length = imageDiv.length
for (let i = 0; i < length; i++) {
imageDiv[i].style.border = "5px solid red"; 
}


const addImageAlt = document.querySelectorAll("div.imageGroup:not(.alt)");
addImageAlt.forEach(addImageAlt => {
  addImageAlt.setAttribute("alt" , "graffiti image")
});


