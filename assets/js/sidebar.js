'use strict';
/*******************************************************
 ** sidebar.js
 ** 
 ** Javascript Config for Sidebar V1.
 ** Developer: Ranpariya - The Development Lab - India
 *******************************************************/
$(document).ready(function() {

  /*****************
   * Sidebar Toggle
   *****************/
  var _left = '0px';
  function resizeTopMenu() {
    if($('.wrapper').hasClass('toggle-sidebar')) {
      _left = '230px';
    } else {
      _left = '0px';
    }
    $('.navbar.navbar-lg .nav-block').css('padding-left', _left + ' !important');
  }
  resizeTopMenu();
  $('.menu-toggle').on("click", function(){
    $('.wrapper').toggleClass('toggle-sidebar');
  });

  /* Page wrapper content height setter. */
  function setContentHeight(){
    var _sidebarHeight = $('.sidebar-v1').height(),
      _mainWrapper = $('.main-wrapper').height() + 50,
      winH = 600,
      windowWidth = 767;
    if(document.body && document.body.offsetWidth) {
      windowWidth = document.body.offsetWidth;
      winH = document.body.offsetHeight;
    }
    if(document.compatMode=='CSS1Compat' && document.documentElement && document.documentElement.offsetWidth) {
      windowWidth = document.documentElement.offsetWidth;
      winH = document.documentElement.offsetHeight;
    }
    if(window.innerWidth && window.innerHeight) {
      windowWidth = window.innerWidth;
      winH = window.innerHeight;
    }
    winH = winH - 51;
    $('.main-wrapper').css('min-height', winH + "px");
    if(windowWidth <= 767)
      $('.sidebar-v1').css('height', $('.main-wrapper').height() + 71);
  }
  setContentHeight();
  $(window).resize(function(){
    setContentHeight();
  });

  /***************
   * Sidebar-menu
   ***************/
  var menuLinkClass = $('.sidebar-menu li .list-link'),
    subMenuClass = $('.sub-menu .sub-list'),
    animationSpeed = 200;

  menuLinkClass.on("click", function(e) {

    /* Get the clicked link and the next element */
    var thisElement = $(this),
      nextElement = thisElement.next();

    /* Check if the next element is a menu and is visible */
    if((nextElement.is('.sub-menu')) && (nextElement.hasClass('open'))) {

      /*****************
       * Close the menu
       *****************/
      nextElement.slideUp(animationSpeed, function () {
        nextElement.removeClass('open');
      });
      thisElement.removeClass("active");

    } else if((nextElement.is('.sub-menu')) && (!nextElement.hasClass('open'))) {
      var parentElement = thisElement.parents('ul').first(),
        ulElement = parentElement.find('ul:visible').slideUp(animationSpeed),
        parentLElement = thisElement.parent("li");

      /****************
       * Open the menu
       ****************/
      ulElement.removeClass('open');
      nextElement.addClass('open');
      menuLinkClass.removeClass('active');
      thisElement.addClass('active');
      nextElement.slideDown(animationSpeed, function () {
      });
    }
  });

  /***********************************
   * Left sidebar menu(Vertical Menu)
   ***********************************/
  $('.sidebar-v1 .vertical-menu li').on('click', function(e) {
    e.preventDefault();
    var _self = $(this),
      _id = _self.data('target'),
      _page = _self.data('page');
    if(_page) {
      window.location = _page;
      return false;
    }
    if(!_id)
      return false;
    $('.sidebar-v1 .vertical-menu li').each(function() {
      var _target = $(this).data('target');
      if(_target) {
        $(this).removeClass('active');
        $(_target).addClass('hide');
      }
    });
    _self.addClass('active');
    $(_id).removeClass('hide');
  });
});

/************
 * Scrollbar
 ************/
$(window).on("load",function() {
  $(".sidebar-v1").mCustomScrollbar({
    autoHideScrollbar: true,
    mouseWheelPixels: 100,
    scrollInertia: 550,
    theme: "minimal-dark",
    verticalScroll: true
  });
});