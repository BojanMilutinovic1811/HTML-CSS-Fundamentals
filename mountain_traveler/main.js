

const btn = document.querySelector(".submit-btn");
const nav = document.querySelector('nav');
let tglClass = false;

// console.log(btn, nav);


btn.addEventListener('click', toggleMenu);


function toggleMenu() {
    // console.log('clicked')
    if(!tglClass) {
        nav.classList.add('show')
        tglClass = true;
    } else {
        nav.classList.remove('show');
        tglClass = false;
    }
}