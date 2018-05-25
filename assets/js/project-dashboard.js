'use strict';
/*****************************************************
 ** project-dashboard.js
 ** 
 ** Javascript Configs for Project Dashboard.
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

    /***********
     * Bar Chart
     ***********/
    var barData = [[1, 15],[2, 25],[3, 24],[4, 13],[5, 18],[6, 22],[7, 15],[8, 10],[9, 24],[10, 13],[11,18],[12,25],[13,19],[14,16],[15,28],[16,20],[17,17],[18,12],[19,23],[20,26],[21, 13],[22,18],[23,25],[24,19],[25,16],[26,28],[27,20],[28,17],[29,12],[30,26],[31, 15]],
      barDataset = [{ label: " 2017", data: barData, color: "#ED174C" }],

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
          show: true,
          hoverable: true,
          borderWidth: 0,
        },
        colors: ["#ED174C"]
      };

    $(document).ready(function () {
      $.plot($("#project-report"), barDataset, options);
      $("#project-report").UseTooltip();
    });

    function getdate(year, month, day) {
      return new Date(year, month, day).getTime();
    }

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
        [(2016, 1, 1), 19],
        [(2016, 1, 2), 23],
        [(2016, 1, 3), 46],
        [(2016, 1, 4), 9],
        [(2016, 1, 5), 89],
        [(2016, 1, 6), 12],
        [(2016, 1, 7), 60]
      ],
      areaDataSet = [
        { label: " 2016", data: rawData1, color: "#6e6e6e", lines: { show: true, fill: 0.8, lineWidth: 0, }, stack: true  },
        { label: " 2017", data: rawData2, color: "#ED174C",lines: { show: true, fill: 0.7, lineWidth: 0, }, stack: true  }
      ],
      areaOptions = {
        series: {
          curvedLines: {
            apply: true,
            active: true,
          },
        },
        legend: {
          show: true,
        },
        grid: {
          show: false,
          hoverable: true,
          borderWidth: 0,
        },
      };

    $(document).ready(function () {
      $.plot($("#project-area"), areaDataSet, areaOptions);    
      $("#project-area").UseTooltip();
    });

    function year(year) {
      return new Date(2016, 1, 1).getTime();
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
                "<strong>Report : " + $.formatNumber(y, { format: "#,###", locale: "us" }));                
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
    };

    /*************
     * Peity chart
     *************/
    $(".project-progress").peity("pie",  {
      fill: ["#ED174C", "#ccc"]
    });

    var sparklineCharts = function(){
      $('.totalOpenIssues').sparkline([ 3,5,2,3,2,4,3,5 ], {type: 'line', width: '60%',height: '50',lineColor: '#ED174C', fillColor: "transparent", tooltipChartTitle: "Open Issues"} );
      $('.lastMonthCommits').sparkline([ 1,3,2,2,4,3,3,5 ], {type: 'line', width: '60%',height: '50',lineColor: '#ED174C', fillColor: "transparent", tooltipChartTitle: "Commits"} );
      $('.contributes').sparkline([ 1,3,2,4,3,3,3,5 ], {type: 'line', width: '60%',height: '50',lineColor: '#ED174C', fillColor: "transparent", tooltipChartTitle: "Contributes"} );
    };
    var sparkResize;

    $(window).resize(function(e) {
      clearTimeout(sparkResize);
      sparkResize = setTimeout(sparklineCharts, 500);
    });

    sparklineCharts();
  },1000);
});