let totalPrice = 0;
let itemCount = 0;

function addToCart(price) {
    totalPrice += price;
    itemCount++;
    document.getElementById('cart-count').textContent = itemCount;
    document.getElementById('cart-total').textContent = totalPrice;
}

