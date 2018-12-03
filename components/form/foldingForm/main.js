const folder = document.querySelector('.fold');
const signIn = document.querySelector('.signIn');

console.log(folder, signIn)
signIn.addEventListener('click', fold); 


function fold() {
    folder.classList.toggle('active');
    console.log('hello');
}