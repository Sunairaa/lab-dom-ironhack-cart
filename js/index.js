// ITERATION 1

function updateSubtotal(product) {
  let updateValue = 0;
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  updateSubTotalValue = Number(price) * Number(quantity);
  let subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = `${Number(updateSubTotalValue)}`;
  console.log(subtotal, subtotal.innerText)
  return subtotal.innerHTML;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  
  // end of test

  // ITERATION 2
  const subtotalArray = [];
  const products = document.querySelectorAll('.product');
  for(let i = 0; i < products.length; i++) {
    subtotalArray.push(updateSubtotal(products[i]));
  }
  console.log(subtotalArray)
  // ITERATION 3
  let total = document.querySelector('#total-value span');
  let calculateTotal = 0;
  for(let i = 0; i < subtotalArray.length; i++) {
    calculateTotal += Number(subtotalArray[i]);
  }
  total.innerHTML = calculateTotal;

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  // get tbody then remove product row from tbody
  let parent = document.querySelector('#cart tbody')
  parent.removeChild(target.parentNode.parentNode);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  let tablebody = document.querySelector('#cart tbody');
  const productRow = document.createElement('tr');
  productRow.setAttribute('class','product');
  const productName = document.querySelector('.create-product td input[type = text]').value;
  const price = document.querySelector('.create-product td input[type = number]').value;
  productRow.innerHTML += `<td class="name">
        <span>${productName}</span>
        </td>
        <td class="price">$<span>${Number(price).toFixed(2)}</span></td>
        <td class="quantity">
          <input type="number" value="0" min="0" placeholder="Quantity" />
        </td>
        <td class="subtotal">$<span>0</span></td>
        <td class="action">
          <button class="btn btn-remove" onClick = ${removeProduct(e)}>Remove</button>
        </td>
      </tr>
    `;
  tablebody.appendChild(productRow);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeProductBtn = document.querySelectorAll('.btn-remove');
  for(let i = 0; i < removeProductBtn.length; i++) {
    removeProductBtn[i].addEventListener('click', removeProduct);
  }
  const createProductBtn = document.querySelector('#create');
  createProductBtn.addEventListener('click', createProduct);
});
