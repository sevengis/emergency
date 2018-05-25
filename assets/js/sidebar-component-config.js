'use strict';
/*******************************************************
 ** sidebar-component-config.js
 ** 
 ** Javascript Config for Sidebar Component Config.
 ** Developer: Ranpariya - The Development Lab - India
 *******************************************************/
$(document).ready(function() {
  /**********************
   * Left sidebar charts
   **********************/
  var facebookStatistics, commentsStatistics;
  $('.color-schemes a').each(function() {
    $('.color-schemes a').on("click", function(){
      facebookStatistics = $(".facebookStatistics").peity("bar", {fill: [$(this).data('themecolor'), "#909190"], width:100, height: 30, })
      commentsStatistics = $(".commentsStatistics").peity("bar", {fill: [$(this).data('themecolor'), "#909190"], width:100, height: 30,  })
    });
  });

  facebookStatistics = $(".facebookStatistics").peity("bar", {fill: ["#ED174C", "#909190"], width:100, height: 30, })
  setInterval(function() {
    var random = Math.round(Math.random() * 10)
    var values = facebookStatistics.text().split(",")
    values.shift()
    values.push(random)
    facebookStatistics
      .text(values.join(","))
      .change()
  }, 1000);
  commentsStatistics = $(".commentsStatistics").peity("bar", {fill: ["#ED174C", "#909190"], width:100, height: 30,  })
  setInterval(function() {
    var random = Math.round(Math.random() * 10)
    var values = commentsStatistics.text().split(",")
    values.shift()
    values.push(random)
    commentsStatistics
      .text(values.join(","))
      .change()
  }, 1000);

  /***********************
   * Always Sticky Header
   ***********************/
  if(window.localStorage.getItem("always-sticky-header")) {
    $('.always-sticky-header').prop('checked', true);
    $('.settings-menu').addClass('settings-menu-fixed');
    $('.header').addClass('fixed-navbar');
    $('.navbar_checkbox').parent().addClass('checked disabled');
    $('.navbar_checkbox').attr('checked', true);
    $('.navbar_checkbox').attr('disabled', true);
  }

  $('.always-sticky-header').iCheck({
    checkboxClass: 'icheckbox_theme',
    radioClass: 'iradio_square-blue'
  }).on('ifChanged', function(e) {
    var isChecked = e.currentTarget.checked;
    if(isChecked == true) {
      $('.navbar_checkbox').parent().addClass('checked disabled');
      $('.navbar_checkbox').attr('checked', true);
      $('.navbar_checkbox').attr('disabled', true);

      if(typeof(Storage) !== "undefined") {
        /* Store */
        window.localStorage.setItem("always-sticky-header", true);
        $('.settings-menu').addClass('settings-menu-fixed');
        $('.header').addClass('fixed-navbar');
      }
    } else {
      window.localStorage.removeItem("always-sticky-header");

      /*************************
       * Check for header class
       *************************/
      if(!$('.sidebar_checkbox').checked == false) {
        $('.settings-menu').removeClass('settings-menu-fixed');
        $('.header').removeClass('fixed-navbar');
      }

      if(!$('.sidebar-v1').hasClass('fixed-sidebar')) {
        $('.navbar_checkbox').parent().removeClass('checked disabled');
        $('.navbar_checkbox').attr('checked', false);
        $('.navbar_checkbox').attr('disabled', false);
      }
    }
  });

  /************************
   * Always Sticky Sidebar
   ************************/
  if(window.localStorage.getItem("always-sticky-sidebar")) {
    $('.always-sticky-sidebar').prop('checked', true);
    $('.sidebar-v1').addClass('fixed-sidebar');
    $('.settings-menu').addClass('settings-menu-fixed');
    $('.header').addClass('fixed-navbar');
    $('.sidebar_checkbox').parent().addClass('checked disabled');
    $('.always-sticky-header').parent().addClass('checked disabled');
    $('.navbar_checkbox').parent().addClass('checked disabled');
    $('.sidebar_checkbox').attr('checked', true);
    $('.sidebar_checkbox').attr('disabled', true);
    $('.always-sticky-header').attr('checked', true);
    $('.always-sticky-header').attr('disabled', true);
    $('.navbar_checkbox').attr('checked', true);
    $('.navbar_checkbox').attr('disabled', true);
  }

  $('.always-sticky-sidebar').iCheck({
    checkboxClass: 'icheckbox_theme',
    radioClass: 'iradio_square-blue'
  }).on('ifChanged', function(e) {
    var isChecked = e.currentTarget.checked;
    if(isChecked == true) {
      $('.sidebar_checkbox').parent().addClass('checked disabled');
      $('.always-sticky-header').parent().addClass('checked disabled');
      $('.navbar_checkbox').parent().addClass('checked disabled');
      $('.sidebar_checkbox').attr('checked', true);
      $('.sidebar_checkbox').attr('disabled', true);
      $('.always-sticky-header').attr('checked', true);
      $('.always-sticky-header').attr('disabled', true);
      $('.navbar_checkbox').attr('checked', true);
      $('.navbar_checkbox').attr('disabled', true);

      if(typeof(Storage) !== "undefined") {
        /* Store */
        window.localStorage.setItem("always-sticky-sidebar", true);
        $('.settings-menu').addClass('settings-menu-fixed');
        $('.header').addClass('fixed-navbar');
        $('.sidebar-v1').addClass('fixed-sidebar');
      }
    } else {
      window.localStorage.removeItem("always-sticky-sidebar");
      $('.settings-menu').removeClass('settings-menu-fixed');
      $('.header').removeClass('fixed-navbar');
      $('.sidebar-v1').removeClass('fixed-sidebar');
      $('.sidebar_checkbox').parent().removeClass('checked disabled');
      $('.always-sticky-header').parent().removeClass('checked disabled');
      $('.navbar_checkbox').parent().removeClass('checked disabled');
      $('.sidebar_checkbox').attr('checked', false);
      $('.sidebar_checkbox').attr('disabled', false);
      $('.always-sticky-header').attr('checked', false);
      $('.always-sticky-header').attr('disabled', false);
      $('.navbar_checkbox').attr('checked', false);
      $('.navbar_checkbox').attr('disabled', false);
    }
  });

  /***********************
   * Always Sticky Footer
   ***********************/
  if(window.localStorage.getItem("always-sticky-footer")) {
    $('.always-sticky-footer').prop('checked', true);
    $('.footer').addClass('fixed');
    $('.footer_checkbox').parent().addClass('checked disabled');
    $('.footer_checkbox').attr('checked', true);
    $('.footer_checkbox').attr('disabled', true);
  }

  $('.always-sticky-footer').iCheck({
    checkboxClass: 'icheckbox_theme',
    radioClass: 'iradio_square-blue'
  }).on('ifChanged', function(e) {
    var isChecked = e.currentTarget.checked;
    if(isChecked == true) {
      $('.footer_checkbox').parent().addClass('checked disabled');
      $('.footer_checkbox').attr('checked', true);
      $('.footer_checkbox').attr('disabled', true);
      if(typeof(Storage) !== "undefined") {
        /* Store */
        window.localStorage.setItem("always-sticky-footer", true);
        $('.footer').addClass('fixed');
      }
    } else {
      window.localStorage.removeItem("always-sticky-footer");
      $('.footer').removeClass('fixed');
      $('.footer_checkbox').parent().removeClass('checked disabled');
      $('.footer_checkbox').attr('checked', false);
      $('.footer_checkbox').attr('disabled', false);
    }
  });

  /********************
   * Always Box-Layout
   ********************/
  if(window.localStorage.getItem("always-boxed-layout")) {
    $('.always-boxed-layout').prop('checked', true);
    $('.settings-menu').removeClass('settings-menu-fixed');
    $('body').addClass('boxed-layout');
    $('.box_checkbox').parent().addClass('checked disabled');
    $('.box_checkbox').attr('checked', true);
    $('.box_checkbox').attr('disabled', true);
  }
  $('.always-boxed-layout').iCheck({
    checkboxClass: 'icheckbox_theme',
    radioClass: 'iradio_square-blue'
  }).on('ifChanged', function(e) {
    var isChecked = e.currentTarget.checked;
    if(isChecked == true) {
      $('.box_checkbox').parent().addClass('checked disabled');
      $('.box_checkbox').attr('checked', true);
      $('.box_checkbox').attr('disabled', true);
      if(typeof(Storage) !== "undefined") {
        /* Store */
        window.localStorage.setItem("always-boxed-layout", true);
        $('.settings-menu').removeClass('settings-menu-fixed');
        $('body').addClass('boxed-layout');
      }
    } else {
      window.localStorage.removeItem("always-boxed-layout");
      $('body').removeClass('boxed-layout');
      $('.box_checkbox').parent().removeClass('checked disabled');
      $('.box_checkbox').attr('checked', false);
      $('.box_checkbox').attr('disabled', false);
    }
  });

  /**********************
   * Clear Local Storage
   **********************/
  $('.flush-local-storage').on("click", function(){
    $('.always-sticky-header').parent().removeClass('checked');
    $('.always-sticky-sidebar').parent().removeClass('checked');
    $('.always-sticky-footer').parent().removeClass('checked');
    $('.always-boxed-layout').parent().removeClass('checked');
    $('.navbar_checkbox').parent().removeClass('checked');
    $('.footer_checkbox').parent().removeClass('checked');
    $('.sidebar_checkbox').parent().removeClass('checked');
    $('.box_checkbox').parent().removeClass('checked');
    window.localStorage.clear();
    /* Remove all */
    $('.header').removeClass('fixed-navbar');
    $('.footer').removeClass('fixed');
    $('.sidebar-v1').removeClass('fixed-sidebar');
    $('body').removeClass('boxed-layout');

    $('.always-sticky-header').parent().removeClass('checked disabled');
    $('.always-sticky-header').attr('disabled', false);
    $('.navbar_checkbox').parent().removeClass('checked disabled');
    $('.navbar_checkbox').attr('disabled', false);
    $('.sidebar_checkbox').parent().removeClass('checked disabled');
    $('.sidebar_checkbox').attr('disabled', false);
    $('.footer_checkbox').parent().removeClass('checked disabled');
    $('.footer_checkbox').attr('disabled', false);
    $('.box_checkbox').parent().removeClass('checked disabled');
    $('.box_checkbox').attr('disabled', false);

    /* Toastr */
    Command: toastr["success"]("Flushed Local Storage", "")
    toastr.options = {
      "closeButton": false,
      "debug": true,
      "progressBar": false,
      "positionClass": "toast-top-right",
      "preventDuplicates": false,
      "onclick": null,
      "showDuration": "400",
      "hideDuration": "1000",
      "timeOut": "7000",
      "extendedTimeOut": "1000",
      "showEasing": "swing",
      "hideEasing": "linear",
      "showMethod": "fadeIn",
      "hideMethod": "fadeOut"
    }
  });
});