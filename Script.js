let cart = [];

function addToCart(itemName, price) {
    cart.push({ itemName, price });
    updateCart();
}

function updateCart() {
    const cartElement = document.getElementById('Cart');

    cartElement.innerHTML = '';

    let totalItems = 0; // Initialize totalItems
    let total = 0;

    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.innerHTML = `<p>${item.itemName} - RS${item.price.toFixed(2)}</p>`;
        cartElement.appendChild(itemElement);
        totalItems++; // Increment totalItems for each item
        total += item.price;
    });

    // Update the totalItems and totalPrice in the HTML
    document.getElementById('totalItems').textContent = totalItems;
    document.getElementById('totalPrice').textContent = total.toFixed(2);

    // Display the total items and total price in the cart
    cartElement.innerHTML += `<p>Total: RS${total.toFixed(2)}</p>`;
}


function placeOrder() {
    
    alert('Order placed successfully!');
    cart = []; // Clear the cart after placing the order
    updateCart();
}


