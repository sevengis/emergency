'use strict';
/*****************************************************
 ** chartist-chart.js
 ** 
 ** Javascript for Chartist Chart Config.
 ** Developer: Ranpariya - The Development Lab - India
 *****************************************************/
$(document).ready(function() {
  setTimeout(function(){

    /************
     * Area Chart
     ************/
    var data = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        series: [
          [7, 5, 6, 7, 5, 10, 3],
          [3, 2, 9, 5, 4, 6, 4],
          [5, 4, 3, 2, 1, 4, 6]
        ]
      },
      chart = new Chartist.Line('.area-chart', data, {
        low: 0,
        showArea: true,
        showPoint: false,
        fullWidth: true,
        height: "320"
      });

    chart.on('draw', function(data) {
      if(data.type === 'line' || data.type === 'area') {
        data.element.animate({
          d: {
            begin: 2000 * data.index,
            dur: 2000,
            from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      }
    });

    /*************
     * Line Chart
     *************/
    var chart = new Chartist.Line('.line-chart', data, {
      low: 0,
      height: "320"
    });

    var seq = 0,
      delays = 80,
      durations = 500;

    chart.on('created', function() {
      seq = 0;
    });

    chart.on('draw', function(data) {
      seq++;

      if(data.type === 'line') {
        data.element.animate({
          opacity: {
          begin: seq * delays + 1000,
          dur: durations,
          from: 0,
          to: 1
        }
      });
      } else if(data.type === 'label' && data.axis === 'x') {
        data.element.animate({
          y: {
            begin: seq * delays,
            dur: durations,
            from: data.y + 100,
            to: data.y,
            easing: 'easeOutQuart'
          }
        });
      } else if(data.type === 'label' && data.axis === 'y') {
        data.element.animate({
          x: {
            begin: seq * delays,
            dur: durations,
            from: data.x - 100,
            to: data.x,
            easing: 'easeOutQuart'
          }
        });
      } else if(data.type === 'point') {
        data.element.animate({
          x1: {
            begin: seq * delays,
            dur: durations,
            from: data.x - 10,
            to: data.x,
            easing: 'easeOutQuart'
          },
          x2: {
            begin: seq * delays,
            dur: durations,
            from: data.x - 10,
            to: data.x,
            easing: 'easeOutQuart'
          },
          opacity: {
            begin: seq * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: 'easeOutQuart'
          }
        });
      } else if(data.type === 'grid') {
        var pos1Animation = {
          begin: seq * delays,
          dur: durations,
          from: data[data.axis.units.pos + '1'] - 30,
          to: data[data.axis.units.pos + '1'],
          easing: 'easeOutQuart'
        };

        var pos2Animation = {
          begin: seq * delays,
          dur: durations,
          from: data[data.axis.units.pos + '2'] - 100,
          to: data[data.axis.units.pos + '2'],
          easing: 'easeOutQuart'
        };

        var animations = {};
        animations[data.axis.units.pos + '1'] = pos1Animation;
        animations[data.axis.units.pos + '2'] = pos2Animation;
        animations['opacity'] = {
          begin: seq * delays,
          dur: durations,
          from: 0,
          to: 1,
          easing: 'easeOutQuart'
        };

        data.element.animate(animations);
      }
    });

    chart.on('created', function() {
      if(window.__exampleAnimateTimeout) {
        clearTimeout(window.__exampleAnimateTimeout);
        window.__exampleAnimateTimeout = null;
      }
      window.__exampleAnimateTimeout = setTimeout(chart.update.bind(chart), 12000);
    });

    /************
     * Bar Chart
     ************/
    new Chartist.Bar('.bar-chart', data, {
      height: "320"
    });

    /****************
     * Stacked Chart
     ****************/
    new Chartist.Bar('.stacked-chart', data, {
      stackBars: true,
      height: "320",
    }).on('draw', function(data) {
      if(data.type === 'bar') {
        data.element.attr({
          style: 'stroke-width: 30px'
        });
      }
    });

    /************
     * Pie Chart
     ************/
    var data = {
      series: [45, 30, 25]
    };

    var sum = function(a, b) { return a + b };

    new Chartist.Pie('.pie-chart', data, {
      labelInterpolationFnc: function(value) {
        return Math.round(value / data.series.reduce(sum) * 100) + '%';
      },
      height: "320"
    });

    /**************
     * Donut Chart
     **************/
    var chart = new Chartist.Pie('.donut-chart', {
      series: [45, 30, 25],
    }, {
      donut: true,
      showLabel: false,
      height: "320"
    });

    chart.on('draw', function(data) {
      if(data.type === 'slice') {
        var pathLength = data.element._node.getTotalLength();

        data.element.attr({
          'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
        });

        var animationDefinition = {
          'stroke-dashoffset': {
            id: 'anim' + data.index,
            dur: 1000,
            from: -pathLength + 'px',
            to:  '0px',
            easing: Chartist.Svg.Easing.easeOutQuint,
            fill: 'freeze'
          }
        };

        if(data.index !== 0) {
          animationDefinition['stroke-dashoffset'].begin = 'anim' + (data.index - 1) + '.end';
        }

        data.element.attr({
          'stroke-dashoffset': -pathLength + 'px'
        });

        data.element.animate(animationDefinition, false);
      }
    });

    chart.on('created', function() {
      if(window.__anim21278907124) {
        clearTimeout(window.__anim21278907124);
        window.__anim21278907124 = null;
      }
      window.__anim21278907124 = setTimeout(chart.update.bind(chart), 10000);
    });

    /*************
     * Gauge Chart
     *************/
    new Chartist.Pie('.gauge-chart', {
      series: [45, 30, 25]
    }, {
      donut: true,
      donutWidth: 60,
      donutSolid: true,
      startAngle: 270,
      total: 200,
      showLabel: true,
      height: "320"
    });

    /*****************
     * BI Polar Chart
     *****************/
    var biPolarData = {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      series: [
        [1, 4, 6, -2, -4, -6, 3]
      ]
    };

    var options = {
      high: 7,
      low: -7,
      height: "320"
    };
    new Chartist.Bar('.bi-polar-chart', biPolarData, options);
  }, 1000);
});