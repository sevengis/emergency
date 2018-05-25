'use strict';
/*****************************************************
 ** sweetmodal.js
 ** 
 ** Javascript for Sweet Modal.
 ** Developer: Ranpariya - The Development Lab - India
 *****************************************************/
$(document).ready(function() {

  /*************
   * Sweet Alert
   *************/
  var variants = {
    'alert': {
      args: [
        'This is a simple alert.'
      ]
    },
    'alert-success': {
      args: [
        {
          content: 'Success icon for Alert Success.',
          icon: $.sweetModal.ICON_SUCCESS
        }
      ]
    },
    'alert-warning': {
      args: [
        {
          content: 'Warning icon for Alert Warning.',
          icon: $.sweetModal.ICON_WARNING,
        }
      ]
    },
    'alert-error-with-buttons': {
      args: [
        {
          content: 'This is an Error Icon.',
          title: 'Error Detail',
          icon: $.sweetModal.ICON_ERROR,
          buttons: [
            {
              label: 'OK',
              classes: 'redB'
            }
          ]
        }
      ]
    },
    'alert-with-title': {
      args: [
        'Titled Alert',
        'This is an alert.'
      ]
    },
    'confirm': {
      fn: $.sweetModal.confirm,
      args: [
        'Are you Confirm please?',
        function() {
          $.sweetModal('Thank you for confirming.');
        }
      ]
    },
    'confirm-with-title': {
      fn: $.sweetModal.confirm,
      args: [
        'Confirm alert message',
        'Are you Confirm?',
        function() {
          $.sweetModal('Thank you for confirming.');
        }, function() {
          $.sweetModal('You are not Confirm. Try again.');
        }
      ]
    },
    'prompt': {
      fn: $.sweetModal.prompt,
      args: [
        'Can I help you?',
        null,
        null,
        function(val) {
          $.sweetModal('You typed: ' + val);
        }
      ]
    },
    'prompt-with-value': {
      fn: $.sweetModal.prompt,
      args: [
        'Can I help you?',
        'Can I?',
        'Just like error solutions',
        function(val) {
          $.sweetModal('You typed: ' + val);
        }
      ]
    },
    'youtube': {
      args: [
        {
          title: 'How to work with Sweet Alert?',
          content: 'https://www.youtube.com/watch?v=bn5RaUVoel4',
          theme: $.sweetModal.THEME_DARK
        }
      ]
    }
  };
  for(var key in variants) {
    if(variants.hasOwnProperty(key)) {
      var variant = variants[key];
      $('#' + key).on('click', { variant: variant }, function(e) {
        var variant = e.data.variant;
        variant.fn = variant.fn || $.sweetModal;
        variant.fn.apply(this, variant.args);
      });
    }
  }
});