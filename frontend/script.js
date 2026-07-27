const productContainer = document.getElementById("product-container");
let cartCount = 0;

// Backend Spring Boot API se real products fetch karna
function fetchProducts() {
    fetch("http://localhost:8080/api/products")
        .then(response => response.json())
        .then(products => {
            productContainer.innerHTML = "";
            products.forEach(product => {
                const productCard = document.createElement("div");
                productCard.classList.add("product-card");
                
                // Yahan product.imageUrl, product.name, etc. bilkul sahi match kar rahe hain!
                productCard.innerHTML = `
                    <img src="${product.imageUrl}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <span>₹${product.price}</span>
                    <button onclick="addToCart()">Add to Cart</button>
                `;
                productContainer.appendChild(productCard);
            });
        })
        .catch(error => console.error("Error fetching products:", error));
}

function addToCart() {
    cartCount++;
    document.getElementById("cart-count").innerText = cartCount;
}

// Page load hone par API call karna
fetchProducts();