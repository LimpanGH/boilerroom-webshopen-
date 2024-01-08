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
let cart = [];
let totalBill = 0;


// Function to update local storage with the cart variable
function updateLocalStorage() {
  const dataToStore = {
    cart: cart,
    totalBill: totalBill
  };

  const dataJSON = JSON.stringify(dataToStore);
  localStorage.setItem('cartData', dataJSON);
}

// Fetch data ----------------------------------
fetch('https://fakestoreapi.com/products')
  // .then((response) => console.log(response)) //logs the response-object
  .then((response) => response.json()) // Parsing the response-object to json
  //console.log(response);
  .then((data) => {
    // Logging the json-ified object
    console.log(data);
    displayProducts(data);
    //calculateTotalBill(data);

       // Apply filters based on category, connect them to the buttons in the nav-bar /Linus
    // filterProductsByCategory(data, 'men\'s clothing');
    // filterProductsByCategory(data, 'women\'s clothing');
    // filterProductsByCategory(data, 'electronics');
    filterProductsByCategory(data, 'jewelery');

  })
  .catch((error) => console.log(error));

// Display data ---------------------------------- Anders
function displayProducts(products) {
  const html = products
    .map(
      (product) => `
  <div class="product-item" data-id="${product.id}" data-price="${product.price}">
  <img class="product-image" src="${product.image}" alt="${product.title}">
  <h3>${product.title}</h3>
  <p>${product.description}</p>
  <h4>Price: $${product.price}</h4>
  <span class="quantity-buttons" >
      <button class="sub-button">-</button>
      <span class="quantity" data-product-id="${product.id}" >0</span>
      <button class="add-button">+</button>
  </span>
  </div>`
    ).join('');

  productContainer.innerHTML = html;


 // Lägg till event listeners för +/- knappar
 document.querySelectorAll('.quantity-buttons').forEach((buttonsContainer) => {
  const productId = buttonsContainer.querySelector('.quantity').dataset.productId;

  buttonsContainer.querySelector('.add-button').addEventListener('click', () => {
    updateCart(productId, 1);
    updateQuantity(productId, 1);
    calculateTotalBill();
  });

  buttonsContainer.querySelector('.sub-button').addEventListener('click', () => {
    updateCart(productId, -1);
    updateQuantity(productId, -1);
    calculateTotalBill();
  });
});
}

// Uppdatera varukorgen
function updateCart(productId, quantityChange) {
const existingProduct = cart.find((item) => item.productId === productId);

if (existingProduct) {
  existingProduct.quantity += quantityChange;
  if (existingProduct.quantity <= 0) {
    cart = cart.filter((item) => item.productId !== productId);
  }
} else if (quantityChange > 0) {
  cart.push({ productId, quantity: 1 });
}
}

// Uppdatera kvantiteten för en specifik produkt
function updateQuantity(productId, quantityChange) {
const quantityElement = document.querySelector(`.quantity[data-product-id="${productId}"]`);
const currentQuantity = parseInt(quantityElement.textContent, 10);
quantityElement.textContent = Math.max(0, currentQuantity + quantityChange);
}

//   Filtrering ---------------------------------- / Linus
function filterProductsByCategory(items, category) {
  const filteredItems = items.filter((item) => {
    return item.category.toLowerCase() === category.toLowerCase();
  });
  
  const html = filteredItems
  .map(
    (product) => `
    <div class="product-item" data-id="${product.id}" data-price="${product.price}">
    <img class="product-image" src="${product.image}" alt="${product.title}">
    <h3>${product.title}</h3>
    <p>${product.description}</p>
    <h4>Price: $${product.price}</h4>
    <span class="quantity-buttons">
    <button class="sub-button">-</button>
    <span class="quantity" data-product-id="${product.id}">0</span>
    <button class="add-button">+</button>
    </span>
    </div>`
    )
    .join('');
    
    productContainer.innerHTML = html;
    
    console.log(`Filtered Items (${category}):`, filteredItems);
    console.log(`HTML:`, html);
  }
  
/* 
// Add/ remove to shoppingcart ----------------------------------
// Display total pruduct count in minicart
// Display individual product count
//const productItems = document.querySelectorAll('.product-item');

document.addEventListener('DOMContentLoaded', () => {
  const productItems = document.querySelectorAll('.quantity-buttons');
  console.log(productItems);
  // Further code or actions with productItems go here
});


// Local storage ----------------------------------
//Startkod för local storage
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const nameValue = playerName.value;
  window.localStorage.setItem('fullName', nameValue);
  window.location.href = 'shoppingcart.html';
});
// console.log(playerName.value);
*/

// Display total bill ----------------------------------------------
// Just nu visar den totalen av alla produkter, vi kan sedan ändra så att den istället tar in det som finns i shoppingcarten / Linus

// Visa totalt belopp
function calculateTotalBill() {
  totalBill = cart.reduce((total, item) => {
    const product = document.querySelector(`.product-item[data-id="${item.productId}"]`);
    const price = parseFloat(product.dataset.price);
    return total + item.quantity * price;
  }, 0);

  console.log(`Det totala priset är: ${totalBill}`);
  console.log(cart);
  console.log(typeof totalBill);
  
  // Update local storage after calculating the total bill
  updateLocalStorage(totalBill);

  return totalBill;
}
/* function calculateTotalBill(items) {
  const totalBill = items.reduce((total, item) => {
    return total + item.price;
  }, 0)
  console.log(`the total price with reduce is: ${totalBill}`)
}; */