import { getLocalStorage } from "./utils.mjs";

function templateForCartItem(item) {
  const newItem = `<li class="cart-card divider">
    <a href="#" class="cart-card__image">
      <img
        src="${item.Image}"
        alt="${item.Name}"
      />
    </a>
    <a href="#">
      <h2 class="card__name">${item.Name}</h2>
    </a>
    <p class="cart-card__color">${item.Colors[0].ColorName}</p>
    <p class="cart-card__quantity">qty: 1</p>
    <p class="cart-card__price">$${item.FinalPrice}</p>
  </li>`;
  return newItem;
}

export default class ShoppingCart{
    constructor(key,parentSelector){
        this.key=key;
        this.parentSelector=parentSelector;
    }
    renderCartContents(){
        const cartItems= getLocalStorage(this.key);
        const htmlitems = cartItems.map((item)=> templateForCartItem(item));
        document.querySelector(this.parentSelector).innerHTML=htmlitems.join("");
    }
}