'use strict';
/*******************************************************
 ** components.js
 ** 
 ** Javascript for theme's small-small components like
 ** Raised Button, Pace (Page Loader), Scroll Top etc..
 ** Developer: Ranpariya - The Development Lab - India
 *******************************************************/
$(document).ready(function() {

  /******************
   * Animated button
   ******************/
  var ink, d, x, y;
  $('.btn-raised').on("click", function(e){
    if($(this).find(".btn-ink").length === 0) {
      $(this).prepend("<span class='btn-ink'></span>");
    }
    ink = $(this).find(".btn-ink");
    ink.removeClass("btn-animate");
    if(!ink.height() && !ink.width()) {
      d = Math.max($(this).outerWidth(), $(this).outerHeight());
      ink.css({height: d, width: d});
    }
    x = e.pageX - $(this).offset().left - ink.width()/2;
    y = e.pageY - $(this).offset().top - ink.height()/2;
    ink.css({top: y+'px', left: x+'px'}).addClass("btn-animate");
  });

  /*******************
   * Active nav pills
   *******************/
  $('.nav-pills-menu li').on("click", function(){
    $(".nav-pills-menu li").removeClass("active-pills");
    $(this).addClass("active-pills");
  });

  /**************
   * Page Loader
   **************/
  Pace.on("done", function() {
    setTimeout(function(){
      $('.wrapper, .auth-page').css({ 'opacity': 1 });
    },100);
  });
});