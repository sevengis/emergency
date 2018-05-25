'use strict';
/******************************************************
 ** slider.js
 ** 
 ** Javascript for Slider Page.
 ** Developer: Ranpariya - The Development Lab - India
 ******************************************************/
$(document).ready(function() {

  /* Basic Slider */
  $(".basic-simple-slider").ionRangeSlider();
  $(".basic-range-slider").ionRangeSlider({
    type: "double",
    grid: true,
    min: 0,
    max: 1000,
    from: 200,
    to: 800,
    prefix: "$"
  });

  /* Advance  slider */
  $(".advance-slider-1").ionRangeSlider({
    type: "double",
    min: 1000000,
    max: 2000000,
    grid: true,
    force_edges: true
  });
  $(".advance-slider-2").ionRangeSlider({
    type: "double",
    min: 0,
    max: 10000,
    step: 500,
    grid: true,
    grid_snap: true
  });

  /* Range selector */
  $(".range1").slider({
    min: 0, max: 10, value: [0, 10], focus: true 
  });
  $(".range2").slider({});

  /* Horizontal slider */
  $('.horizontal1').slider({
    formatter: function(value) {
      return 'Current value: ' + value;
    }
  });
  $(".horizontal2").slider({
    min  : 0, max  : 10, value: 0, tooltip_position:'bottom'
  });
  $(".horizontal3").slider({
    tooltip: 'always'
  });

  /* Vertical Slider */
  $(".verticalslider1").slider({
    reversed : true
  });
  $(".verticalslider2").slider({
    min  : 0, max  : 10, value: 0, orientation: 'vertical', tooltip_position:'left'
  });

  /* Using tick marks and labels */
  $(".tick1").slider({
    ticks: [0, 100, 200, 300, 400],
    ticks_snap_bounds: 30
  });
  $(".tick2").slider({
    ticks: [0, 100, 200, 300, 400],
    ticks_positions: [0, 30, 60, 70, 90, 100],
    ticks_snap_bounds: 30
  });
  $(".tick3").slider({
    ticks: [0, 1, 2, 3, 4],
    ticks_positions: [0, 30, 60, 70, 90, 100],
    ticks_snap_bounds: 200,
    formatter: function(value) {
    return 'Current value: ' + value;
    },
    ticks_tooltip: true,
    step: 0.01
  });

  /* Auto register and hidden Slider */
  $('#hiddenslider').on('click', function(e) {
    $('#hiddenslider')
      .parent()
      .find(' >.hideslider')
      .toggle()
      .find('input')
      .slider('relayout');
      e.preventDefault();
  });

  /* Destroy slider */
  $("#destroyslider").slider();
  $('#destroySlider').on("click", function(){
    $("#destroyslider").slider('destroy');
  });

  /* Current value slider */
  $("#currentvalueslider").slider();
  $("#currentvalueslider").on("slide", function(slideEvt) {
    $("#SliderVal").text(slideEvt.value);
  });

  /* Enable slider */
  $("#enableslider").slider();
  $('#enableslider-enabled').on("click", function(){
    if(this.checked) {
      $("#enableslider").slider("enable");
    }
    else {
      $("#enableslider").slider("disable");
    }
  });
});