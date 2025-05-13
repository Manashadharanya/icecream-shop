let cart = [];

function addToCart(name, price) {
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    renderCart();
}

function renderCart() {
    const cartList = document.getElementById('cart-list');
    const totalPrice = document.getElementById('total-price');
    cartList.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`;
        cartList.appendChild(listItem);
        total += item.price * item.quantity;
    });

    totalPrice.textContent = total.toFixed(2);
}

function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
    } else {
        alert('Thank you for your order! Total: $' + document.getElementById('total-price').textContent);
        cart = [];
        renderCart();
    }
}
