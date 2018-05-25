'use strict';
/******************************************************
 ** sidebar-v2.js
 ** 
 ** Javascript Config for Sidebar V2.
 ** Developer: Ranpariya - The Development Lab - India
 ******************************************************/
$(document).ready(function() {

  /************************************* 
   * Page wrapper content height setter. 
   *************************************/
  function setContentHeight(){
    var _sidebarHeight = $('.sidebar-v2').height(),
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
      $('.sidebar-v2').css('height', $('.main-wrapper').height() + 71);
  }
  setContentHeight();
  $(window).resize(function(){
    setContentHeight();
  });

  /**************************************
   * Left sidebar (sidebar-v2) scrollbar
   **************************************/
  $(".sidebar-v2 .left-sidebar-v2").slimScroll({
    size: '0', 
    height: '100%', 
    width: '100%',
    color: '#39393a', 
    allowPageScroll: true, 
    alwaysVisible: true,
    opacity: 0.5
  });

  /********************************************************
   * Left sidebar (sidebar-v2) shortcut user panel popover
   ********************************************************/
  $('.main-nav-shortcut ul li').each(function() {
    var n = $(this);
    n.popover({
      animation: !1,
      trigger: "hover",
      placement: "bottom",
      container: ".sidebar-v2",
      viewport: ".sidebar-v2",
      template: '<div class="popover mainnav-shortcut"><div class="arrow"></div><div class="popover-content"></div>'
    })
  });

  /*******************
   * Sidebar collapse
   *******************/
  $('.toggle-btn, .sidebar-v2 .sidebar-menu .treeview a').on("click", function(){
    if($('body .wrapper').hasClass('sidebar-collapse')) {
      if($(window).height() >= $('.main-wrapper').height()) {
        $('body .wrapper .sidebar-v2').css({"top": "-160px", "z-index": 10});
        $('body .wrapper .footer').css({"z-index": 1});
      }
      if($('body .wrapper').hasClass('boxed-layout')) {
        $('body .wrapper .sidebar-v2').css({"top": "-160px", "z-index": 10});
        $('body .wrapper .footer').css({"z-index": 1});
      }
      $('body .wrapper .left-sidebar-v2').css("overflow","visible");
      $('body .wrapper .sidebar-v2').find(".slimScrollDiv").css("overflow","visible");
    };
  });
  $('.sidebar-v2 .left-sidebar-v2').slimScroll().bind('slimscroll', function(e, pos) {
    $('body .wrapper .sidebar-v2').css("top","50px");
    $('body .wrapper .left-sidebar-v2').css("overflow","hidden");
    $('body .wrapper .sidebar-v2').find(".slimScrollDiv").css("overflow","hidden");
  });
});

/*********************************
 * Left sidebar (sidebar-v2) menu
 *********************************/
$.pushMenu = {
  activate: function (toggleBtn) {

    /************************
     * Enable sidebar toggle
     ************************/
    $(toggleBtn).on('click', function (e) {
      e.preventDefault();

      /***************************
       * Enable sidebar push menu
       ***************************/
      if($(window).width() > (767)) {
        if($("body .wrapper").hasClass('sidebar-collapse')) {
          $("body .wrapper").removeClass('sidebar-collapse').trigger('expanded.pushMenu');
        } else {
          $("body .wrapper").addClass('sidebar-collapse').trigger('collapsed.pushMenu');
        }
      } else {

        /* Handle sidebar push menu for small screens */
        if($("body .wrapper").hasClass('sidebar-open')) {
          $("body .wrapper").removeClass('sidebar-open').removeClass('sidebar-collapse').trigger('collapsed.pushMenu');
        } else {
          $("body .wrapper").addClass('sidebar-open').trigger('expanded.pushMenu');
        }
      }
      if($('body .wrapper').hasClass('fixed') && $('body .wrapper').hasClass('sidebar-mini') && $('body .wrapper').hasClass('sidebar-collapse')) {
        $('body .wrapper .left-sidebar-v2').css("overflow","visible");
        $('body .wrapper .sidebar-v2').find(".slimScrollDiv").css("overflow","visible");
      }
      if($('body .wrapper').hasClass('only-sidebar')) {
        $('body .wrapper .sidebar').css("overflow","visible");
        $('body .wrapper .sidebar-v2').find(".slimScrollDiv").css("overflow","visible");
      };

      if($('.wrapper').hasClass('sidebar-collapse')) {
        $('.logo').addClass('hide');
        $('.collapsed_sidebar_checkbox').parent().addClass('checked');
      } else {
        $('.logo').removeClass('hide');
        $('.collapsed_sidebar_checkbox').parent().removeClass('checked');
      }

    });
    $('body .wrapper .content-wrapper').on("click", function(){

      /* Enable hide menu when clicking on the content-wrapper on small screens */
      if($(window).width() <= (767) && $("body .wrapper").hasClass("sidebar-open")) {
        $("body .wrapper").removeClass('sidebar-open');
      }
    });
  }
};

/************************
 * Treeview menu/submenu
 ************************/
$.tree = function (menu) {
  var _this = this;
  var animationSpeed = 200;
  $(document).on('click', menu + ' li a', function (e) {

    /* Get the clicked link and the next element */
    var $this = $(this),
    checkElement = $this.next();

    /* Check if the next element is a menu and is visible */
    if((checkElement.is('.treeview-menu')) && (checkElement.is(':visible'))) {

      /* Close the menu */
      checkElement.slideUp(animationSpeed, function () {
        checkElement.removeClass('menu-open');

        /* Fix the layout in case the sidebar stretches over the height of the window */
        /* _this.layout.fix(); */
      });
      checkElement.parent("li").removeClass("active");
    } else if((checkElement.is('.treeview-menu')) && (!checkElement.is(':visible'))) {

      /* If the menu is not visible get the parent menu */
      var parent = $this.parents('ul').first(),
        ul = parent.find('ul:visible').slideUp(animationSpeed);
      ul.removeClass('menu-open');
      var parent_li = $this.parent("li");
      checkElement.slideDown(animationSpeed, function () {
        checkElement.addClass('menu-open');
      });
      parent.find('li.active').removeClass('active');
      parent_li.addClass('active');
    }

    /* if this isn't a link, prevent the page from being redirected */
    if(checkElement.is('.treeview-menu')) {
      e.preventDefault();
    }
  });
};
/****************************
 * Activate sidenav treemenu 
 ****************************/
$.tree('.sidebar-v2 .left-sidebar-v2');
$.pushMenu.activate("[data-toggle='toggle-sidebar-menu']");