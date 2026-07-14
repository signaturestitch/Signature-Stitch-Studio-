const design = localStorage.getItem("customerDesign");
const category = localStorage.getItem("category");

document.getElementById("galleryTitle").innerHTML =
`${category} Fonts`;

const sampleFonts = [

{
name:"Abigail",
category:" Cursive"
},

{
name:"Afterglow",
category:" Cursive"
},

{
name:"Alexandra",
category:" Cursive"
},

{
name:"Algerian",
category:" Block"
},

{
name:"Arial Black",
category:" Block"
},

{
name:"Athletic",
category:" Sports"
},

{
name:"Baby Script",
category:" Kids"
},

{
name:"Cowboy",
category:" Western"
},

{
name:"Diamond Monogram",
category:" Monogram"
},

{
name:"Christmas Joy",
category:" Holiday"
}

];

const container =
document.getElementById("fontContainer");

sampleFonts
.filter(font=>font.category===category)
.forEach(font=>{

const card=document.createElement("div");

card.className="font-card";

card.innerHTML=`

<div class="preview">

${design}

</div>

<div class="font-name">

${font.name}

</div>

<button class="selectBtn">

Select

</button>

`;

card.querySelector("button")
.addEventListener("click",()=>{

localStorage.setItem(
"selectedFont",
font.name
);

window.location.href="selected.html";

});

container.appendChild(card);

});
