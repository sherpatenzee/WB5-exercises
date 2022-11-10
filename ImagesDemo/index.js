
window.onload = function () {

  let imagaParagraph = document.getElementsByTagName("p")
  let length = imagaParagraph.length
  for (let i = 0; i < length; i++) {
    imagaParagraph[i].style.border = "thin solid black";
  }


  const addImageAlt = document.querySelectorAll("img:not(.alt)");;
  addImageAlt.forEach(addImageAlt => {
    addImageAlt.setAttribute("alt", "beautiful images");
    addImageAlt.className = "roundedImg";

  });


}