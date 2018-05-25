'use strict';
/*****************************************************
 ** main-dashboard.js
 ** 
 ** Javascript Configs for Main Dashboard.
 ** Developer: Ranpariya - The Development Lab - India
 *****************************************************/
$(document).ready(function() {
  setTimeout(function(){

    /******************
     * Remove Section
     ******************/
    $('.remove-section .fa-trash-o').on("click", function(){
      $(this).parents(".section").parent().remove();
    });

    /*******
     * Knob
     *******/
    $(".knob-simple").knob();

    /**********
     * Intro Js
     **********/
    if($(window).outerWidth() > 767) {
      introJs().setOption("showStepNumbers", false).start();
    }

    /********
     * Toastr
     ********/
    Command: toastr["success"]("Welcome To Ranpariya Theme")

    toastr.options = {
      "closeButton": false,
      "debug": true,
      "progressBar": false,
      "positionClass": "toast-top-right",
      "preventDuplicates": false,
      "onclick": null,
      "showDuration": "400",
      "hideDuration": "1000",
      "timeOut": "7000",
      "extendedTimeOut": "1000",
      "showEasing": "swing",
      "hideEasing": "linear",
      "showMethod": "fadeIn",
      "hideMethod": "fadeOut"
    }

    /**************
     * Peity Charts
     **************/
    $("span.bar").peity("bar", {fill: ["#ccc", "#ED174C"]})
    $("span.pie").peity("pie", {fill: ["#ccc", "#ED174C"]})
    $("span.donut").peity("donut", {fill: ["#ccc", "#ED174C"]})

    /************
     * Todo lists
     ************/
    $('#square input').iCheck({
      checkboxClass: 'icheckbox_square-blue',
      radioClass: 'iradio_square-blue'
    }).on('ifChanged', function(e) {
      var isChecked = e.currentTarget.checked;
      if(isChecked == true) {
        $(this).parent().parent().addClass('active');
      } else {
        $(this).parent().parent().removeClass('active');
      }
    });

    /*********************
     * Active Peity Charts
     *********************/
    var activevisitors = $(".active-visitors").peity("bar", {fill: ["#ED174C", "#6E6E6E"], width: '100%', height: 50, })

    setInterval(function() {
      var random = Math.round(Math.random() * 10)
      var values = activevisitors.text().split(",")
      values.shift()
      values.push(random)

      activevisitors
        .text(values.join(","))
        .change()
    }, 1000);

    /***********
     * AM Charts
     ***********/
    var chart = AmCharts.makeChart("combineChart", {
      "type": "serial",
      "theme": "light",
      "dataDateFormat": "YYYY-MM-DD",
      "precision": 2,
      "valueAxes": [{
        "id": "v1",
        "axisAlpha": 0,
        "position": "left",
        "autoGridCount": false,
        "gridThickness": 0,
        "labelFunction": function(value) {
          return "$" + Math.round(value) + "M";
          }
        }, {
        "id": "v2",
        "axisAlpha": 0,
        "gridAlpha": 0,
        "position": "right",
        "autoGridCount": false,
        "gridThickness": 0,
      }],
      "graphs": [{
        "id": "g3",
        "valueAxis": "v1",
        "lineColor": "#EB849C",
        "fillColors": "#EB849C",
        "fillAlphas": 1,
        "type": "column",
        "title": "Today Sales",
        "valueField": "sales2",
        "clustered": false,
        "columnWidth": 0.5,
        "legendValueText": "$[[value]]M",
        "balloonText": "[[title]]<br /><b style='font-size: 130%'>$[[value]]M</b>"
      }, {
        "id": "g4",
        "valueAxis": "v1",
        "lineColor": "#ED174C",
        "fillColors": "#ED174C",
        "fillAlphas": 1,
        "type": "column",
        "title": "Target Sales",
        "valueField": "sales1",
        "clustered": false,
        "columnWidth": 0.3,
        "legendValueText": "$[[value]]M",
        "balloonText": "[[title]]<br /><b style='font-size: 130%'>$[[value]]M</b>"
      }, {
        "id": "g1",
        "valueAxis": "v2",
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "bulletColor": "#6E6E6E",
        "bulletSize": 5,
        "hideBulletsCount": 50,
        "lineThickness": 2,
        "lineColor": "#6E6E6E",
        "type": "smoothedLine",
        "title": "Market Days",
        "useLineColorForBulletBorder": true,
        "valueField": "market1",
        "balloonText": "[[title]]<br /><b style='font-size: 130%'>[[value]]</b>"
      }, {
        "id": "g2",
        "valueAxis": "v2",
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "bulletColor": "#1e1e1e",
        "bulletSize": 5,
        "hideBulletsCount": 50,
        "lineThickness": 2,
        "lineColor": "#1e1e1e",
        "type": "smoothedLine",
        "dashLength": 5,
        "title": "Market Days ALL",
        "useLineColorForBulletBorder": true,
        "valueField": "market2",
        "balloonText": "[[title]]<br /><b style='font-size: 130%'>[[value]]</b>"
      }],
      "chartScrollbar": {
        enabled: false
      },
      "chartCursor": {
        "pan": true,
        "valueLineEnabled": true,
        "valueLineBalloonEnabled": true,
        "cursorAlpha": 0,
        "valueLineAlpha": 0.2
      },
      "categoryField": "date",
        "categoryAxis": {
        "parseDates": true,
        "dashLength": 1,
        "minorGridEnabled": false,
        "gridThickness": 0
      },
      "legend": {
        "enabled": false,
        "useGraphSettings": true,
        "position": "top"
      },
      "balloon": {
        "borderThickness": 1,
        "shadowAlpha": 0
      },
      "export": {
        "enabled": true
      },
      "dataProvider": [{
        "date": "2017-10-01",
        "market1": 71,
        "market2": 75,
        "sales1": 5,
        "sales2": 8
      }, {
        "date": "2017-10-02",
        "market1": 74,
        "market2": 78,
        "sales1": 4,
        "sales2": 6
      }, {
        "date": "2017-10-03",
        "market1": 78,
        "market2": 88,
        "sales1": 5,
        "sales2": 2
      }, {
        "date": "2017-10-04",
        "market1": 85,
        "market2": 89,
        "sales1": 8,
        "sales2": 9
      }, {
        "date": "2017-10-05",
        "market1": 82,
        "market2": 89,
        "sales1": 9,
        "sales2": 6
      }, {
        "date": "2017-10-06",
        "market1": 83,
        "market2": 85,
        "sales1": 3,
        "sales2": 5
      }, {
        "date": "2017-10-07",
        "market1": 88,
        "market2": 92,
        "sales1": 5,
        "sales2": 7
      }, {
        "date": "2017-10-08",
        "market1": 85,
        "market2": 90,
        "sales1": 7,
        "sales2": 6
      }, {
        "date": "2017-10-09",
        "market1": 85,
        "market2": 91,
        "sales1": 9,
        "sales2": 5
      }, {
        "date": "2017-10-10",
        "market1": 80,
        "market2": 84,
        "sales1": 5,
        "sales2": 8
      }, {
        "date": "2017-10-11",
        "market1": 87,
        "market2": 92,
        "sales1": 4,
        "sales2": 8
      }, {
        "date": "2017-10-12",
        "market1": 84,
        "market2": 87,
        "sales1": 3,
        "sales2": 4
      }, {
        "date": "2017-10-13",
        "market1": 83,
        "market2": 88,
        "sales1": 5,
        "sales2": 7
      }, {
        "date": "2017-10-14",
        "market1": 84,
        "market2": 87,
        "sales1": 5,
        "sales2": 8
      }, {
        "date": "2017-10-15",
        "market1": 81,
        "market2": 85,
        "sales1": 4,
        "sales2": 7
      }]
    });
    
    /************
     * Sale Chart
     ************/
    var data = [
      { y: '2011', a: 1010, b: 705 },
      { y: '2012', a: 1223, b: 880 },
      { y: '2013', a: 1974, b: 667 },
      { y: '2014', a: 798,  b: 316 },
      { y: '2015', a: 1489,  b: 369 },
      { y: '2016', a: 1334,  b: 1125 },
      { y: '2017', a: 1590,  b: 875}
    ],
    config = {
      lineColors: ['#e5063e', '#1e1e1e'],
      lineWidth: 1,
      pointSize: 2,
      fillOpacity: 1,
      data: data,
      xkey: 'y',
      ykeys: ['a', 'b'],
      labels: ['Total Visitors', 'Active Visitors'],
      hideHover: 'auto',
      behaveLikeLine: true,
      resize: true,
    };

    config.element = 'saleChart';
    Morris.Area(config);

    google.charts.load('current', {'packages':['corechart']});

    google.charts.setOnLoadCallback(drawPieChart);

    function drawPieChart() {

      var pieData = google.visualization.arrayToDataTable([
          ['Year', 'Sale'],
          ['2017',  12300],
          ['2016',  10150],
          ['2015',  9120],
          ['2014',  8140]
        ]),
        pieOptions = {
          is3D: true,
          legend: 'none',
          slices: [{color: '#ED174C'}, {color: '#6E6E6E'}, {color: '#474242'}, {color: '#1e1e1e'}]
        },
        chart = new google.visualization.PieChart(document.getElementById('pieChart'));

      chart.draw(pieData, pieOptions);
    }

    var pieResize;

    $(window).resize(function(e) {
      clearTimeout(pieResize);
      pieResize = setTimeout(drawPieChart, 300);
    });

    /*****************
     * Sparkline Chart
     *****************/
    var sparklineCharts = function(){
      $('.sparkLine2').sparkline([ 3,9,6,5,9,7,3,5,2,5,3,9,6 ], {type: 'line', width: '100%',height: '50',lineColor: '#ED174C', tooltipChartTitle: "Selling", fillColor: "transparent"} );
    };
    var sparkResize;

    $(window).resize(function(e) {
      clearTimeout(sparkResize);
      sparkResize = setTimeout(sparklineCharts, 100);
    });

    sparklineCharts();
  },1000);
});