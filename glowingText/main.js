const open = document.getElementById('open');
const lis = document.querySelectorAll('li');
const letters = document.querySelectorAll('.letters');
const audio = document.querySelector('audio');
const home = document.querySelector('.home');
const switchLights = document.querySelectorAll('.switch');



document.addEventListener('DOMContentLoaded', dropOpen);
home.addEventListener('click', fixLights);

function dropOpen() {

    counterClass();
    
    setTimeout(()=> {
        lis.forEach(li => li.classList.add('drop-li'))
        open.classList.add('drop')
        audio.play();
        fixButton();
        switchLights.forEach(element => element.classList.add('turn-off'))
    }, 5000)
}

function counterClass() {
    let counter = 0; 
    let interval = setInterval(()=> {
        if(counter<letters.length) {
            letters[counter].classList.add('text-shadow');
            counter++;
        } else {
            clearInterval(interval)
        }
    }, 1000)
}

function fixButton() {
    const btn = document.createElement('button');
    btn.textContent = 'Fix the lights';
    btn.className = 'fix';
    home.insertBefore(btn, open)
}

function fixLights(e) {
    
    if(e.target.className === 'fix'){
    switchLights.forEach(letter => letter.classList.remove('turn-off'));
    open.classList.remove('drop');
    lis.forEach(li => li.classList.remove('drop-li'));
    e.target.remove();
    }
}


