'use strict';
/*****************************************************
 ** flot-config.js
 ** 
 ** Javascript for Flot Chart Config.
 ** Developer: Ranpariya - The Development Lab - India
 *****************************************************/
$(document).ready(function() {
  setTimeout(function() {

    /**************
     * Multi Chart 
     **************/
    var multiData1 = [
        [getdate(2017, 09, 2), 1690.25], [getdate(2017, 09, 3), 1696.3], [getdate(2017, 09, 4), 1659.65],
        [getdate(2017, 09, 7), 1668.15], [getdate(2017, 09, 8), 1656.1], [getdate(2017, 09, 9), 1668.65],
        [getdate(2017, 09, 10), 1668.15], [getdate(2017, 09, 11), 1680.2], [getdate(2017, 09, 14), 1676.7],
        [getdate(2017, 09, 15), 1680.7], [getdate(2017, 09, 16), 1689.75], [getdate(2017, 09, 17), 1687.25],
        [getdate(2017, 09, 18), 1698.3], [getdate(2017, 09, 21), 1696.8], [getdate(2017, 09, 22), 1701.3],
        [getdate(2017, 09, 23), 1700.8], [getdate(2017, 09, 24), 1686.75], [getdate(2017, 09, 25), 1680],
        [getdate(2017, 09, 28), 1668.65], [getdate(2017, 09, 29), 1671.2], [getdate(2017, 09, 30), 1675.7],
        [getdate(2017, 09, 31), 1684.25]
      ],
      multiData2 = [
        [getdate(2017, 09, 2), 1674.15], [getdate(2017, 09, 3), 1680.15], [getdate(2017, 09, 4), 1643.8],
        [getdate(2017, 09, 7), 1652.25], [getdate(2017, 09, 8), 1640.3], [getdate(2017, 09, 9), 1652.75],
        [getdate(2017, 09, 10), 1652.25], [getdate(2017, 09, 11), 1664.2], [getdate(2017, 09, 14), 1660.7],
        [getdate(2017, 09, 15), 1664.7], [getdate(2017, 09, 16), 1673.65], [getdate(2017, 09, 17), 1671.15],
        [getdate(2017, 09, 18), 1682.1], [getdate(2017, 09, 21), 1680.65], [getdate(2017, 09, 22), 1685.1],
        [getdate(2017, 09, 23), 1684.6], [getdate(2017, 09, 24), 1670.65], [getdate(2017, 09, 25), 1664],
        [getdate(2017, 09, 28), 1652.75], [getdate(2017, 09, 29), 1655.25], [getdate(2017, 09, 30), 1659.7],
        [getdate(2017, 09, 31), 1668.2]
      ],
      multiDataset = [
        {
          label: "Sell",
          data: multiData1,
          color: "#FF0000",
          points: { fillColor: "#FF0000", show: true },
          lines: { show: true }
        },
        {
          label: "Buy",
          data: multiData2,
          xaxis:2,
          color: "#0062E3",
          points: { fillColor: "#0062E3", show: true },
          lines: { show: true }
        }
      ],
      dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat"],
        multiOptions = {
        series: {
          shadowSize: 5
        },
        xaxes: [{
          mode: "time",
          tickFormatter: function (val, axis) {
            return dayOfWeek[new Date(val).getDay()];
          },
          color: "black",
          position: "top",
          axisLabel: "Day of week",
          axisLabelUseCanvas: true,
          axisLabelFontSizePixels: 12,
          axisLabelFontFamily: 'Verdana, Arial',
          axisLabelPadding: 5
        },
        {
          mode: "time",
          timeformat: "%m/%d",
          tickSize: [3, "day"],
          color: "black",        
          axisLabel: "Date",
          axisLabelUseCanvas: true,
          axisLabelFontSizePixels: 12,
          axisLabelFontFamily: 'Verdana, Arial',
          axisLabelPadding: 10
        }],
        yaxis: {
          color: "black",
          tickDecimals: 2,
          axisLabel: "Gold Price  in USD/oz",
          axisLabelUseCanvas: true,
          axisLabelFontSizePixels: 12,
          axisLabelFontFamily: 'Verdana, Arial',
          axisLabelPadding: 5
        },
        legend: {
          show: false,
          noColumns: 0,
          labelFormatter: function (label, series) {
            return "<font color=\"white\">" + label + "</font>";
          },
          backgroundColor: "#000",
          backgroundOpacity: 0.9,
          labelBoxBorderColor: "#000000",
        },
        grid: {
          hoverable: true,
          borderWidth: 3,
          mouseActiveRadius: 50,
          backgroundColor: { colors: ["#ffffff", "#EDF5FF"] },
          axisMargin: 20
        }
      };

    $(document).ready(function(){
      $.plot($("#flot-multiChart"), multiDataset, multiOptions);
      $("#flot-multiChart").UseTooltip();
    });

    function getdate(year, month, day) {
      return new Date(year, month, day).getTime();
    }

    /**************
     * Update Chart 
     **************/
    var data = [],
      totalPoints = 300;

    function getRandomData() {

      if (data.length > 0)
        data = data.slice(1);

      /* Do a random walk */

      while (data.length < totalPoints) {

        var prev = data.length > 0 ? data[data.length - 1] : 50,
          y = prev + Math.random() * 10 - 5;

        if (y < 0) {
          y = 0;
        } else if (y > 100) {
          y = 100;
        }

        data.push(y);
      }

      /* Zip the generated y values with the x values */

      var res = [];
      for (var i = 0; i < data.length; ++i) {
        res.push([i, data[i]])
      }

      return res;
    }

    /* Set up the control widget */

    var updateInterval = 30;
    $("#updateInterval").val(updateInterval).change(function () {
      var v = $(this).val();
      if (v && !isNaN(+v)) {
        updateInterval = +v;
        if (updateInterval < 1) {
          updateInterval = 1;
        } else if (updateInterval > 2000) {
          updateInterval = 2000;
        }
        $(this).val("" + updateInterval);
      }
    });

    var updateChart = $.plot("#flot-updateChart", [ getRandomData() ], {
      series: {
        shadowSize: 0 /* Drawing is faster without shadows */
      },
      yaxis: {
        min: 0,
        max: 100
      },
      xaxis: {
        show: false
      }
    });

    function update() {

      updateChart.setData([getRandomData()]);

      /* Since the axes don't change, we don't need to call plot.setupGrid() */

      updateChart.draw();
      setTimeout(update, updateInterval);
    }

    update();

    /*************
     * Line Chart
     *************/
    var lineOption = {
      option: {
        series: {
          lines: { show: true, fill: true,  fillColor: { colors: [{ opacity: 0.7 }, { opacity: 0.1}] } },
          points: { show: true, fill: true }
        },
        xaxis: {
          show: false
        },
        yaxes: [{
          position: "left",
        }, {
          position: "right",
        }],
        borderColor: '#fff',
        colors: ["#FF7070", "#37AFFF"]
      }
    };

    var lineData1 = [
        [getdate(2017, 0, 1), 1652.21], [getdate(2017, 1, 1), 1742.14], [getdate(2017, 2, 1), 1673.77], [getdate(2017, 3, 1), 1649.69],
        [getdate(2017, 4, 1), 1591.19], [getdate(2017, 5, 1), 1598.76], [getdate(2017, 6, 1), 1589.90], [getdate(2017, 7, 1), 1630.31],
        [getdate(2017, 8, 1), 1744.81], [getdate(2017, 9, 1), 1746.58], [getdate(2017, 10, 1), 1721.64], [getdate(2017, 11, 1), 1684.76]
      ],

      lineData2 = [
        [getdate(2017, 0, 1), 0.63], [getdate(2017, 1, 1), 5.44], [getdate(2017, 2, 1), -3.92], [getdate(2017, 3, 1), -1.44],
        [getdate(2017, 4, 1), -3.55], [getdate(2017, 5, 1), 0.48], [getdate(2017, 6, 1), -0.55], [getdate(2017, 7, 1), 2.54],
        [getdate(2017, 8, 1), 7.02], [getdate(2017, 9, 1), 0.10], [getdate(2017, 10, 1), -1.43], [getdate(2017, 11, 1), -2.14]
      ],

      lineDataset = [
        { label: "Gold Price", data: lineData1, points: { symbol: "triangle"} },
        { label: "Change", data: lineData2, yaxis: 2 }
      ];

    $(document).ready(function(){
      $.plot($("#flot-line"), lineDataset, lineOption.option);
      window.onresize = function(event) {
        $.plot($("#flot-line"), lineDataset, lineOption.option);
      }
    });

    function getdate(year, month, day) {
      return new Date(year, month, day).getTime();
    }

    /*************
     * Area Chart
     *************/
    var rawData1 = [
        [year(2001), 20300], [year(2002), 27600], [year(2003), 40800], [year(2005), 54740], [year(2006), 57518],
        [year(2007), 60140], [year(2008), 63403], [year(2009), 65586], [year(2010), 67554], [year(2011), 69243],
        [year(2012), 70601], [year(2013), 72158], [year(2014), 72741], [year(2015), 72799], [year(2016), 72472],
        [year(2017), 72708]
      ],
      rawData2 = [
        [year(2001), 10700], [year(2002), 11100], [year(2003), 13300], [year(2005), 22121], [year(2006), 24675],
        [year(2007), 27740], [year(2008), 31374], [year(2009), 35728], [year(2010), 40816], [year(2011), 46962],
        [year(2012), 54181], [year(2013), 62244], [year(2014), 70746], [year(2015), 79567], [year(2016), 88796],
        [year(2017), 101296]
      ],
      rawData3 = [
        [year(2001), 63500], [year(2002), 80900], [year(2003), 94700], [year(2005), 139849], [year(2006), 154195],
        [year(2007), 167434], [year(2008), 189942], [year(2009), 214312], [year(2010), 239751], [year(2011), 263234],
        [year(2012), 288755], [year(2013), 316781], [year(2014), 343005], [year(2015), 367974], [year(2016), 391751],
        [year(2017), 411963]
      ],
      areaDataSet = [
        { label: "Asia", data: rawData3, color: "#0077FF" },
        { label: "Africa", data: rawData2, color: "#7D0096" },
        { label: "Europe", data: rawData1, color: "#DE000F" }
      ],
      areaOptions = {
        series: {
          lines: {
            show: true,
            fill: true
          }
        },
        xaxis: {
          axisLabel: "Year",
          axisLabelUseCanvas: true,
          axisLabelFontSizePixels: 12,
          axisLabelFontFamily: 'Verdana, Arial',
          axisLabelPadding: 10,
          mode: "time",
          tickSize: [20, "year"],
          timeformat: "%Y"
        },
        yaxis: {
          axisLabel: "Population (multiply by 10,000)",
          axisLabelUseCanvas: true,
          axisLabelFontSizePixels: 12,
          axisLabelFontFamily: 'Verdana, Arial',
          axisLabelPadding: 3,
          tickFormatter: function (v, axis) {
            return $.formatNumber(v, { format: "#,###", locale: "us" });
          }
        },
        legend: {
          noColumns: 3,
          labelBoxBorderColor: "#858585",
          position: "nw"
        },
        grid: {
          hoverable: true,
          borderWidth: 2,
          backgroundColor: { colors: ["#ffffff", "#EDF5FF"] }
        }
      };

    $(document).ready(function(){
      $.plot($("#flot-area"), areaDataSet, areaOptions);
      $("#flot-area").UseTooltip();
    });

    function year(year) {
      return new Date(year, 1, 1).getTime();
    }

    /*************
     * Bar Chart
     *************/
    var barData = [[0, 11],[1, 15],[2, 25],[3, 24],[4, 13],[5, 18]],
      barDataset = [{ label: "2017 Average Temperature", data: barData, color: "#5482FF" }],
      ticks = [[0, "London"], [1, "New York"], [2, "New Delhi"], [3, "Taipei"],[4, "Beijing"], [5, "Sydney"]],
      options = {
        series: {
          bars: {
            show: true
          }
        },
        bars: {
          align: "center",
          barWidth: 0.5
        },
        xaxis: {
          axisLabel: "World Cities",
          axisLabelUseCanvas: true,
          axisLabelFontSizePixels: 12,
          axisLabelFontFamily: 'Verdana, Arial',
          axisLabelPadding: 10,
          ticks: ticks
        },
        yaxis: {
          axisLabel: "Average Temperature",
          axisLabelUseCanvas: true,
          axisLabelFontSizePixels: 12,
          axisLabelFontFamily: 'Verdana, Arial',
          axisLabelPadding: 3,
          tickFormatter: function (v, axis) {
            return v + "°C";
          }
        },
        legend: {
          noColumns: 0,
          labelBoxBorderColor: "#000000",
          position: "nw"
        },
        grid: {
          hoverable: true,
          borderWidth: 2,
          backgroundColor: { colors: ["#ffffff", "#EDF5FF"] }
        }
      };

    $(document).ready(function(){
      $.plot($("#flot-bar"), barDataset, options);
      $("#flot-bar").UseTooltip();
    });

    function getdate(year, month, day) {
      return new Date(year, month, day).getTime();
    }

    /*************
     * Stack Chart
     *************/
    var stackData1 = [
        [getdate(2017, 08, 1), 208557], [getdate(2017, 08, 2), 125068], [getdate(2017, 08, 3), 931208], [getdate(2017, 08, 4), 450040], [getdate(2017, 08, 5), 761180], [getdate(2017, 08, 6), 744526], [getdate(2017, 08, 7), 707095], [getdate(2017, 08, 8), 601316], [getdate(2017, 08, 9), 187495], [getdate(2017, 08, 10), 716189], [getdate(2017, 08, 11), 587141], [getdate(2017, 08, 12), 147266], [getdate(2017, 08, 13), 574670], [getdate(2017, 08, 14), 175881], [getdate(2017, 08, 15), 272519], [getdate(2017, 08, 16), 211131], [getdate(2017, 08, 17), 637015], [getdate(2017, 08, 18), 794050], [getdate(2017, 08, 19), 399010], [getdate(2017, 08, 20), 799942], [getdate(2017, 08, 21), 595768], [getdate(2017, 08, 22), 717126], [getdate(2017, 08, 23), 414923], [getdate(2017, 08, 24), 462479], [getdate(2017, 08, 25), 674334], [getdate(2017, 08, 26), 20312], [getdate(2017, 08, 27), 675892], [getdate(2017, 08, 28), 808655], [getdate(2017, 08, 29), 194543], [getdate(2017, 08, 30), 664716]
      ],
      stackData2 = [
        [getdate(2017, 08, 1), 809706], [getdate(2017, 08, 2), 682787], [getdate(2017, 08, 3), 359835], [getdate(2017, 08, 4), 374451], [getdate(2017, 08, 5), 648704], [getdate(2017, 08, 6), 219730], [getdate(2017, 08, 7), 961114], [getdate(2017, 08, 8), 480190], [getdate(2017, 08, 9), 756578], [getdate(2017, 08, 10), 858581], [getdate(2017, 08, 11), 606085], [getdate(2017, 08, 12), 855877], [getdate(2017, 08, 13), 644309], [getdate(2017, 08, 14), 874494], [getdate(2017, 08, 15), 714742], [getdate(2017, 08, 16), 447174], [getdate(2017, 08, 17), 721736], [getdate(2017, 08, 18), 392072], [getdate(2017, 08, 19), 595023], [getdate(2017, 08, 20), 881968], [getdate(2017, 08, 21), 899978], [getdate(2017, 08, 22), 269944], [getdate(2017, 08, 23), 29627], [getdate(2017, 08, 24), 384853], [getdate(2017, 08, 25), 491430], [getdate(2017, 08, 26), 710143], [getdate(2017, 08, 27), 481074], [getdate(2017, 08, 28), 775704], [getdate(2017, 08, 29), 753212], [getdate(2017, 08, 30), 80979]
      ],
      stackData3 = [
        [getdate(2017, 08, 1), 419117], [getdate(2017, 08, 2), 522777], [getdate(2017, 08, 3), 735468], [getdate(2017, 08, 4), 777434], [getdate(2017, 08, 5), 464478], [getdate(2017, 08, 6), 227180], [getdate(2017, 08, 7), 801428], [getdate(2017, 08, 8), 623814], [getdate(2017, 08, 9), 991399], [getdate(2017, 08, 10), 675899], [getdate(2017, 08, 11), 326205], [getdate(2017, 08, 12), 642431], [getdate(2017, 08, 13), 941359], [getdate(2017, 08, 14), 989682], [getdate(2017, 08, 15), 861248], [getdate(2017, 08, 16), 770613], [getdate(2017, 08, 17), 587983], [getdate(2017, 08, 18), 959591], [getdate(2017, 08, 19), 573137], [getdate(2017, 08, 20), 954154], [getdate(2017, 08, 21), 428928], [getdate(2017, 08, 22), 599519], [getdate(2017, 08, 23), 782747], [getdate(2017, 08, 24), 93086], [getdate(2017, 08, 25), 552106], [getdate(2017, 08, 26), 665504], [getdate(2017, 08, 27), 974980], [getdate(2017, 08, 28), 883020], [getdate(2017, 08, 29), 938559], [getdate(2017, 08, 30), 738654]
      ],
      stackDataset = [
        { label: "example1.com", data: stackData1, color: "#0077FF" },
        { label: "example2.com", data: stackData2, color: "#7D0096" },
        { label: "example3.com", data: stackData3, color: "#DE000F" }
      ],
      stackOptions = {
        series: {
          stack: true,
          bars: {
            show: true
          }
        },
        bars: {
          align: "center",
          barWidth:24 * 60 * 60 * 600,
          lineWidth: 1
        },
        xaxis: {
          mode: "time",
          tickSize: [3, "day"],
          tickLength: 10,
          color: "black",
          axisLabel: "Date",
          axisLabelUseCanvas: true,
          axisLabelFontSizePixels: 12,
          axisLabelFontFamily: 'Verdana, Arial',
          axisLabelPadding: 10
        },
        yaxis: {
          color: "black",
          axisLabel: "DNS Query Count",
          axisLabelUseCanvas: true,
          axisLabelFontSizePixels: 12,
          axisLabelFontFamily: 'Verdana, Arial',
          axisLabelPadding: 3,
          tickFormatter: function (v, axis) {
            return $.formatNumber(v, { format: "#,###", locale: "us" });
          }
        },
        grid: {
          hoverable: true,
          borderWidth: 2,
          backgroundColor: { colors: ["#EDF5FF", "#ffffff"] }
        },
        colors:["#004078","#207800", "#613C00"]
      };

    $(document).ready(function(){
      $.plot($("#flot-stack"), stackDataset, stackOptions);
      $("#flot-stack").UseTooltip();
    });

    function getdate(year, month, day) {
      return new Date(year, month, day).getTime();
    }

    /*******************
     * Pie / Dount Chart
     *******************/
    var pieDataSet = [
        {label: "Asia", data: 4119630000, color: "#005CDE" },
        { label: "Latin America", data: 590950000, color: "#00A36A" },
        { label: "Africa", data: 1012960000, color: "#7D0096" },
        { label: "Oceania", data: 35100000, color: "#992B00" },
        { label: "Europe", data: 727080000, color: "#DE000F" },
        { label: "North America", data: 344120000, color: "#ED7B00" }    
      ],

      pieOptions = {
        series: {
          pie: {
            show: true,
            label: {
              show: true
            }
          }
        },
        legend: {
          show: false
        },
        grid: {
          hoverable: true
        }
      },

      donutOptions = {
        series: {
          pie: {
            show: true,
            innerRadius: 0.5,
            label: {
              show: true
            }
          }
        },
        legend: {
          show: false
        }
      };

    $(document).ready(function(){
      $.plot($("#flot-pie"), pieDataSet, pieOptions);
      $.plot($("#flot-dount"), pieDataSet, donutOptions);
    });

    var previousPoint = null, previousLabel = null,
      monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      previousPoint = null, previousLabel = null;

    /*******************
     * Tooltip Function
     *******************/
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
                "<strong>" + item.series.label + "</strong><br>" + new Date(x).getFullYear() +
                " : <strong>" + $.formatNumber(y, { format: "#,###", locale: "us" }) + "</strong>");                
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
  }, 1000);
});