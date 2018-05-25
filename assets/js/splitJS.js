'use strict';
/*******************************************************
 ** splitjs.js
 ** 
 ** Javascript Config for Split JS.
 ** Developer: Ranpariya - The Development Lab - India
 *******************************************************/
$(document).ready(function() {

  /*************************
   * Split with two elements
   *************************/
  Split(['#split-one', '#split-two'], {
    sizes: [70, 30]
  });

  /***************************
   * Split with three elements
   ***************************/
  Split(['#split-three', '#split-four', '#split-five'], {
    sizes: [33, 33, 33]
  });

  /****************************************
   * Nested splits, horizontal and vertical
   ****************************************/
  Split(['#split-six', '#split-seven']);

  Split(['#split-eight', '#split-nine'], {
    direction: 'vertical'
  });

  /******************************
   * Custom Split through methods
   ******************************/
  var instance = Split(['#split-ten', '#split-eleven', '#split-twelve'], {
    sizes: [50, 25, 25]
  });

  /****************
   * Set Split size
   ****************/
  $('#set-size-split').on("click", function(){
    instance.setSizes([100 / 3, 100 / 3, 100 / 3]);
  });

  /****************
   * Get Split size
   ****************/
  $('#get-size-split').on("click", function(){
    alert("Split Area Size :- "+instance.getSizes());
  });

  /**********************
   * Collapse First Split
   **********************/
  $('#collapse-first-split').on("click", function(){
    instance.collapse(0);
  });

  /***********************
   * Collapse Second Split
   ***********************/
  $('#collapse-second-split').on("click", function(){
    instance.collapse(1);
  });

  /**********************
   * Collapse Third Split
   **********************/
  $('#collapse-third-split').on("click", function(){
    instance.collapse(2);
  });

  /**********************
   * Collapse Reset Split
   **********************/
  $('#reset-split').on("click", function(){
    instance.setSizes([50, 25, 25])
  });
});