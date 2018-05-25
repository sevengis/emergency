'use strict';
/******************************************************
 ** sales-dashboard.js
 ** 
 ** Javascript Config for Sales Dashboard.
 ** Developer: Ranpariya - The Development Lab - India
 ******************************************************/
$(document).ready(function() {
  setTimeout(function(){

    /*****************
     * Remove Section
     *****************/
    $('.remove-section .fa-trash-o').on("click", function(){
      $(this).parents(".section").parent().remove();
    });

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

    /*****************************
     * AM Chart(Sales Performance)
     *****************************/
    var salesData = [
      {
        "date": "01",
        "sales": 350,
        "in-store": 40,
        "orders": 408
      },
      {
        "date": "02",
        "sales": 450,
        "in-store": 588,
        "orders": 482
      },
      {
        "date": "03",
        "sales": 890,
        "in-store": 422,
        "orders": 200
      },
      {
        "date": "04",
        "sales": 500,
        "in-store": 35,
        "orders": 379
      },
      {
        "date": "05",
        "sales": 980,
        "in-store": 258,
        "orders": 501
      },
      {
        "date": "06",
        "sales": 450,
        "in-store": 304,
        "orders": 900
      },
      {
        "date": "07",
        "sales": 650,
        "in-store": 94,
        "orders": 405
      },
      {
        "date": "08",
        "sales": 400,
        "in-store": 900,
        "orders": 309
      },
      {
        "date": "09",
        "sales": 900,
        "in-store": 32,
        "orders": 287
      },
      {
        "date": "10",
        "sales": 349,
        "in-store": 349,
        "orders": 485
      },
      {
        "date": "11",
        "sales": 603,
        "in-store": 91,
        "orders": 890
      },
      {
        "date": "12",
        "sales": 200,
        "in-store": 300,
        "orders": 500
      },
      {
        "date": "13",
        "sales": 500,
        "in-store": 100,
        "orders": 301
      },
      {
        "date": "14",
        "sales": 900,
        "in-store": 974,
        "orders": 810
      },
      {
        "date": "15",
        "sales": 300,
        "orders": 670,
        "in-store": 407,
        "bulletClass": "lastBullet"
      }
    ];
    var chart = AmCharts.makeChart( "sales-performance", {
      "type": "serial",
      "theme": "light",
      "dataProvider": salesData,
      "addClassNames": true,
      "startDuration": 1,
      "marginLeft": 0,
      "categoryField": "date",
      "categoryAxis": {
        "gridCount": 50,
        "axisAlpha":0,
        "gridAlpha":0,
        "gridColor": "#FFFFFF",
        "axisColor": "#555555"
      },
      'allLabels': false,
      "valueAxes": [
        {
          "id": "a1",
          "gridAlpha": 0,
          "axisAlpha": 0
        },
        {
          "id": "a2",
          "position": "right",
          "gridAlpha": 0,
          "axisAlpha": 0,
          "labelsEnabled": false
        },
        {
          "id": "a3",
          "position": "right",
          "gridAlpha": 0,
          "axisAlpha": 0
        }
      ],
      "graphs": [
        {
          "id": "g1",
          "valueField": "sales",
          "type": "column",
          "fillAlphas": 0.9,
          "valueAxis": "a1",
          "balloonText": "Sales : $ [[value]]",
          "lineColor": "#ccc",
          "alphaField": "alpha"
        },
        {
          "id": "g2",
          "valueField": "in-store",
          "classNameField": "bulletClass",
          "type": "line",
          "valueAxis": "a2",
          "balloonText": "In Store : $ [[value]]",
          "lineColor": "#ED174C",
          "lineThickness": 1,
          "bullet": "round",
          "bulletBorderAlpha": 1,
          "bulletColor": "#726f6f",
          "labelPosition": "right",
          "animationPlayed": true
        },
        {
          "id": "g3",
          "valueField": "orders",
          "type": "line",
          "valueAxis": "a3",
          "balloonText": "Todays's Orders : $ [[value]]",
          "lineColor": "#ff5755",
          "lineThickness": 1,
          "bullet": "square",
          "bulletBorderColor": "#ff5755",
          "bulletBorderThickness": 1,
          "bulletBorderAlpha": 1,
          "dashLengthField": "dashLength",
          "animationPlayed": true
        }
      ]
    });

    $(".sales-performance-knob").knob();
    
    /***********************************
     * Doughnut & Pie (Sales by Country)
     ***********************************/
    var doughnutPieChart = new Chart(document.getElementById("sales-by-country-chart"), {
      "type":"doughnut",
      "data":
        {
          "datasets":[{
            "data":[300,50,100],
            "backgroundColor":["#ED174C","#6E6E6E","#1E1E1E"
          ]}
        ]
      }
    });

    /****************************************
     * Polararea Chart (Sales by Distributes)
     ****************************************/
    var polarAreaChart = document.getElementById("sales-by-distribute-chart").getContext('2d');
    new Chart(polarAreaChart, {
      type: 'polarArea',
      data: {
        datasets: [{
          backgroundColor: ["#F25C81","#474242","#6E6E6E","#565555","#ED174C","#1E1E1E","#cccccc"],
          data: [12, 19, 10, 17, 28, 24, 7]
        }]
      }
    });

    /******************
     * Bar sales chart 
     *****************/
    var salesBar = document.getElementById("sales-bar").getContext('2d');
    new Chart(salesBar, {
      type: 'bar',
      data: {
        labels: ["M", "T", "W", "R", "F", "S", "S"],
        datasets: [{
          label: 'Jan',
          data: [12, 19, 3, 17, 28, 24, 7],
          backgroundColor: "#ED174C"
        }, {
          label: 'Feb',
          data: [30, 29, 5, 5, 20, 3, 10],
          backgroundColor: "#1E1E1E"
        }]
      }
    });


    /********************
     * Product line chart
     *******************/
    var productLineConfig = {
          type: 'line',
          data: {
              labels: ["January", "February", "March", "April", "May", "June", "July"],
              datasets: [{
                  label: "Sales",
                  backgroundColor: '#ED174C',
                  borderColor: '#ED174C',
                  fill: false,
                  data: [12, 19, 3, 17, 28, 24, 7],
              }, {
                  label: "Product",
                  backgroundColor: '#1E1E1E',
                  borderColor: '#1E1E1E',
                  fill: false,
                  data: [7, 2, 8, 30, 18, 12, 5],
              }]
          },
          options: {
              responsive: true
          }
      };

        var donutetextChart = document.getElementById("sales-by-donutetext-chart").getContext("2d");
        new Chart(donutetextChart, productLineConfig);

    /************
     * Area Chart
     ************/
    var rawData1 = [
        [(2017, 1, 1), 37],
        [(2017, 1, 2), 18],
        [(2017, 1, 3), 66],
        [(2017, 1, 4), 19],
        [(2017, 1, 5), 60],
        [(2017, 1, 6), 14],
        [(2017, 1, 7), 44]
      ],
      rawData2 = [
        [(2017, 1, 1), 19],
        [(2017, 1, 2), 23],
        [(2017, 1, 3), 46],
        [(2017, 1, 4), 9],
        [(2017, 1, 5), 89],
        [(2017, 1, 6), 12],
        [(2017, 1, 7), 60]
      ],
      areaDataSet = [
        { label: " Asia", data: rawData1, color: "#2C2B2B", lines: { show: true, fill: 0.8, lineWidth: 0, }, stack: true  },
        { label: " Europe", data: rawData2, color: "#ED174C",lines: { show: true, fill: 0.7, lineWidth: 0, }, stack: true  }
      ],
      areaOptions = {
        series: {
          curvedLines: {
            apply: true,
            active: true,
          },
        },
        legend: {
          show: false,
        },
        grid: {
          show: false,
          hoverable: true,
          borderWidth: 0,
        },
      };

    $(document).ready(function () {
      $.plot($("#flot-area"), areaDataSet, areaOptions);
      $("#flot-area").UseTooltip();
    });

    function year(year) {
      return new Date(2015, 1, 1).getTime();
    }

    var barData = [[0, 11],[1, 15],[2, 25],[3, 24],[4, 13],[5, 18],[6, 22],[7, 15],[8, 10],[9, 24],[10, 13],[11,18],[12,25],[13,19],[14,16],[15,28],[16,20],[17,17],[18,12],[19,23],[20,26]],
      barDataset = [{ label: " Total", data: barData, color: "#ED174C" }],

      options = {
        series: {
          bars: {
            show: true,
            fill: 1
          }
        },
        bars: {
          align: "center",
          barWidth: 0.5
        },
        xaxis: {
          tickLength:0
        },
        yaxis: {
        },
        legend: {
          show: false,
          noColumns: 0,
          labelBoxBorderColor: "#000000",
          position: "nw"
        },
        grid: {
          show: false,
          hoverable: true,
          borderWidth: 0,
        },
        colors: ["#ED174C"]
      };

    $(document).ready(function () {
      $.plot($("#sale-chart"), barDataset, options);
      $("#sale-chart").UseTooltip();
    });

    function gd(year, month, day) {
      return new Date(year, month, day).getTime();
    }

    var previousPoint = null, previousLabel = null;

    /***************
     * Chart Tooltip
     ***************/
    $.fn.UseTooltip = function () {
      $(this).on("plothover", function (event, pos, item) {
        if(item) {
          if((previousLabel != item.series.label) || 
             (previousPoint != item.dataIndex)) {
            previousPoint = item.dataIndex;
            previousLabel = item.series.label;
            $("#tooltip").remove();

            var x = item.datapoint[0],
              y = item.datapoint[1],

              color = item.series.color;

            showTooltip(item.pageX,
                item.pageY,
                color,
                "<strong>" + item.series.label + "</strong><br>"  +
                "<strong>Sales : $ " + $.formatNumber(y, { format: "#,###", locale: "us" }));                
          }
        } else {
          $("#tooltip").remove();
          previousPoint = null;
        }
      });
    };

    function showTooltip(x, y, color, contents) {
      $('<div id="tooltip">' + contents + '</div>').css({
        position: 'absolute',
        display: 'none',
        top: y - 10,
        left: x + 10,
        border: '2px solid ' + color,
        padding: '3px',
        'font-size': '9px',
        'border-radius': '5px',
        'background-color': '#fff',
        'font-family': 'Verdana, Arial, Helvetica, Tahoma, sans-serif',
        opacity: 0.9
      }).appendTo("body").fadeIn(200);
    }

    /*****************
     * Sparkline Chart
     *****************/
    var sparklineCharts = function() {
      $('.sparkLine').sparkline([ 5,3,9,6,5,9,7,3,5,2 ], {type: 'line', width: '100%',height: '50',lineColor: '#ED174C', tooltipChartTitle: "Users", fillColor: "transparent"} );
      $('.sparkLine1').sparkline([ 5,3,2,8,6,9,2,3,5,2 ], {type: 'line', width: '100%',height: '50',lineColor: '#ED174C', tooltipChartTitle: "Orders", fillColor: "transparent"} );
      $('.sparkLine2').sparkline([ 3,9,6,5,9,7,3,5,2,5,3,9,6 ], {type: 'line', width: '100%',height: '50',lineColor: '#ED174C', tooltipChartTitle: "Profit", fillColor: "transparent"} );
      $('.sparkLine3').sparkline([ 5,9,7,3,5,2,7,3,5,2 ], {type: 'line', width: '100%',height: '50',lineColor: '#ED174C', tooltipChartTitle: "Sale", fillColor: "transparent"} );
      $('.todaySale').sparkline([ 1,3,2,4,3,3,5,2 ], {type: 'line', width: '100%',height: '50',lineColor: '#ED174C', tooltipChartTitle: "Total Selling", fillColor: "transparent"} );
    };
    var sparkResize;

    $(window).resize(function(e) {
      clearTimeout(sparkResize);
      sparkResize = setTimeout(sparklineCharts, 500);
    });

    sparklineCharts();

    /**************
     * Google Chart
     **************/  
    google.charts.load('current', {'packages':['corechart']});

    google.charts.setOnLoadCallback(drawPieChart);

    function drawPieChart() {

      var pieData = google.visualization.arrayToDataTable([
        ['Year', 'Sale'],
        ['2017',  300],
        ['2016',  150],
        ['2015',  100]
      ]),
      pieOptions = {
        is3D: true,
        legend: 'none',
        slices: [{color: '#ED174C'}, {color: '#2C2B2B'}, {color: '#6E6E6E'}]
      },
      chart = new google.visualization.PieChart(document.getElementById('pieChart'));
      chart.draw(pieData, pieOptions);
    }

    var pieResize;

    $(window).resize(function(e) {
      clearTimeout(pieResize);
      pieResize = setTimeout(drawPieChart, 300);
    });
  },1000);
});