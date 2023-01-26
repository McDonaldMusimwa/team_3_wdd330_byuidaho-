import ProductData from './ProductData.mjs';
import ProductList from './ProductList.mjs';

const productObject1 = new ProductData('tents');
const element = document.querySelector('.product-list');
const listOfProducts = new ProductList('tents', productObject1, element);

listOfProducts.init();