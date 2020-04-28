
$(document).ready(function() {

  console.log('mobile menu loaded');

  $(".burger-menu").click(function(){

    $(".mobile-nav").toggleClass("hide");

    $(this).toggleClass("active");

    console.log("mobile menu clicked");

  }); //Closes Click Burger function

}); //Closes Ready function



// Defer iFrame loading
console.log('loaded defer iframe');

function init() {
var vidDefer = document.getElementsByTagName('iframe');
for (var i=0; i<vidDefer.length; i++) {
if(vidDefer[i].getAttribute('data-src')) {
vidDefer[i].setAttribute('src',vidDefer[i].getAttribute('data-src'));
} } }
window.onload = init;
