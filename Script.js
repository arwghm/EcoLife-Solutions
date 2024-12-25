// File: script.js

// Example of a simple JavaScript functionality for the Products page

// This function will show an alert when a user clicks on a product image
function showProductAlert(productName) {
    alert("You clicked on: " + productName);
}

// Attach event listeners to the product images
document.addEventListener("DOMContentLoaded", function() {
    const productImages = document.querySelectorAll(".product-item img");

    // Loop through each product image and attach the click event
    productImages.forEach(function(image) {
        image.addEventListener("click", function() {
            const productName = this.alt; // Get the alt text (product name)
            showProductAlert(productName);
        });
    });
});
