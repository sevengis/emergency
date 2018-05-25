'use strict';
/*****************************************************
 ** form-wizard.js
 ** 
 ** Javascript Config for jQuery Form Wizard.
 ** Developer: Ranpariya - The Development Lab - India
 *****************************************************/
$(document).ready(function(){

  /***************
   * Basic Example
   ***************/
  $("#form-wizard-example-basic").steps({
    headerTag: "h3",
    bodyTag: "div",
    transitionEffect: "slideLeft",
    autoFocus: true
  });

  /******************************
   * Dynamic Manipulation Example
   ******************************/
  $("#form-wizard-example-manipulation").steps({
    headerTag: "h3",
    bodyTag: "div",
    enableAllSteps: true,
    enablePagination: false
  });

  /************************
   * Vertical Steps Example
   ************************/
  $("#form-wizard-example-vertical").steps({
    headerTag: "h3",
    bodyTag: "div",
    transitionEffect: "slideLeft",
    stepsOrientation: "vertical"
  });

  /*******************************
   * Async Content Loading Example
   *******************************/
  $("#form-wizard-example-async").steps({
    headerTag: "h3",
    bodyTag: "div",
    transitionEffect: "slide"
  });

  /********************
   * Basic Form Example
   ********************/
  var form = $("#form-wizard-basic-form-example");
  form.validate({
    errorPlacement: function errorPlacement(error, element) { element.before(error); },
    rules: {
      confirm: {
        equalTo: "#password"
      }
    }
  });
  form.children("div").steps({
    headerTag: "h3",
    bodyTag: "div",
    transitionEffect: "slideLeft",
    onStepChanging: function (event, currentIndex, newIndex)
    {
      form.validate().settings.ignore = ":disabled,:hidden";
      return form.valid();
    },
    onFinishing: function (event, currentIndex)
    {
      form.validate().settings.ignore = ":disabled";
      return form.valid();
    },
    onFinished: function (event, currentIndex)
    {
      alert("Submitted!");
    }
  });
});