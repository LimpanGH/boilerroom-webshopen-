/* Info
Ni väljer om ni använder produktdatan i js eller json och om ni vill lägga till 
fler properties som bilder etc.

Ni får också använda ett api som t.ex. https://fakestoreapi.com/ för att generara
ut fiktiva produkter därifrån istället för från en lokal js/json.
*/

// const products = [
//     { id: 1, name: 'T-shirt', category: 'kläder', price: 100 },
//     { id: 2, name: 'Hörlurar', category: 'elektronik', price: 250 },
//     { id: 3, name: 'Keps', category: 'kläder', price: 50 },
//     { id: 4, name: 'Mobiltelefon', category: 'elektronik', price: 500 }
// ];

// const cart = [];
const productContainer = document.querySelector("#product-container"); //Variable that holds our products




// Fetch data ----------------------------------
fetch('https://fakestoreapi.com/products')
  // .then((response) => console.log(response)) //logs the response-object
  .then((response) => response.json()) // Parsing the response-object to json
  .then((data) => {  // Logging the json-ified object
    console.log(data);
    displayProducts(data);
  });
  .catch(error => console.log(error));


// Display data ---------------------------------- Anders
function displayProducts(products) {
  const html = products.map(product => `
  `
)};


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


// Local storage ----------------------------------
//Startkod för local storage
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameValue = playerName.value;
    window.localStorage.setItem('fullName', nameValue);
    window.location.href = 'shoppingcart.html';
  });
  // console.log(playerName.value);


// Display total bill ----------------------------------

