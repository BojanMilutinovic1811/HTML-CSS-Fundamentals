(function() {
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


//button animation

const particleOpt =  {
    style: 'stroke',
    color: 'black',
    direction: 'bottom',
    duration: 1200,
    easing: 'easeOutSine',
    speed: .7,
    oscillationCoefficient: 5
};
const particles = new Particles('.button', particleOpt);
document.querySelector('.btn').addEventListener('click', particlesActivate)

function particlesActivate(e) {
    e.preventDefault()
    if ( !particles.isAnimating()) {

        particles.disintegrate();
    }
    console.log('particles')
}
  
// Disintegrate the button into particles
})()

