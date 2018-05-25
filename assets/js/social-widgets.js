'use strict';
/*****************************************************
 ** social-widgets.js
 ** 
 ** Javascript for Social Widgets.
 ** Developer: Ranpariya - The Development Lab - India
 *****************************************************/
$(document).ready(function() {

  /*****************
   * Social widgets
   *****************/
  $(".social-widgets .widgets-status-update").each(function(i,el) {
    var $el = $(el),
      $nav = $el.find('.widgets-nav a'),
      $status_list = $el.find('.widgets-body li'),
      index = $status_list.filter('.active').index(),
      auto_switch = 1,
      as_interval = 0;
    
    if(auto_switch > 0) {
      as_interval = setInterval(function() {
        goTo(1);
      },auto_switch * 2500);
      $el.hover(function() {
        window.clearInterval(as_interval);
      },function() {
        as_interval = setInterval(function() {
          goTo(1);
        },auto_switch*2500);
      });
    }
    function goTo(plus_one) {
      index = (index + plus_one) % $status_list.length;
      if(index < 0)
        index = $status_list.length-1;
      var $to_hide = $status_list.filter('.active'),
        $to_show = $status_list.eq(index);
        $to_hide.removeClass('active');
        $to_show.addClass('active').fadeTo(0,0).fadeTo(320,1);
    }
    $nav.on('click',function(ev) {
      ev.preventDefault();
      var plus_one = $(this).hasClass('status-prev')?-1:1;
      goTo(plus_one);
    });
  });

  /***************************
   * Percentage social widgets
   ***************************/
  $(".social-widgets [data-from][data-to]").each(function(i,el) {
    var $el = $(el),
      sm = scrollMonitor.create(el);
      sm.fullyEnterViewport(function() {
        var opts = {
          useEasing: true,
          useGrouping: true,
          separator: ',',
          decimal: '.',
          prefix: $el.data('prefix'),
          suffix: $el.data('suffix'),
        },
        $count = $el.find('.num'),
        from = $el.data('from'),
        to = $el.data('to'),
        duration = $el.data('duration'),
        delay = 1,
        decimals = new String(to).match(/\.([0-9]+)/)?new String(to).match(/\.([0-9]+)$/)[1].length:0,
        counter = new CountUp($count.get(0),from,to,decimals,duration,opts);
        setTimeout(function() {
          counter.start();
        },delay*1000);
      sm.destroy();
    });
  });

  /***************************
   * Progress social widgets
   ***************************/
  $(".social-widgets [data-fill-from][data-fill-to]").each(function(i,el) {
    var $el = $(el),
      sm = scrollMonitor.create(el);
      sm.fullyEnterViewport(function() {
        var fill = {
          current: null,
          from: $el.data('fill-from'),
          to: $el.data('fill-to'),
          property: $el.data('fill-property'),
          unit: $el.data('fill-unit')
        },
        opts = {
          current: fill.to,
          onUpdate:function() {
            $el.css(fill.property,fill.current+fill.unit);
          },delay: $el.data('delay'),
        },easing = $el.data('fill-easing'),
        duration = $el.data('fill-duration');
        if(easing) {
          opts.ease= Sine.easeOut;
        }
      fill.current = fill.from;
      TweenMax.to(fill,duration,opts);
      sm.destroy();
    });
  });
});