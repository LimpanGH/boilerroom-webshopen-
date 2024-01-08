/* Info

Använd:
map: för att rendera ut produkterna från början och i kundvagnen.
filter: för att filtrera kategorierna.
reduce: för att slå ihop totalpriset.

// const products = [
//     { id: 1, name: 'T-shirt', category: 'kläder', price: 100 },
//     { id: 2, name: 'Hörlurar', category: 'elektronik', price: 250 },
//     { id: 3, name: 'Keps', category: 'kläder', price: 50 },
//     { id: 4, name: 'Mobiltelefon', category: 'elektronik', price: 500 }
// ];

// const cart = [];
*/

const productContainer = document.querySelector('#product-container'); //Variable that holds our products

// Fetch data ----------------------------------
fetch('https://fakestoreapi.com/products')
  // .then((response) => console.log(response)) //logs the response-object
  .then((response) => response.json()) // Parsing the response-object to json
  //console.log(response);
  .then((data) => {
    // Logging the json-ified object
    console.log(data);
    displayProducts(data);
    calculateTotalBill(data);
  })
  .catch((error) => console.log(error));

// Display data ---------------------------------- Anders
function displayProducts(products) {
  const html = products
    .map(
      (product) => `
  <div class="product-item" data-price="${product.price}">
  <img class="product-image" src="${product.image}" alt="${product.title}">
  <h3>${product.title}</h3>
  <p>${product.description}</p>
  <h4>${product.price}</h4>
  <span class="quantity-buttons" id="${product.id}">
      <button class="sub-button">-</button>
      <span class="quantity">0</span>
      <button class="add-button">+</button>
  </span>
  </div>`
    ).join('');

  productContainer.innerHTML = html;
}

//   Filtrering ----------------------------------
// startkod för filtrering
const numbers = [1, -1, 2, 3];
const filtered = numbers.filter((n) => {
  return n >= 0;
});
console.log(filtered);

// Add/ remove to shoppingcart ----------------------------------
// Display total pruduct count in minicart
// Display individual product count
//const productItems = document.querySelectorAll('.product-item');
const productItems = document.querySelectorAll('.quantity-items');





// Local storage ----------------------------------
//Startkod för local storage
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const nameValue = playerName.value;
  window.localStorage.setItem('fullName', nameValue);
  window.location.href = 'shoppingcart.html';
});
// console.log(playerName.value);



// Display total bill ----------------------------------------------
// Just nu visar den totalen av alla produkter, vi kan sedan ändra så att den istället tar in det som finns i shoppingcarten / Linus
function calculateTotalBill(items) {
  const totalBill = items.reduce((total, item) => {
    return total + item.price;
  }, 0)
  console.log(`the total price with reduce is: ${totalBill}`)
};