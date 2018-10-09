const navBtn = document.querySelector('.nav-btn'),
      closeBtn = document.querySelector('.btn-close');


      navBtn.addEventListener('click', openSlide);
      closeBtn.addEventListener('click', closeSlide);


      function openSlide() {
        document.querySelector('.menu').style.width = '100%';
        document.querySelector('.menu').style.visibility = 'visible';
      };

      function closeSlide() {
        document.querySelector('.menu').style.width = '0';
        document.querySelector('.menu').style.visibility = 'hidden';

      };