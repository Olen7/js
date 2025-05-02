import Cart from "./Cart.js"
import items from "./items.js";
const newCart = new Cart(items)
console.log(newCart.totalPrice);
console.log(newCart.totalCount);