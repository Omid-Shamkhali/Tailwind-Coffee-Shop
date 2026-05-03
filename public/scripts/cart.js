document.addEventListener('DOMContentLoaded', () => {
    const plusButtons = document.querySelectorAll('.plus-number');
  
    plusButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const container = btn.closest('div');
  
        const totalProduct = container.querySelector('.TotalProductNumber');
        const trashIcon = container.querySelector('.trash-symbol');
        const minusSymbol=container.querySelector('.minus-symbol')
  
        let count = parseInt(totalProduct.textContent);
        count++;
        totalProduct.textContent = count;
  
        if (count > 1 && trashIcon) {
          trashIcon.style.display = 'none';
          minusSymbol.style.display='block'
        }
      
      });
    });
  });