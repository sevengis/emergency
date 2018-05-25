'use strict';
/*****************************************************
 ** bootstrap-switch-config.js
 ** 
 ** Javascript for BootStrap Switch Configuration.
 ** Developer: Ranpariya - The Development Lab - India
 *****************************************************/
(function () {
  setTimeout(function() {

    /*****************************
     * Initialize Bootstrap Switch
     *****************************/
    $("[name='switch-checkbox'], [name='disabled-checkbox'], #switch-onText, #switch-labelWidth, #switch-onColor ,#switch-handleWidth, #switch-inverse, #switch-size, #switch-indeterminate, #switch-state").bootstrapSwitch();

    /**************************
     * Create or Destroy Switch
     **************************/
    var $cds = $('#createDestroySwitch')
    $('[data-switch-create-destroy]').on("click", function(){
      var isSwitch = $cds.data('bootstrap-switch')
      $cds.bootstrapSwitch((isSwitch ? 'destroy' : null))
      $(this).button((isSwitch ? 'reset' : 'destroy'))
    });

    /**********
     * Get Data
     **********/
    $('[data-switch-get]').on("click", function(){
      var type = $(this).data('switch-get')
      window.alert($('#switch-' + type).bootstrapSwitch(type))
    })

    /**********
     * Set Data
     **********/
    $('[data-switch-set]').on("click", function(){
      var type = $(this).data('switch-set')
      $('#switch-' + type).bootstrapSwitch(type, $(this).data('switch-value'))
    })

    /****************
     * Set Data Value
     ****************/
    $('[data-switch-set-value]').on('input', function (event) {
      event.preventDefault()
      var type = $(this).data('switch-set-value')
      var value = $.trim($(this).val())
      if($(this).data('value') === value) {
        return
      }
      $('#switch-' + type).bootstrapSwitch(type, value)
    })

    /***************
     * Switch Toggle
     ***************/
    $('[data-switch-toggle]').on("click", function(){
      var type = $(this).data('switch-toggle')
      $('#switch-' + type).bootstrapSwitch('toggle' + capitalize(type))
    })
    function capitalize (string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    }
  }, 1500);
})();