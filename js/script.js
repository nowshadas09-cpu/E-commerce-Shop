/* --- CART LOGIC --- */
let cart = 0;
const cartCount = document.getElementById("cart-count");
const container = document.getElementById("product-container");

// Render Products (products ভেরিয়েবলটি products.js থেকে আসবে)
if (typeof products !== 'undefined') {
    products.forEach(p => {
        container.innerHTML += `
            <div class="product-card">
                <div class="product-img">${p.icon}</div>
                <div class="product-info">
                    <h4>${p.name}</h4>
                    <p class="product-price">$${p.price}</p>
                    <button class="btn-primary" onclick="addToCart()">Add to Cart</button>
                </div>
            </div>`;
    });
} else {
    console.error("Products file not loaded!");
}

function addToCart() {
    cart++;
    cartCount.innerText = cart;
}

/* --- SLIDER LOGIC --- */
let index = 0;
const slides = document.getElementById("slides");
// Check if slider exists to avoid errors
if (slides) {
    const total = slides.children.length;
    setInterval(() => {
        index = (index + 1) % total;
        slides.style.transform = `translateX(-${index * 100}%)`;
    }, 3000);
}