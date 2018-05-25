'use strict';
/******************************************************
 ** jquery-form-validation.js
 ** 
 ** Javascript config for jQuery Form Validation.
 ** Developer: Ranpariya - The Development Lab - India
 ******************************************************/
$(document).ready(function() {

  /*******************
   * Square icheckbox
   *******************/
  $('#square input').iCheck({
    checkboxClass: 'icheckbox_square-blue'
  });

  /*******************
   * Validation Form
   *******************/
  $(".validate-form").validate({
    rules: {
      firstname: "required",
      lastname: "required",
      username: {
        required: true,
        minlength: 5
      },
      password: {
        required: true,
        minlength: 8
      },
      confirm_password: {
        required: true,
        minlength: 8,
        equalTo: "#password"
      },
      email: {
        required: true,
        email: true
      },
      agree: "required"
    },
    messages: {
      firstname: "Please enter your firstname",
      lastname: "Please enter your lastname",
      username: {
        required: "Please enter a username",
        minlength: "Your username must consist of at least 5 characters"
      },
      password: {
        required: "Please provide a password",
        minlength: "Your password must be at least 8 characters long"
      },
      confirm_password: {
        required: "Please provide a password",
        minlength: "Your password must be at least 8 characters long",
        equalTo: "Please enter the same password as above"
      },
      email: "Please enter a valid email address",
      agree: "Please accept our terms and conditions"
    }
  });
});