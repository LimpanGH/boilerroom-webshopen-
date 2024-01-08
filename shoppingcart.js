// Retrieving data from local storage on a new page
const storedDataJSON = localStorage.getItem('cartData');

// Parsing the JSON string back into an object
const storedData = JSON.parse(storedDataJSON);

// Now 'storedData' contains the cart and totalBill
console.log(storedData);



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