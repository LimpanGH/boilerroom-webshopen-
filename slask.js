// old for each function /Zabi
 let quantity = 0;

  addButton.addEventListener('click', () => {
    quantity++;
    quantityItem.textContent = quantity;
    updateTotal();
    console.log("clicked");
  });

  subButton.addEventListener('click', () => {
    if (quantity > 0) {
      quantity--;
      quantityItem.textContent = quantity;
      updateTotal();
    }
  });

  function updateTotal() {
    let totalAmount = 0;
    productItems.forEach((item) => {
      const itemQuantity = item.querySelector('.quantity').textContent;
      totalAmount += itemQuantity * item.getAttribute('data-price');
    });

    // Update the total amount in the HTML
    totalAmountItems.textContent = totalAmount;
  }
}); 




// Anders
productItems.forEach((item) => {
    const addButton = item.querySelector('.add-button');
    const subButton = item.querySelector('.sub-button');
    const quantityItem = item.querySelector('.quantity');
  })