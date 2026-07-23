// Adury Collection - Shopping Cart

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Add to Cart
function addToCart(name, price, image) {
    const product = {
        name: name,
        price: price,
        image: image,
        qty: 1
    };

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("✅ " + name + " সফলভাবে কার্টে যোগ হয়েছে!");

    updateCartCount();
}

// Cart Count
function updateCartCount() {
    const count = document.getElementById("cart-count");

    if (count) {
        count.innerText = cart.length;
    }
}

// Search
function searchProduct() {

    let input = document.getElementById("search").value.toLowerCase();

    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        let title = card.querySelector("h3").innerText.toLowerCase();

        if (title.includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

}

// Clear Cart
function clearCart() {

    if(confirm("কার্ট খালি করতে চান?")){

        localStorage.removeItem("cart");

        cart=[];

        updateCartCount();

        alert("🗑️ Cart Empty");

    }

}

// Page Load
window.onload=function(){

updateCartCount();

}
