'use strict';
/*****************************************************
 ** morris-config.js
 ** 
 ** Javascript for Morris Chart Config.
 ** Developer: Ranpariya - The Development Lab - India
 *****************************************************/
$(document).ready(function() {
  setTimeout(function(){

    /************
     * Chart Data
     ************/
    var data = [
        { y: '2013', a: 100, b: 75 },
        { y: '2014', a: 75,  b: 50 },
        { y: '2015', a: 50,  b: 70 },
        { y: '2016', a: 75,  b: 25 },
        { y: '2017', a: 80,  b: 75}
      ],
      config = {
        data: data,
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Total Income', 'Total Outcome'],
        hideHover: 'auto',
        behaveLikeLine: true,
        resize: true,
      };

    /************
     * Line Chart
     ************/
    config.element = 'lineChart';
    Morris.Line(config);

    /************
     * Area Chart
     ************/
    config.element = 'areaChart';
    Morris.Area(config);

    /************
     * Bar Chart
     ************/
    config.element = 'barChart';
    Morris.Bar(config);

    /*************
     * Donut Chart
     *************/
    Morris.Donut({
      element: 'donutChart',
      data: [
        {label: "2013", value: 15},
        {label: "2014", value: 10},
        {label: "2015", value: 15},
        {label: "2016", value: 35},
        {label: "2017", value: 25}
      ]
    });
  }, 1000);
});