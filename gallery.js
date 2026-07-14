const design = localStorage.getItem("customerDesign");
const category = localStorage.getItem("category");

document.getElementById("galleryTitle").innerHTML =
category + " Fonts";

fetch("data/fonts.json")

.then(response=>response.json())

.then(fonts=>{

const container =
document.getElementById("fontContainer");

fonts

.filter(font=>font.category===category.replace(/[^a-zA-Z ]/g,"").trim())

.forEach(font=>{

const card =
document.createElement("div");

card.className="font-card";

card.innerHTML=`

<img
src="${font.image}"
class="fontPreview">

<h3>${font.name}</h3>

<button>Select</button>

`;

card.querySelector("button")
.onclick=()=>{

localStorage.setItem(
"selectedFont",
font.name
);

window.location.href=
"selected.html";

};

container.appendChild(card);

});

});
