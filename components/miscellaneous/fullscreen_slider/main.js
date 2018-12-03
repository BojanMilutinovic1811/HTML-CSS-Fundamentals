let sliderImages = document.querySelectorAll('.slide');
let arrowRight = document.querySelector('#arrow-right');
let arrowLeft = document.querySelector('#arrow-left');

let current = 0;    

function reset() {
    sliderImages.forEach(img => {
        img.style.display = 'none';
    })
}

function startSlide() {
    reset()
    sliderImages[0].style.display = 'block';
}

//show previous

function slideLeft() {
    reset()
    sliderImages[current - 1].style.display = 'block';
    current--;
}

//show next 

function slideRight() {
    reset();
    sliderImages[current + 1].style.display = 'block';
    current++;
}

arrowLeft.addEventListener('click', ()=> {
    if(current === 0) {
        current = sliderImages.length
    }
    slideLeft()
})

arrowRight.addEventListener('click', ()=> {
    if(current === sliderImages.length-1) {
        current = -1;
    }
    slideRight();
})

startSlide();