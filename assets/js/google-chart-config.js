'use strict';
/******************************************************
 ** google-config.js
 ** 
 ** Javascript for Google Chart Config.
 ** Developer: Ranpariya - The Development Lab - India
 ******************************************************/
$(document).ready(function(){
  setTimeout(function(){

    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawPieChart);
    google.charts.setOnLoadCallback(drawDonutChart);
    google.charts.setOnLoadCallback(drawLineChart);
    google.charts.setOnLoadCallback(drawAreaChart);
    google.charts.setOnLoadCallback(drawComboChart);
    google.charts.setOnLoadCallback(drawBubbleChart);
    google.charts.setOnLoadCallback(drawCandlestickChart);
    google.charts.setOnLoadCallback(drawTrendlinesChart);

    /************
     * Pie Chart
     ************/
    function drawPieChart() {
      var pieData = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Work', 11],
          ['Eat', 2],
          ['Commute', 2],
          ['Watch TV', 2],
          ['Sleep', 7]
        ]),
        pieOptions = {
          title: 'My Daily Activities',
          is3D: true,
        },
        chart = new google.visualization.PieChart(document.getElementById('pieChart'));

      chart.draw(pieData, pieOptions);
    }

    /*************
     * Dount Chart
     *************/
    function drawDonutChart() {
      var donutData = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Work', 11],
          ['Eat', 2],
          ['Commute', 2],
          ['Watch TV', 2],
          ['Sleep', 7]
        ]),
        donutOptions = {
          title: 'My Daily Activities',
          pieHole: 0.4,
          pieSliceText: 'none',
        },
        chart = new google.visualization.PieChart(document.getElementById('dountChart'));

      chart.draw(donutData, donutOptions);
    }

    /*************
     * Line Chart
     *************/
    function drawLineChart() {
      var lineData = google.visualization.arrayToDataTable([
          ['Year', 'Sales', 'Expenses'],
          ['2014',  1000, 400],
          ['2015',  1170, 460],
          ['2016',  660, 1120],
          ['2017',  1030, 540]
        ]),
        lineOptions = {
          title: 'Company Performance',
          curveType: 'function',
          legend: { position: 'bottom' }
        },
        chart = new google.visualization.LineChart(document.getElementById('lineChart'));

      chart.draw(lineData, lineOptions);
    }

    /*************
     * Area Chart
     *************/
    function drawAreaChart() {
      var areaData = google.visualization.arrayToDataTable([
          ['Year', 'Sales', 'Expenses'],
          ['2014', 1000, 400],
          ['2015', 1170, 460],
          ['2016', 660, 1120],
          ['2017', 1030, 540]
        ]),
        areaOptions = {
          title: 'Company Performance',
          hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},
          vAxis: {minValue: 0}
        },
        chart = new google.visualization.AreaChart(document.getElementById('areaChart'));
      chart.draw(areaData, areaOptions);
    }

    /*************
     * Combo Chart
     *************/
    function drawComboChart() {
      var comboData = google.visualization.arrayToDataTable([
          ['Month', 'Bolivia', 'Ecuador', 'Madagascar', 'Papua New Guinea', 'Rwanda', 'Average'],
          ['2013', 165, 938, 522, 998, 450, 614.6],
          ['2014', 135, 1120, 599, 1268, 288, 682],
          ['2015', 157, 1167, 587, 807, 397, 623],
          ['2016', 139, 1110, 615, 968, 215, 609.4],
          ['2017', 136, 691, 629, 1026, 366, 569.6]
        ]),
        combpOptions = {
          title : 'Monthly Coffee Production by Country',
          vAxis: {title: 'Cups'},
          hAxis: {title: 'Month'},
          seriesType: 'bars',
          series: {5: {type: 'line'}}
        },
        chart = new google.visualization.ComboChart(document.getElementById('comboChart'));
      chart.draw(comboData, combpOptions);
    }

    /**************
     * Bubble Chart
     **************/
    function drawBubbleChart() {
      var bubbleData = google.visualization.arrayToDataTable([
          ['ID', 'X', 'Y', 'Temperature'],
          ['', 80, 167, 120],
          ['', 79, 136, 130],
          ['', 78, 184, 50],
          ['', 72, 278, 230],
          ['', 81, 200, 210],
          ['', 72, 170, 100],
          ['', 68, 477, 80]
        ]),
        bubbleOptions = {
          colorAxis: {colors: ['yellow', 'red']}
        },
        chart = new google.visualization.BubbleChart(document.getElementById('bubbleChart'));

      chart.draw(bubbleData, bubbleOptions);
    }

    /*******************
     * Candlestick Chart
     *******************/
    function drawCandlestickChart() {
      var candlestickData = google.visualization.arrayToDataTable([
          ['Mon', 20, 28, 38, 45],
          ['Tue', 31, 38, 55, 66],
          ['Wed', 50, 55, 77, 80],
          ['Thu', 77, 77, 66, 50],
          ['Fri', 68, 66, 22, 15]
        ], true),
        candlestickOptions = {
          legend:'none'
        },
        chart = new google.visualization.CandlestickChart(document.getElementById('candlestickChart'));

      chart.draw(candlestickData, candlestickOptions);
    }

    /******************
     * Trendlines Chart
     ******************/
    function drawTrendlinesChart() {
      var trendlinesData = google.visualization.arrayToDataTable([
          ['Age', 'Weight'],
          [8, 12],
          [4, 5.5],
          [11, 14],
          [4, 5],
          [3, 3.5],
          [6.5, 7]
        ]),
        trendlinesOptions = {
          title: 'Age vs. Weight comparison',
          legend: 'none',
          crosshair: { trigger: 'both', orientation: 'both' },
          trendlines: {
            0: {
              type: 'polynomial',
              degree: 3,
              visibleInLegend: true,
            }
          }
        },
        chart = new google.visualization.ScatterChart(document.getElementById('trendlinesChart'));

      chart.draw(trendlinesData, trendlinesOptions);
    }
  }, 1000);
});