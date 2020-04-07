
$(document).ready(function() {

  console.log('hello from jquery');

  $(".burger-menu").click(function(){

    $(".mobile-nav").toggleClass("hide");

    $(this).toggleClass("active");

    console.log("burger clicked");

  }); //Closes Click Burger function

}); //Closes Ready function

var clics = 0;

$(document).ready(function() {

// Accordion script by @SebaGarcia
console.log('loaded FAQ');

  $('.faq-a').hide();
  $('#cerrartodas').hide();

  $('.faq-q').click(function() {

    $(this).next('.faq-a').toggle(function() {

      $(this).next('.faq-a');

    }, function() {

      $(this).next('.faq-a').fadeIn('fast');

    });

    if ($(this).hasClass('close')) {
      $(this).removeClass('close');
    } else {
      $(this).addClass('close');
    };

    if ($('.close').length >= 3) {

      $('#cerrartodas').fadeIn('fast');

    } else {
      $('#cerrartodas').hide();
      var opened = $('.close').length
      console.log(opened);
    }
  }); //Close Function Click

}); //Close Function Ready

// Defer iFrame loading
console.log('loaded defer iframe');

function init() {
var vidDefer = document.getElementsByTagName('iframe');
for (var i=0; i<vidDefer.length; i++) {
if(vidDefer[i].getAttribute('data-src')) {
vidDefer[i].setAttribute('src',vidDefer[i].getAttribute('data-src'));
} } }
window.onload = init;
