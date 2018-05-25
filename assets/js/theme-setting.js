'use strict';
/*****************************************************
 ** theme-setting.js
 ** 
 ** Javascript for Theme Setting Menu
 ** NOTE: Not usable in real work. Developed just for
 ** demonstration purpose.
 ** Developer: Ranpariya - The Development Lab - India
 *****************************************************/

$(document).ready(function() {

  /********************
   * Theme Setting Box
   ********************/
  $('.theme').on("click", function(){
    var href = "styles/" + $(this).data('name') + ".min.css";
    $("#theme-style").attr('href', href);
    $('body').removeClass();
    $('body').addClass($(this).data('name'));
    return false;
  });
});