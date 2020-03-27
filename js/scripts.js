var clics = 0;

$(document).ready(function() {


// Accordion script by @SebaGarcia

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

$('#cerrartodas').click(function() {
  $('.faq-a').fadeOut(200);
  $('.faq-q').removeClass('close');
  $('#cerrartodas').fadeOut('fast');
});


// $(document).ready(function() {
//
//   console.log('Hello from jQuery');
//
//   $(".faq").click(function(){
//       $(".faq-accordion").toggle(200);
//     });
//
// });
