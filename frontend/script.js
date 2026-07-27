document.addEventListener("DOMContentLoaded", () => {
    fetchProducts();
});

function fetchProducts() {
    // Agar aapka backend port 8082 par chal raha hai toh 8082 likhein
    fetch("http://localhost:8082/api/products")
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(products => {
            const productContainer = document.getElementById("product-container");
            productContainer.innerHTML = "";

            if (products.length === 0) {
                productContainer.innerHTML = "<p>No products found in database.</p>";
                return;
            }

            products.forEach(product => {
                const productCard = document.createElement("div");
                productCard.classList.add("product-card");
                
                productCard.innerHTML = `
                    <img src="${product.imageUrl}" alt="${product.name}" style="width:100px; height:100px; object-fit:cover;">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <span>₹${product.price}</span>
                    <br>
                    <button onclick="addToCart()">Add to Cart</button>
                `;
                productContainer.appendChild(productCard);
            });
        })
        .catch(error => {
            console.error("Error fetching products:", error);
            const productContainer = document.getElementById("product-container");
            productContainer.innerHTML = "<p style='color:red;'>Failed to load products from backend server.</p>";
        });
}

function addToCart() {
    let cartCount = document.getElementById("cart-count");
    let currentCount = parseInt(cartCount.innerText);
    cartCount.innerText = currentCount + 1;
}