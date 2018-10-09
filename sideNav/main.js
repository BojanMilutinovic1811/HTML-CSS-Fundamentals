const navBtn = document.querySelector('.nav-btn'),
      closeBtn = document.querySelector('.btn-close');


      navBtn.addEventListener('click', openSlide);
      closeBtn.addEventListener('click', closeSlide);


      function openSlide() {
        // document.querySelector('main').style.marginLeft = '250px';
        document.querySelector('.menu').style.width = '100%';
        console.log('hello');
      };

      function closeSlide() {
        // document.querySelector('main').style.marginLeft = '0';
        document.querySelector('.menu').style.width = '0';
        console.log('hello');

      };