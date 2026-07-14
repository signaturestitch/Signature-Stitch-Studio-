// Save the customer's design and move to Categories

function goToCategories() {

    const design = document.getElementById("designInput").value.trim();

    if (design === "") {
        alert("Please type your embroidery design.");
        return;
    }

    localStorage.setItem("customerDesign", design);

    window.location.href = "categories.html";

}


// Category Buttons

const buttons = document.querySelectorAll(".category-btn");

buttons.forEach(button => {

    button.addEventListener("click", function () {

        const category = this.innerText;

        localStorage.setItem("category", category);

        window.location.href = "gallery.html";

    });

});
