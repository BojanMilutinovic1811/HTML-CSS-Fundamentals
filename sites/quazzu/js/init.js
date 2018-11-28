(function($){
  $(function(){

    $('.sidenav').sidenav();

    $('.carousel.carousel-slider').carousel({
      fullWidth: true,
      indicators: true
    });
    $('.modal').modal();
    $('.tabs').tabs();
    $('select').formSelect();

  }); // end of document ready
})(jQuery); // end of jQuery name space

        