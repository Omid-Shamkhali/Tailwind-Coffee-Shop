const toggleThemeBtn = document.querySelectorAll(".toggle-theme");
const toggleSubmenuBtn=document.querySelector("#submenu-btn")
const submenuTag=document.querySelector('.submenu')
const menubarBtn=document.querySelector('.bar-btn')
const mobileNav=document.querySelector('#mobile-menu')
const closeMneuBtn=document.querySelector('.close-menu')
const overlayItem=document.querySelector('.overlay')
const closeBtnBasket=document.querySelector('.close-basket')
const mobileBasketTag=document.querySelector('.mobile-basket')
const mobileShoppingCartBtn=document.querySelector('.mobile-shopping-cart')


toggleThemeBtn.forEach(btn=>{
    btn.addEventListener("click" , () => {
        if (localStorage.theme === "dark"){
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme" , "dark");
        }
    })
})

toggleSubmenuBtn.addEventListener('click',(e)=>{
    
    toggleSubmenuBtn.classList=" w-4 h-4  cursor-pointer"
    if(submenuTag.classList.contains("hidden")){
        submenuTag.classList.remove("hidden")
        submenuTag.classList="flex flex-col gap-y-3 pl-8 mt-3 text-sm text-zinc-600 dark:text-white"
    }else{
        submenuTag.classList="hidden"
        toggleSubmenuBtn.classList=" w-4 h-4  cursor-pointer rotate-180 transition-all"

    }
})

const menu = mobileNav;

menubarBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  menu.classList.toggle('-left-64');
  menu.classList.toggle('left-0');
});

closeMneuBtn.addEventListener('click', () => {
  menu.classList.toggle('left-0');
  menu.classList.toggle('-left-64');
});


menu.addEventListener('click', (e) => {
  e.stopPropagation();
});

// close menu by click in outside
document.addEventListener('click', () => {
  if (menu.classList.contains('left-0')) {
    menu.classList.remove('left-0');
    menu.classList.add('-left-64');
  }
});

closeBtnBasket.addEventListener('click',()=>{
    mobileBasketTag.classList.toggle('-right-64')
    mobileBasketTag.classList.toggle('right-0')
    overlayItem.classList.toggle('hidden')
    
   
   
 
  
})
mobileShoppingCartBtn.addEventListener('click',()=>{
    mobileBasketTag.classList.toggle('right-0')
    mobileBasketTag.classList.toggle('-right-64')
    overlayItem.classList.toggle('hidden')
   
})