'use strict';
/*******************************************************
 ** tinycon.js
 ** 
 ** Javascript for Tinycon.
 ** Developer: Ranpariya - The Development Lab - India
 *******************************************************/
$(document).ready(function() {

  /***************
   * Tinycon color
   ***************/
  Tinycon.setOptions({
    color: ' #fff'
  })

  /*****************
   * Set Only number
   *****************/
  $('#set-one-icon').on("click", function(){
    Tinycon.setBubble(1);
  });

  /************************
   * Set Number with String
   ************************/
  $('#set-mul-icon').on("click", function(){
    Tinycon.setBubble('2-a');
  });

  /********************************
   * Set Custom Background Tinyicon
   ********************************/
  $('#custom-bg-tinyicon').on("click", function(){
    Tinycon.setBubble(80);
    Tinycon.setOptions({
      background: '#00a65a',
      fallback: true
    });
  });

  /*************
   * Blink title
   *************/
  $('#one').on("click", function(){
    blinkTitle("Tinycon","Blink Title Tinycon",500);
  });

  /**********************
   * Blinking title stop
   **********************/
  $('#stop-one').on("click", function(){
    blinkTitleStop();
  });
});