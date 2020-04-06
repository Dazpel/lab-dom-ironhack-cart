// ITERATION 1

function updateSubtotal(product, price, quantity) {
  const subTotal = Number(price) * quantity;

  var sub = product.querySelector('.subtotal');
  sub.innerText = `$${subTotal}`;

  return subTotal;
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const products = document.querySelectorAll('.product');

  // end of test
  let finalPrice = 0;
  // ITERATION 2
  for (let i = 0; i < products.length; i++) {
    var p = products[i].querySelector('.price>span').innerText;
    var q = products[i].querySelector('.quantity input').value;
    finalPrice += updateSubtotal(products[i], p, q);
  }

  document.querySelector('#total-value').innerText = `Total: $${finalPrice}`;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentNode.parentNode;
  target.remove();
  calculateAll();
  //... your code goes here
}



// ITERATION 5

function createProduct() {
  //... your code goes here
  console.log('creating...');

  const parent = document.querySelector('#cart>tbody');

  let productName = document.querySelector(
    '.create-product > td:nth-child(1) > input'
  ).value;
  let productPrice = document.querySelector(
    '.create-product > td:nth-child(2) > input'
  ).value;

  const newProduct = `<tr class="product">
  <td class="name">
    <span>${productName}</span>
  </td>
  <td class="price">$<span>${productPrice}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
</tr>`;

  parent.insertAdjacentHTML('beforeend', newProduct)
  removeListener();
  subListener();

  console.log('New product added!');
  document.querySelector(
    '.create-product > td:nth-child(1) > input'
  ).value = '';
  document.querySelector(
    '.create-product > td:nth-child(2) > input'
  ).value = '';

}

const removeListener = () => {
  const removeBtn = document.querySelectorAll('.btn.btn-remove');
  removeBtn.forEach((x) => {
    x.addEventListener('click', removeProduct);
  });
}

const subListener = () => {

  const s = document.querySelectorAll('.quantity input');
  s.forEach((x) => {
    x.addEventListener('click', calculateAll);
  });

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  // var updateSub = document.querySelector('.quantity input');
  // updateSub.addEventListener('click', updateSubtotal());
  //... your code goes here
  /////////////////////////////////////////////////////////
  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);


  
subListener();
removeListener();

});
