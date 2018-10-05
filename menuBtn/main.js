const btn = document.getElementById('menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const menuItems = document.querySelectorAll('.menu-item');
let showMenu = false;


 

btn.addEventListener('click', toggleMenu)

function toggleMenu() {
    if(!showMenu) {
        btn.classList.add('close');
        menu.classList.add('menu-show');
        menuNav.classList.add('nav-show');
        menuBranding.classList.add('branding-show');
        menuItems.forEach(item=> item.classList.add('item-show'));

        showMenu = true;
    } else {
        btn.classList.remove('close');
        menu.classList.remove('menu-show');
        menuNav.classList.remove('nav-show');
        menuBranding.classList.remove('branding-show');
        menuItems.forEach(item=> item.classList.remove('item-show'))

        showMenu = false;
    }

}