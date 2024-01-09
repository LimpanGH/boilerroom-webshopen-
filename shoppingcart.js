// Retrieving data from local storage on a new page
const storedDataJSON = localStorage.getItem("cartData");

// Parsing the JSON string back into an object
const storedData = JSON.parse(storedDataJSON);

// Accessing cart and totalBill properties
const cart = storedData.cart;
const totalBill = storedData.totalBill;

// Displaying total amount
const totalAmountElement = document.getElementById("total");
totalAmountElement.textContent = totalBill;

// Assuming you have a function to fetch product data by ID
function getProductData(productId) {
  // Replace this with your logic to fetch product data based on the ID
  // For example, you might have an array of products where you can find the product by its ID
  const product = products.find((item) => item.id === productId);
  return product;
}

// Displaying product details for each item in the cart
const displaycartItems = document.getElementById("cartItems");
cart.forEach((item) => {
  const productData = getProductData(item.productId);
  if (productData) {
    const itemElement = document.createElement("div");
    itemElement.innerHTML = `
                    <p>Product ID: ${item.productId}</p>
                    <p>Product Title: ${productData.title}</p>
                    <p>Product Image: ${productData.image}</p>
                    <p>Quantity: ${item.quantity}</p>
                    <hr>
                `;
    displaycartItems.appendChild(itemElement);
  }
});

/*
const avatarUrl = localStorage.getItem('avatarUrl');
let imgOfPlayerAvatar = document.querySelector('#imgOfPlayerAvatar');
imgOfPlayerAvatar.src = avatarUrl;
const fullName = localStorage.getItem('fullName');
document.querySelector('.playerName').textContent = fullName;


// add and sub button 
//total amount 
const productContainer = document.querySelectorAll(".product-container")
const totalAmountElement = document.getElementById("total-amount")

productContainer.forEach(element => {
    const addButton = element.querySelector(".add-button")
    const subButton = element.querySelector(".sub-button")
    const quantityElement = element.querySelector(".quantity")

    let quantity = 0

    addButton.addEventListener("click", () => {
        quantity++;
        quantityElement.textContent = quantity;
        updateTotal();
    })

    subButton.addEventListener("click", () => {
        if (quantity > 0) {
            quantity--;
            quantityElement.textContent = quantity;
            updateTotal();
        }
    })

    function updateTotal() {
        let totalAmount = 0;
        productContainer.forEach(item => {
            const itemQuantity = item.querySelector(".quantity").textContent
            totalAmount += itemQuantity * item.getAttribute("data-price")
        })

        totalAmountElement.textContent = totalAmount;
    }
});
// end off add, sub botton kod 