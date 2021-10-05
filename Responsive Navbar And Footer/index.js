const  menu = document.querySelector('#mobile-menu');
const menulinks = document.querySelector('.nav-menu');

menu.addEventListener('click',()=>{

    menu.classList.toggle('is-active');
    menulinks.classList.toggle('active');

});