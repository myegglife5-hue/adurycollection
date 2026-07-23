// ===============================
// Adury Collection
// script.js
// ===============================

// Cart Data
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Cart Count
function updateCartCount() {
    const count = document.getElementById("cart-count");
    if (count) {
        count.innerText = cart.length;
    }
}

// Add To Cart
function addToCart(id, name, price, image) {

    const existing = cart.find(item => item.id === id);

    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({
            id: id,
            name: name,
            price: price,
            image: image,
            qty: 1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

    alert("✅ প্রোডাক্ট সফলভাবে কার্টে যোগ হয়েছে!");
}

// Remove Item
function removeCart(id){

    cart = cart.filter(item=>item.id!==id);

    localStorage.setItem("cart",JSON.stringify(cart));

    location.reload();

}

// Increase Qty
function increaseQty(id){

    cart.forEach(item=>{

        if(item.id===id){

            item.qty++;

        }

    });

    localStorage.setItem("cart",JSON.stringify(cart));

    location.reload();

}

// Decrease Qty
function decreaseQty(id){

    cart.forEach(item=>{

        if(item.id===id && item.qty>1){

            item.qty--;

        }

    });

    localStorage.setItem("cart",JSON.stringify(cart));

    location.reload();

}

// Search Product
function searchProduct(){

    let input=document.getElementById("search").value.toLowerCase();

    let cards=document.querySelectorAll(".product-card");

    cards.forEach(card=>{

        let title=card.querySelector("h3").innerText.toLowerCase();

        if(title.includes(input)){

            card.style.display="block";

        }else{

            card.style.display="none";

        }

    });

}

// Wishlist
let wishlist=JSON.parse(localStorage.getItem("wishlist"))||[];

function addWishlist(id,name,price,image){

    wishlist.push({

        id:id,

        name:name,

        price:price,

        image:image

    });

    localStorage.setItem("wishlist",JSON.stringify(wishlist));

    alert("❤️ Wishlist-এ যোগ হয়েছে");

}

// Show Cart
function showCart(){

    let container=document.getElementById("cart-items");

    if(!container) return;

    let html="";

    let total=0;

    cart.forEach(item=>{

        total+=item.price*item.qty;

        html+=`

<div class="cart-card">

<img src="${item.image}" width="90">

<h3>${item.name}</h3>

<p>৳ ${item.price}</p>

<div>

<button onclick="decreaseQty(${item.id})">-</button>

<b>${item.qty}</b>

<button onclick="increaseQty(${item.id})">+</button>

</div>

<button onclick="removeCart(${item.id})">

❌ Remove

</button>

</div>

`;

    });

    container.innerHTML=html;

    const totalBox=document.getElementById("total");

    if(totalBox){

        totalBox.innerHTML="মোট মূল্য : ৳ "+total;

    }

}

// Page Load
window.onload=function(){

updateCartCount();

showCart();

}
