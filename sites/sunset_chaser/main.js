

const btn = document.querySelector(".submit-btn");
const nav = document.querySelector('nav');
let tglClass = false;


btn.addEventListener('click', toggleMenu);


function toggleMenu() {
    if(!tglClass) {
        nav.classList.add('show')
        tglClass = true;
    } else {
        nav.classList.remove('show');
        tglClass = false;
    }
}