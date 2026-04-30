document.addEventListener('DOMContentLoaded', () => {
    const plusButtons = document.querySelectorAll('.plus-number');
  
    plusButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const container = btn.closest('div'); 
        const totalProduct = container.querySelector('.TotalProductNumber');
  
        let count = parseInt(totalProduct.textContent);
        count++;
        totalProduct.textContent = count;
      });
    });
  });