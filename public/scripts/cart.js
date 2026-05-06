document.addEventListener('DOMContentLoaded', () => {
    const plusButtons = document.querySelectorAll('.plus-number');
    plusButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const container = btn.closest('div');
        const totalProduct = container.querySelector('.TotalProductNumber');
        const trashIcon = container.querySelector('.trash-symbol');
        const minusSymbol = container.querySelector('.minus-symbol');
        let count = parseInt(totalProduct.textContent);
        count++;
        totalProduct.textContent = count;
        if (count > 1) {
          trashIcon.style.display = 'none';
          minusSymbol.style.display = 'block';
        } else {
          trashIcon.style.display = 'block';
          minusSymbol.style.display = 'none';
        }
      });
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    const minusButtons = document.querySelectorAll('.minus-symbol');
  
    minusButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const container = btn.closest('div');
        const totalProduct = container.querySelector('.TotalProductNumber');
        const trashIcon = container.querySelector('.trash-symbol');
        const minusSymbol = container.querySelector('.minus-symbol');
        let count = parseInt(totalProduct.textContent);
        if (count > 1) {
          count--;
          totalProduct.textContent = count;
        }
        if (count === 1) {
          trashIcon.style.display = 'block';
          minusSymbol.style.display = 'none';
        }
      });
    });
  });

 

  document.addEventListener('DOMContentLoaded', () => { 
    const trashIcon = document.querySelectorAll('.trash-symbol');
    trashIcon.forEach(btn => {
        btn.addEventListener('click',()=>{
            const product = btn.closest('.productCartHolder');
            product.remove();
        })
    })
  });
 /* totalProductPriceInCart
  productPriceInCart  */
  document.addEventListener('DOMContentLoaded', () => { 
    const products = document.querySelectorAll('.productCartHolder');
    const totalProductPricesInCart = document.querySelectorAll('.totalProductPriceInCart');
  
    let total = 0;
  
    products.forEach(product => {
      const price = parseFloat(product.querySelector('.productPriceInCart').textContent);
      const quantity = parseInt(product.querySelector('.TotalProductNumber').textContent);
  
      total += price * quantity;
    });
  
    totalProductPricesInCart.forEach(perTotal => {
      perTotal.textContent = total.toFixed(2);
    });
  });