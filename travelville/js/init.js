(function($){
    $(function(){
  
      $('.sidenav').sidenav();

      $('.slider').slider({
          height: 550
      });

      $('.autocomplete').autocomplete({
          data: {
              'Aruba': null,
              'Cancun Mexico': null,
              'Hawaii': null,
              'Florida': null,
              'California': null,
              'Jamaica': null,
              'Europe': null,
              'The Bahamas': null
          }
      })

      $('.materialboxed').materialbox();

      $('.scrollspy').scrollSpy();
  
    }); // end of document ready
  })(jQuery); // end of jQuery name space

//   $(document).ready(function(){
//     $('.slider').slider();
//   });
        