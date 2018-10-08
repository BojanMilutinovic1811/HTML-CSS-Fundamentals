const menuBtn = document.getElementById('menu-btn'),
      menu = document.querySelector('.menu'),
      open = document.getElementById('open'),
      letters = document.querySelectorAll('.letters'),
      openList = document.querySelectorAll('.openList'),
      switchLights = document.querySelectorAll('.switch');
let showMenu = false;
// menu button transformation to X(close option) on click and menu appearance 


menuBtn.addEventListener('click', transformBtn);

function transformBtn() {

    if(!showMenu) {
        menuBtn.classList.add('btn-close');
        menu.classList.add('menu-show');

        showMenu = true;
    } else {
        menuBtn.classList.remove('btn-close');
        menu.classList.remove('menu-show')

        showMenu = false;
    }
}

// drop open part on main page 

document.addEventListener('DOMContentLoaded', dropOpen);

function dropOpen() {
    counterClass();
    setTimeout(()=> {
        openList.forEach(li => li.classList.add('drop-li'))
        open.classList.add('drop');
        switchLights.forEach(element => element.classList.add('turn-off'))
    }, 4500)
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
    }, 800)
}