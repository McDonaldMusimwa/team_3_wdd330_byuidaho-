import CheckoutProcess from './CheckOutProcess.mjs';
import { loadHeaderFooter } from './utils.mjs';

loadHeaderFooter();

const mycheckOut = new CheckoutProcess('so-cart', 'checkout-summary');
mycheckOut();

document
  .querySelector('#zip')
  .addEventListener('blur', mycheckOut.calculateOrdertotal.bind(mycheckOut));
// listening for click on the button
document.querySelector('#checkoutSubmit').addEventListener('click', (e) => {
  e.preventDefault();

  mycheckOut.checkout();
});
