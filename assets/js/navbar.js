'use strict';
/*******************************************************
 ** navbar.js
 ** 
 ** Javascript for Navbar config.
 ** Developer: Ranpariya - The Development Lab - India
 *******************************************************/
$(document).ready(function() {

  /************************
   * Settings menu toggles
   ************************/
  $('.sidebar-nav-setting').on("click", function(){
    $('.settings-menu').slideToggle(400);
  });

  /******************
   * Themes settings
   ******************/
  $('.color-schemes a').each(function() {
    $(this).on("click", function(){
      var themes = ['strawberry-theme', 'almond-theme', 'lime-theme', 'fresh-apple-theme', 'orange-theme', 'blueberry-theme', 'teal-theme', 'elderberry-theme', 'strawberry-light-theme', 'almond-light-theme', 'lime-light-theme', 'fresh-apple-light-theme', 'orange-light-theme', 'blueberry-light-theme', 'teal-light-theme', 'elderberry-light-theme'];
      themes.forEach(function(theme) {
        $('body').removeClass(theme);
      });
      $('body').addClass($(this).data('theme'));
    });
  });

  /****************
   * Settings menu
   ****************/
  $(document).mouseup(function (e) {
    if(e.target.className == 'fa fa-cog fa-spin' || e.target.className == 'nav-link sidebar-nav-setting') {
      return false;
    }

    var container = $(".settings-menu");
    if(!container.is(e.target) && container.has(e.target).length === 0) {
      container.slideUp(500);
    }
  });

  /*************
   * Scrollbars
   *************/
  $(".notification-scrollbar, .mail-scrollbar, .right-sidebar").mCustomScrollbar({
    autoHideScrollbar: true,
    mouseWheelPixels: 100,
    scrollInertia: 550,
    theme: "minimal-dark",
    verticalScroll: true
  });

  /*************************************
   * Left sidebar Collapsed(sidebar-v2)
   *************************************/
  $('.collapsed_sidebar_checkbox').iCheck({
    checkboxClass: 'icheckbox_theme',
    radioClass: 'iradio_square-blue'
  }).on('ifChanged', function(e) {
    var isChecked = e.currentTarget.checked;
    if(isChecked) {
      $('.wrapper').addClass('sidebar-collapse');
      if($('.wrapper').hasClass('sidebar-collapse')) {
        $('.logo').addClass('hide');
      } 
    } else {
      $('.wrapper').removeClass('sidebar-collapse');
      $('.logo').removeClass('hide');

    }
  });

  /***************
   * Boxed Layout
   ***************/
  $('.box_checkbox').iCheck({
    checkboxClass: 'icheckbox_theme',
    radioClass: 'iradio_square-blue'
  }).on('ifChanged', function(e) {
    var isChecked = e.currentTarget.checked;
    if(isChecked) {
      $('.settings-menu').removeClass('settings-menu-fixed');
      $('body').addClass('boxed-layout');
    } else {
      $('body').removeClass('boxed-layout');
    }
  });

  /***************
   * Fixed Header
   ***************/
  $('.navbar_checkbox').iCheck({
    checkboxClass: 'icheckbox_theme',
    radioClass: 'iradio_square-blue'
  }).on('ifChanged', function(e) {
    var isChecked = e.currentTarget.checked;
    if(isChecked) {
      $('.settings-menu').addClass('settings-menu-fixed');
      $('.header').addClass('fixed-navbar');
    } else {
      $('.settings-menu').removeClass('settings-menu-fixed');
      $('.header').removeClass('fixed-navbar');
    }
  });

  /***************
   * Fixed Footer
   ***************/
  $('.footer_checkbox').iCheck({
    checkboxClass: 'icheckbox_theme',
    radioClass: 'iradio_square-blue'
  }).on('ifChanged', function(e) {
    var isChecked = e.currentTarget.checked;
    if(isChecked) {
      $('.footer').addClass('fixed');
    } else {
      $('.footer').removeClass('fixed');
    }
  });

  /****************
   * Fixed Sidebar
   ****************/
  $('.sidebar_checkbox').iCheck({
    checkboxClass: 'icheckbox_theme',
    radioClass: 'iradio_square-blue'
  }).on('ifChanged', function(e) {
    var isChecked = e.currentTarget.checked;
    if(isChecked) {
      $('.settings-menu').addClass('settings-menu-fixed');
      $('.header').addClass('fixed-navbar');
      $('.sidebar-v1, .sidebar-v2').addClass('fixed-sidebar');
      $('.navbar_checkbox').parent().addClass('checked disabled');
      $('.navbar_checkbox').attr('disabled', true);
    } else {
      $('.settings-menu').removeClass('settings-menu-fixed');
      $('.header').removeClass('fixed-navbar');
      $('.sidebar-v1, .sidebar-v2').removeClass('fixed-sidebar');
      $('.navbar_checkbox').parent().removeClass('checked disabled');
      $('.navbar_checkbox').attr('disabled', false);
    }
  });

  /**************************
   * Right sidebar collapsed
   **************************/
  $('.sidebar-right-sidebar').on("click", function(){
    $('.right-sidebar').toggleClass('right-sidebar-toggle');
  });
  $('.right-sidebar-collapsed').each(function() {
    $(this).on("click", function(){
      $('.chat-sidebar-chat').addClass('chat-sidebar-chat-show');
      $('#chat .input-group').hide(800);
    });
  });
  $('.chat-content-hide').on("click", function(){
    $('.chat-sidebar-chat').removeClass('chat-sidebar-chat-show');
    $('#chat .input-group').show(800);
  });
  $('.right-sidebar .nav li a').each(function() {
    $(this).on("click", function(){
      $('.chat-sidebar-chat').removeClass('chat-sidebar-chat-show');
      $('#chat .input-group').show(800);
    });
  });

  /*******************************
   * Right sidebar collapsed chat
   *******************************/
  $(".right-sidebar .nav-tabs li a").each(function() {
    $(this).on("click", function(){
      $('.chat-sidebar-chat').removeClass('chat-sidebar-chat-show');
      $('#chat .input-group').show(800);
    });
  });

  /*****************************
   * Right sidebar setting menu
   *****************************/
  $('.notifications').iCheck({
    checkboxClass: 'icheckbox_theme',
    radioClass: 'iradio_square-blue'
  })
  $('.API-access').iCheck({
    checkboxClass: 'icheckbox_theme',
    radioClass: 'iradio_square-blue'
  })
  $('.auto-updates').iCheck({
    checkboxClass: 'icheckbox_theme',
    radioClass: 'iradio_square-blue'
  })
  $('.online-status').iCheck({
    checkboxClass: 'icheckbox_theme',
    radioClass: 'iradio_square-blue'
  })
  $('.settings-responsive').iCheck({
    checkboxClass: 'icheckbox_theme',
    radioClass: 'iradio_square-blue'
  })
  $('.activity').iCheck({
    checkboxClass: 'icheckbox_theme',
    radioClass: 'iradio_square-blue'
  })
  $('.statisticts').iCheck({
    checkboxClass: 'icheckbox_theme',
    radioClass: 'iradio_square-blue'
  })
});