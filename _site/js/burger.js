
$(document).ready(function() {

  console.log('mobile menu loaded');

  $(".burger-menu").click(function(){

    $(".mobile-nav").toggleClass("hide");

    $(this).toggleClass("active");

    console.log("mobile menu clicked");

  }); //Closes Click Burger function

}); //Closes Ready function
