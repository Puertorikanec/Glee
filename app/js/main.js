$(document).ready(function(){
    $(".user-nav__btn").click(function(){
      $(".user-nav__inner").toggleClass("user-nav__inner--active");
    });
  });

  $(function(){
    $('.top-slider__inner').slick({
      dots: true,
      arrows: false
  }) 
})