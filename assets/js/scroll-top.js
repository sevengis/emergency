'use strict';
/*****************************************************
 ** scroll-top.js
 ** 
 ** Javascript for Scroll Top Button.
 ** Developer: Ranpariya - The Development Lab - India
 *****************************************************/
/*************
 * Scroll top
 *************/
$(window).scroll(function(){
  if($(this).scrollTop() > 25) {
    $('.scrollToTop').fadeIn();
  } else {
    $('.scrollToTop').fadeOut();
  }
});
$('.scrollToTop').on("click", function(){
  $("html, body").animate({ scrollTop: 0 }, 800);
  return false;
});