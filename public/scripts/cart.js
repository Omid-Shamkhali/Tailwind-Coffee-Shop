document.addEventListener('DOMContentLoaded', () => {

    // PLUS BUTTON
    const plusButtons = document.querySelectorAll('.plus-number');
    plusButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const container = btn.closest('.productCartHolder');
        const totalProduct =container.querySelector('.TotalProductNumber');
        const trashIcon =container.querySelector('.trash-symbol');
        const minusSymbol =container.querySelector('.minus-symbol');
        const priceElement =container.querySelector('.productPriceInCart');
        let count = parseInt(totalProduct.textContent);
        let value =parseFloat(priceElement.textContent);
        count++;
        totalProduct.textContent = count;
        pricePerProductByCount(container,count, value);
        updateTotalPrice();
        if (count > 1) {
          trashIcon.style.display = 'none';
          minusSymbol.style.display = 'block';
        }
      });
    });
  
    // MINUS BUTTON
    const minusButtons = document.querySelectorAll('.minus-symbol');
    minusButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const container = btn.closest('.productCartHolder');
        const totalProduct =container.querySelector('.TotalProductNumber');
        const trashIcon =container.querySelector('.trash-symbol');
        const minusSymbol =container.querySelector('.minus-symbol');
        const priceElement =container.querySelector('.productPriceInCart');
        let count = parseInt(totalProduct.textContent);
        let value =parseFloat(priceElement.textContent);
        if (count > 1) {
          count--;
          totalProduct.textContent = count;
          pricePerProductByCount(container,count, value);
        }
        if (count === 1) {
          trashIcon.style.display = 'block';
          minusSymbol.style.display = 'none';
        }
      });
    });
  
    // DELETE PRODUCT
    const trashIcons =document.querySelectorAll('.trash-symbol');
      trashIcons.forEach(btn => {
      btn.addEventListener('click', () => {
      const product =btn.closest('.productCartHolder');
      product.remove();
      });
    });
  
    // TOTAL PRICE
    const perProductPriceInCart =document.querySelectorAll('.productPriceInCart');
    const totalProductPricesInCart =document.querySelectorAll('.totalProductPriceInCart');
    let total = 0;
    perProductPriceInCart.forEach(price => {
      let value =parseFloat(price.textContent);
      total += value;
    });
  
    totalProductPricesInCart.forEach(perTotal => {
      perTotal.textContent =
        total.toFixed(2);
    });
  });
// Update TOTAL PRICE
  function pricePerProductByCount(container, count, value){
    let basePriceInCart=container.querySelector('.basePrice');
    const priceElement =container.querySelector('.productPriceInCart');
    let total = count * basePriceInCart.textContent;
    priceElement.textContent = total.toFixed(2);
  
  }

  function updateTotalPrice(){
    const perProductPriceInCart =document.querySelectorAll('.productPriceInCart');
    const totalProductPricesInCart =document.querySelectorAll('.totalProductPriceInCart');
    let total = 0;
    perProductPriceInCart.forEach(price => {
      let value =parseFloat(price.textContent);
      total += value;
    });
    totalProductPricesInCart.forEach(perTotal => {
      perTotal.textContent =total.toFixed(2);
    });
  }