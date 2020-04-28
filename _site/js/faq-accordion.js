
var clics = 0;
$(document).ready(function() {

// Accordion script by @SebaGarcia
console.log('FAQ loaded');

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
