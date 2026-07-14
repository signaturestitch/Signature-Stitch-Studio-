const design = localStorage.getItem("customerDesign");
const font = localStorage.getItem("selectedFont");

document.getElementById("designText").textContent = design;
document.getElementById("fontName").textContent = font;
