import { getLocalStorage } from './utils.mjs';

function renderCartContents() {
  const cartItems = getLocalStorage('so-cart');
  const cartItemsList = [];
  cartItemsList.push(cartItems);
  const htmlItems = cartItems.map((item) => cartItemTemplate(item));

  //Damian cart.html error with empty cart
  document.querySelector('.product-list').innerHTML = htmlItems.join('');

  let productContainer = document.querySelector('.products');
  let cartCost = localStorage.getItem('totalCost');

  let containerPoduct = document.querySelector('.container-products');
  containerPoduct.style.display ='none';
  let emptyPoduct = document.querySelector('.emtyproducts');
  emptyPoduct.style.display ='none';

  if( cartItems.length === 0 && productContainer ) {
      containerPoduct.style.display ='';

      productContainer.innerHTML = '';
      Object.values(cartItems).map( (item, index) => {
          productContainer.innerHTML += 
          `<div class="product"><ion-icon name="close-circle"></ion-icon><img src="assets/images/${item.title}.jpg" width=200px height=150px/>
              <span class="sm-hide">${item.title}</span>
          </div>
          <div class="price sm-hide">₹${item.price}.00</div>
          <div class="quantity">
              <ion-icon class="decrease " name="arrow-dropleft-circle"></ion-icon>
                  <span>${item.inCart}</span>
              <ion-icon class="increase" name="arrow-dropright-circle"></ion-icon>   
          </div>
          <div class="total">₹${item.inCart * item.price}.00</div>`;
      }); 
  
      productContainer.innerHTML += `
          <div class="basketTotalContainer">
              <h4 class="basketTotalTitle">
                  Basket Total
              </h4>
              <h4 class="basketTotal">
              ₹${cartCost}.00
              </h4>
      `;
  
  }
    else
      {
        emptyPoduct.innerHTML = '<div lass="empty-cart">    <h1>Cart Empty </h1>    <p>You Haven t Ordered a pizza yet.  To order a pizza go to the main page. </p>  <img src="assets/images/empty-cart.png" alt=""> </div>';
emptyPoduct.style.display ='';
      }
//Damian cart.html error with empty cart End
  
}

function cartItemTemplate(item) {
  const newItem = `<li class='cart-card divider'>
  <a href="#" class="cart-card__image">
    <img
      src='${item.Image}'
      alt='${item.Name}'
    />
  </a>
  <a href='#'>
    <h2 class='card__name'>${item.Name}</h2>
  </a>
  <p class='cart-card__color'>${item.Colors[0].ColorName}</p>
  <p class='cart-card__quantity'>qty: 1</p>
  <p class='cart-card__price'>$${item.FinalPrice}</p>
</li>`;

  return newItem;
}

renderCartContents();
