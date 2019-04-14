const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
burger.addEventListener("click", toggleMenu);

function toggleMenu(e) {
  nav.classList.toggle("showMenu");
  burger.classList.toggle("close");
  console.log(e.target);
  console.log(nav);
}
