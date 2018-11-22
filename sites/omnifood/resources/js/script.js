

const waypoint = new Waypoint({
    element: document.querySelector('.section-features'),
    handler: function() {
      document.querySelector('nav').classList.toggle('sticky');
    }
  })


//   document.querySelector('.scroll-to-plans').addEventListener('click', ()=> {
//       scrollTo('.section-plans');
//     })
//   document.querySelector('.scroll-to-start').addEventListener('click', ()=> {
//       scrollTo('.section-features');
//   })

//   function scrollTo(param) {
//       document.querySelector(param).scrollIntoView({behavior: "smooth"})
//     }


document.querySelectorAll('a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            if(this.getAttribute('href')){
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        }
        });
    });


    
let icon = true;
const burger = document.querySelector('.mobile-nav-icon');

burger.addEventListener('click',()=>{
    document.querySelector('.main-nav').classList.toggle('invisible');
    if(icon) {
        burger.innerHTML = '<i class="fas fa-times"></i>';
        icon = false;
    } else {
        burger.innerHTML = '<i class="fas fa-bars"></i>';
        icon = true;
    }
    console.log('hello');
})