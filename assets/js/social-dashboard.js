'use strict';
/*****************************************************
 ** social-dashboard.js
 ** 
 ** Javascript Configs for Social Dashboard.
 ** Developer: Ranpariya - The Development Lab - India
 *****************************************************/
$(document).ready(function() {
  setTimeout(function(){

    /*****************
     * Remove Section
     *****************/
    $('.remove-section .fa-trash-o').on("click", function(){
      $(this).parents(".section").parent().remove();
    });

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

    /**************
     * Users Stats
     **************/
    var chart = AmCharts.makeChart("userStats", {
      "theme": "light",
      "type": "serial",
      "startDuration": 2,
      "dataProvider": [{
        "country": "USA",
        "visits": 2000,
        "color": "#ed174c"
      }, {
        "country": "China",
        "visits": 1882,
        "color": "#ed174c"
      }, {
        "country": "Japan",
        "visits": 1809,
        "color": "#ed174c"
      }, {
        "country": "Germany",
        "visits": 1322,
        "color": "#ed174c"
      }, {
        "country": "UK",
        "visits": 1122,
        "color": "#ed174c"
      }, {
        "country": "France",
        "visits": 1114,
        "color": "#ed174c"
      }, {
        "country": "India",
        "visits": 984,
        "color": "#ed174c"
      }, {
        "country": "Spain",
        "visits": 711,
        "color": "#ed174c"
      }, {
        "country": "Netherlands",
        "visits": 665,
        "color": "#ed174c"
      }, {
        "country": "Russia",
        "visits": 580,
        "color": "#ed174c"
      }, {
        "country": "South Korea",
        "visits": 443,
        "color": "#ed174c"
      }, {
        "country": "Canada",
        "visits": 441,
        "color": "#ed174c"
      }, {
        "country": "Brazil",
        "visits": 395,
        "color": "#ed174c"
      }, {
        "country": "Italy",
        "visits": 386,
        "color": "#ed174c"
      }, {
        "country": "Australia",
        "visits": 384,
        "color": "#ed174c"
      }, {
        "country": "Taiwan",
        "visits": 338,
        "color": "#ed174c"
      }, {
        "country": "Poland",
        "visits": 328,
        "color": "#ed174c"
      }],
      "valueAxes": [{
        "position": "left",
        "axisAlpha":0,
        "gridAlpha":0
      }],
      "graphs": [{
        "balloonText": "[[category]]: <b>[[value]]</b>",
        "fillColorsField": "color",
        "fillAlphas": 1,
        "lineAlpha": 0.1,
        "type": "column",
        "valueField": "visits"
      }],
      "depth3D": 10,
      "angle": 30,
      "chartCursor": {
        "categoryBalloonEnabled": false,
        "cursorAlpha": 0,
        "zoomable": false
      },
      "categoryField": "country",
      "categoryAxis": {
        "gridPosition": "start",
        "axisAlpha":0,
        "gridAlpha":0
      },
      "export": {
        "enabled": true
       }

    });

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
        { label: " Facebook", data: rawData1, color: "#2C2B2B", lines: { show: true, fill: 0.8, lineWidth: 0, }, stack: true  },
        { label: " Twitter", data: rawData2, color: "#ed174c",lines: { show: true, fill: 0.7, lineWidth: 0, }, stack: true  }
      ],
      areaOptions = {
        series: {
          curvedLines: {
            apply: true,
            active: true,
          },
        },
        legend: {
          labelBoxBorderColor: "#fff",
          position: "nw"
        },
        grid: {
          show: false,
          hoverable: true,
          borderWidth: 0,
        },
      };

    $(document).ready(function() {
      $.plot($("#flot-area"), areaDataSet, areaOptions);    
      $("#flot-area").UseTooltip();
    });

    function year(year) {
      return new Date(2017, 1, 1).getTime();
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

            var x = item.datapoint[0];
            var y = item.datapoint[1];

            var color = item.series.color;
            
            showTooltip(item.pageX,
                item.pageY,
                color,
                "<strong>" + item.series.label + "</strong><br>"  +
                "<strong>Share : " + $.formatNumber(y, { format: "#,###", locale: "us" }));                
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
    var sparklineCharts = function(){
      $('.newUser').sparkline([ 1,3,2,4,3,5,2 ], {type: 'line', width: '100%',height: '50',lineColor: '#ed174c', tooltipChartTitle: "New Users", fillColor: "transparent"} );
      $('.today-User').sparkline([ 1,3,2,4,3,3,5,2,3,2,4,3,3,5,2 ], {type: 'line', width: '100%',height: '50',lineColor: '#5cb85c', tooltipChartTitle: "Active User", fillColor: "transparent"} );
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
          ['Likes',  300],
          ['Comments',  150],
          ['Share',  100]
        ]),
        pieOptions = {
          is3D: true,
          legend: 'none',
          slices: [{color: '#ed174c'}, {color: '#2C2B2B'}, {color: '#6E6E6E'}]
        },
        chart = new google.visualization.PieChart(document.getElementById('pieChart'));
      chart.draw(pieData, pieOptions);
    }

    var pieResize;

    $(window).resize(function(e) {
      clearTimeout(pieResize);
      pieResize = setTimeout(drawPieChart, 300);
    });
  }, 1000);
});