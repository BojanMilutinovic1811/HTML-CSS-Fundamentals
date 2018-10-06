const open = document.getElementById('open');
const lis = document.querySelectorAll('li');

document.addEventListener('DOMContentLoaded', dropOpen)

function dropOpen() {
    
    setTimeout(()=> {
        lis.forEach(li => li.classList.add('drop-li'))
        open.classList.add('drop')
    }, 2500)
}