$(document).ready(function() {

  console.log('Hello from jQuery');

  var question = $('.faq');
  var answer = $('.faq-accordion');

 $(question).click(function(){
    $(answer).slideUp();
    $(this).next().slideToggle('fast');
  });

});
