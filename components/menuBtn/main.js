const btn = document.getElementById('menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');
let showMenu = false;

 
const audio = document.querySelector('audio');


function playAudio() {
    audio.play();
}
 

btn.addEventListener('click', toggleMenu)

function toggleMenu() {
    playAudio();
    if(!showMenu) {
        btn.classList.add('close');
        menu.classList.add('menu-show');
        menuNav.classList.add('nav-show');
        menuBranding.classList.add('branding-show');
        navItems.forEach(item=> {
            item.addEventListener('click', playAudio)
            item.classList.add('item-show')});
        showMenu = true;
    } else {
        btn.classList.remove('close');
        menu.classList.remove('menu-show');
        menuNav.classList.remove('nav-show');
        menuBranding.classList.remove('branding-show');
        navItems.forEach(item=> item.classList.remove('item-show'))

        showMenu = false;
    }

}
