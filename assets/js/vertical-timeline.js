'use strict';
/*****************************************************
 ** vertical-timeline.js
 ** 
 ** Javascript Config for Vertical Timeline.
 ** Developer: Ranpariya - The Development Lab - India
 *****************************************************/
$(document).ready(function() {
  setTimeout(function(){

    var $timeline_block = $('.vertical-timeline-block');

    /******************************************************
     * hide timeline blocks which are outside the viewport
     ******************************************************/
    $timeline_block.each(function(){
      if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
        $(this).find('.vertical-timeline-img, .vertical-timeline-content').addClass('is-hidden');
      }
    });

    /********************************************************************
     * on scolling, show/animate timeline blocks when enter the viewport
     ********************************************************************/
    $(window).on('scroll', function(){
      $timeline_block.each(function(){
        if($(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.vertical-timeline-img').hasClass('is-hidden')) {
          $(this).find('.vertical-timeline-img, .vertical-timeline-content').removeClass('is-hidden').addClass('bounce-in');
        }
      });
    });
  }, 1500);
});