


const productContainer = document.querySelector('#product-container');
let cart; // Variable that holds our products

// Fetch data ----------------------------------
fetch('https://fakestoreapi.com/products')
  .then((response) => response.json())
  .then((data) => {
    // Logging the json-ified object
    console.log(data);
    calculateTotalBill(data);

    // Apply filters based on category
    // filterProductsByCategory(data, 'men\'s clothing');
    // filterProductsByCategory(data, 'women\'s clothing');
    // filterProductsByCategory(data, 'electronics');
    filterProductsByCategory(data, 'jewelery');
  })
  .catch((error) => console.log(error));

function calculateTotalBill(items) {
  const totalBill = items.reduce((total, item) => {
    return total + item.price;
  }, 0);
  console.log(`The total price with reduce is: ${totalBill}`);
}

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
