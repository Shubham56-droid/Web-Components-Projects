const humberger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");

humberger_menu.addEventListener("click",()=>{
    container.classList.toggle("active");

})