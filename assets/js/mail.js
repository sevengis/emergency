'use strict';
/*****************************************************
 ** mail.js
 ** 
 ** Javascript for Mail Page Config.
 ** Developer: Ranpariya - The Development Lab - India
 *****************************************************/
$(document).ready(function() {

  /**************
   * Summer note
   **************/
  $('#mail-editor').summernote();

  /**************************
   * Scroll To Bottom (Inbox)
   **************************/
  $('.scrollToBottom').on("click", function(){
    $('html, body').animate({ scrollTop: $(document).height() }, 800);
    return false;
  });

  /*********************************
   * Valid email config and Dropdown
   *********************************/
  var REGEX_EMAIL = '([a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@' +
            '(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)';

  $('#toEmail, #ccEmail ,#bccEmail').selectize({
    plugins: ['remove_button'],
    placeholder: 'Enter E-Mail',
    persist: false,
    maxItems: null,
    valueField: 'email',
    labelField: 'name',
    searchField: ['name', 'email'],

    /*************
     * Email list
     *************/
    options: [
      {email: 'test@gmail.com', name: 'Gmail', image: 'images/receiver.png'},
      {email: 'test@yahoo.com', name: 'Yahoo', image: ''},
      {email: 'testoutlook.com', name: 'Outlook', image: 'images/sender.png'}
    ],
    render: {
      item: function(item, escape) {
        return '<div>' +
          (item.email ? '<span class="email">' + escape(item.email) + '</span>' : '') +
        '</div>';
      },
      option: function(item, escape) {
        var label = item.name || item.email,
          caption = item.name ? item.email : null,
          image = item.image ? '<img src="' + item.image +'" style="height:100%;width:100%;" >' : '';
        return '<div class="email-list">' +
          '<div class="icon">' + image + '</div>' +
          '<div class="label">' + escape(label) + '</div>' +
          (caption ? '<div class="caption">' + escape(caption) + '</div>' : '') +
          '</div>';
      }
    },
    createFilter: function(input) {
      var match, regex;

      /****************
       * Match by email
       ****************/
      regex = new RegExp('^' + REGEX_EMAIL + '$', 'i');
      match = input.match(regex);
      if(match) return !this.options.hasOwnProperty(match[0]);

      /*********************
       * Match email by name
       *********************/
      regex = new RegExp('^([^<]*)\<' + REGEX_EMAIL + '\>$', 'i');
      match = input.match(regex);
      if(match) return !this.options.hasOwnProperty(match[2]);

      return false;
    },
    create: function(input) {
      if((new RegExp('^' + REGEX_EMAIL + '$', 'i')).test(input)) {
        return {email: input};
      }
      var match = input.match(new RegExp('^([^<]*)\<' + REGEX_EMAIL + '\>$', 'i'));
      if(match) {
        return {
          email : match[2],
          name  : $.trim(match[1])
        };
      }
      return false;
    }
  });

  /**************
   * Toggle Tools
   **************/
  $('#mail-tool').on("click", function(){
    $(".note-toolbar.panel-heading").toggleClass('close');
  });

  /********************
   * Select Text Editor
   ********************/
  $('.compose-message .message .heading').on("click", function(){
    $(".note-editable").focus();
  });

  /******************
   * Email CC and BCC
   ******************/
  var isCc = true,
    isBcc = true;
  $('#isCcShow').on("click", function(){
    $("#ccEmail").parents(".mail-option").css("display", "block");
    if(isCc) {
      isCc = false;
    }
  });

  $('#isBccShow').on("click", function(){
    $("#bccEmail").parents(".mail-option").css("display", "block");
    if(isBcc) {
      isBcc = false;
    }
  });

  /******************
   * Editor Scrollbar
   ******************/
  $('#mail-editor-scroll').mCustomScrollbar({
    autoHideScrollbar: true,
    mouseWheelPixels: 100,
    scrollInertia: 550,
    theme: "minimal-dark",
    axis: 'y'
  });

  /***********************
   * Slide compose mail UI
   ***********************/
  var composeMailWidth = null;
  function slideComposeMail(isOpen) {
    composeMailWidth = $(".mail .compose-block").width() + 50;
    if(isOpen) {
      composeMailWidth = 0;
    }
    $(".mail .compose-block").animate({ left: composeMailWidth}, 300, function() {
      if(!isOpen) {
        $("#inbox-block").show();
        $(".mail .compose-block").hide();
      }
    });
  }
  $(".mail .compose-block").hide();
  slideComposeMail(false);
  $('#compose-mail-open').on("click", function(){
    $(".mail .nav-pills-menu li").removeClass("active-pills");
    $("#inbox-block").hide(0, function() {
      $(".mail .compose-block").show();
      slideComposeMail(true);
    });
  });
  $('.compose-mail-close').on("click", function(){
    slideComposeMail(false);
  });

  /**************************
   * Select multiple checkbox
   **************************/
  $('.text-yellow').on("click", function(){
    $(this).toggleClass("fa-star-o").toggleClass("fa-star");
  });

  $('.checkbox-toggle').on("click", function(){
    if($(this).find('i').hasClass('fa fa-square-o')) {
      $(this).find('i').removeClass('fa fa-square-o');
      $(this).find('i').addClass('fa fa-check-square-o');
      $('.square .icheckbox_square-blue').addClass('checked');
    } else {
      $(this).find('i').removeClass('fa fa-check-square-o');
      $(this).find('i').addClass('fa fa-square-o');
      $('.square .icheckbox_square-blue').removeClass('checked');
    }
  });

  /******************
   * Square icheckbox
   ******************/
  $('.square input').iCheck({
    checkboxClass: 'icheckbox_square-blue',
    radioClass: 'iradio_square-blue'
  });
});