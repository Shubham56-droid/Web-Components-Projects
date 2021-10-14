const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar-menu')
const navLogo = document.querySelector('#navbar-logo')


//display mobile menu 

const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')

};

menu.addEventListener('click', mobileMenu);

//shows active menu when scrolling(underlines the active menu)
const highlightMenu = () => {
    const elem = document.querySelector('.highlight')
    const homeMenu = document.querySelector('#home-page')
    const aboutMenu = document.querySelector('#about-page')
    const serviceMenu = document.querySelector('#services-page')
    let scrollposition = window.scrollY
    //console.log(scrollposition);
    //use console and see the height at which you wanna switch the section highlighted

    //add 'highlight' class to menu item

    if (window.innerWidth > 960 && scrollposition < 400) //when to change the underline from home to about or so
    {
        homeMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        return
    }

    else if (window.innerWidth > 960 && scrollposition < 1300) {
        aboutMenu.classList.add('highlight')
        homeMenu.classList.remove('highlight')
        serviceMenu.classList.remove('highlight')
        return
    }

    else if (window.innerWidth > 960 && scrollposition < 2045) {
        serviceMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        return
    }

    if ((elem && window.innerWidth < 960 && scrollposition < 600) || elem) {
        elem.classList.remove('highlight')
    }
}

window.addEventListener('scroll', highlightMenu)
window.addEventListener('click', highlightMenu)

//close mobilemenu when clicked on a menu item 

const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active')
    if (window.innerWidth <= 768 && menuBars) {
        menu.classList.toggle('is-active')
        menuLinks.classList.remove('active')
    }
}

menuLinks.addEventListener('click', hideMobileMenu)
navLogo.addEventListener('click', hideMobileMenu)



