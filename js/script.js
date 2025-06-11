let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
  cart.push({ name, price });
  alert(`${name} added to cart!`);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();
}

function updateCart() {
  updateCartCount();
  const cartContainer = document.getElementById("cart");

  if (!cartContainer) {
    return;
  }
  
  cartContainer.innerHTML = "";
  
  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }
  
  cart.forEach((item, index) => {
    cartContainer.innerHTML += `
      <div>
        <span>${item.name} - $${item.price}</span>
        <button onclick="removeFromCart(${index})">Remove</button>
      </div>
    `;
  });
}

function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }
  
  alert("Proceeding to Checkout!");
  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();
}

function updateCartCount() {
  const cartCount = document.getElementById("cart-count");
  if (!cartCount) {
    return;
  }
  cartCount.innerText = cart.length;
}