'use strict';
/*****************************************************
  barcode.js
 ** 
 ** Javascript for Barcode Generator.
 ** Developer: Ranpariya - The Development Lab - India
 *******************************************************/
$(document).ready(function () {

  /*******************
   * Square Icheckbox
   *******************/
  $('.square input').iCheck({
    checkboxClass: 'icheckbox_square-blue',
    radioClass: 'iradio_square-blue'
  });

  /******************
   * Generate Barcode
   ******************/
  $("input[type='button']").on("click", function(){
    generateBarcode();
  });
  function generateBarcode() {
    var value = $("#barcodeValue").val(),
      btype = $("input[name=btype]:checked").val(),
      renderer = $("input[name=renderer]:checked").val(),
      quietZone = false;
    if($("#quietzone").is(':checked') || $("#quietzone").attr('checked')) {
      quietZone = true;
    }
    var settings = {
      output: renderer,
      bgColor: $("#bgColor").val(),
      color: $("#color").val(),
      barWidth: $("#barWidth").val(),
      barHeight: $("#barHeight").val(),
      moduleSize: $("#moduleSize").val(),
      posX: $("#posX").val(),
      posY: $("#posY").val(),
      addQuietZone: $("#quietZoneSize").val()
    };
    if($("#rectangular").is(':checked') || $("#rectangular").attr('checked')) {
      value = {
        code: value,
        rect: true
      };
    }
    if(renderer == 'canvas') {
      clearCanvas();
      $("#barcodeTarget").hide();
      $("#canvasTarget").show().barcode(value, btype, settings);
    }
    else {
      $("#canvasTarget").hide();
      $("#barcodeTarget").html("").show().barcode(value, btype, settings);
    }
  }
  function clearCanvas() {
    var canvas = $('#canvasTarget').get(0),
      ctx = canvas.getContext('2d');
    ctx.lineWidth = 1;
    ctx.lineCap = 'butt';
    ctx.fillStyle = '#FFFFFF';
    ctx.strokeStyle = '#000000';
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeRect(0, 0, canvas.width, canvas.height);
  }

  /***********************
   * Datamatrix and Canvas
   ***********************/
  function showConfig1D() {
    $('.config .barcode1D').show();
    $('.config .barcode2D').hide();
  }
  function showConfig2D() {
    $('.config .barcode1D').hide();
    $('.config .barcode2D').show();
  } 
  $(function () {
    $('input[name=btype]').on("click", function(){
      if($(this).attr('id') == 'datamatrix') showConfig2D();
      else showConfig1D();
    });
    $('input[name=renderer]').on("click", function(){
      if($(this).attr('id') == 'canvas') $('#miscCanvas').show();
      else $('#miscCanvas').hide();
    });
    generateBarcode();
  });

  /**************
   * Color Picker
   **************/
  $('.cp1').colorpicker();
});