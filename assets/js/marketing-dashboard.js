'use strict';
/*****************************************************
 ** marketing-dashboard.js
 ** 
 ** Javascript Configs for Marketing Dashboard.
 ** Developer: Ranpariya - The Development Lab - India
 *****************************************************/
$(document).ready(function(){
  setTimeout(function(){

    /*****************
     * Remove Section
     *****************/
    $('.remove-section .fa-trash-o').on("click", function(){
      $(this).parents(".section").parent().remove();
    });

    /***********************
     * Sale Scale (AM Chart)
     ***********************/
    var sale = AmCharts.makeChart("sale-chart", {
      "type": "serial",
      "theme": "light",
      "marginRight": 20,
      "marginTop": 17,
      "autoMarginOffset": 20,
      "dataProvider": [{
        "date": "2017-10-01",
        "price": 20
      }, {
        "date": "2017-10-02",
        "price": 75
      }, {
        "date": "2017-10-03",
        "price": 15
      }, {
        "date": "2017-10-04",
        "price": 75
      }, {
        "date": "2017-10-05",
        "price": 158
      }, {
        "date": "2017-10-06",
        "price": 57
      }, {
        "date": "2017-10-07",
        "price": 107
      }, {
        "date": "2017-10-08",
        "price": 50
      }, {
        "date": "2017-10-09",
        "price": 75
      }, {
        "date": "2017-10-10",
        "price": 132
      }, {
        "date": "2017-10-11",
        "price": 158
      }, {
        "date": "2017-10-12",
        "price": 56
      }, {
        "date": "2017-10-13",
        "price": 169
      }, {
        "date": "2017-10-14",
        "price": 24
      }, {
        "date": "2017-10-15",
        "price": 147
      }],
      "valueAxes": [{
        "gridAlpha": 0,
        "sale": true,
        "dashLength": 1,
        "guides": [{
          "dashLength": 6,
          "inside": true,
          "label": "average",
          "lineAlpha": 1,
          "value": 90.4
        }],
        "position": "left"
      }],
      "graphs": [{
        "bullet": "round",
        "id": "g1",
        "bulletBorderAlpha": 1,
        "bulletColor": "#FFFFFF",
        "bulletSize": 7,
        "lineThickness": 2,
        "title": "Price",
        "type": "smoothedLine",
        "useLineColorForBulletBorder": true,
        "valueField": "price",
        "lineColor": "#ed174c",
      }],
      "chartScrollbar": {
        enabled: false
      },
      "chartCursor": {
        "valueLineEnabled": true,
        "valueLineBalloonEnabled": true,
        "valueLineAlpha": 0.5,
        "fullWidth": true,
        "cursorAlpha": 0.05
      },
      "dataDateFormat": "YYYY-MM-DD",
      "categoryField": "date",
      "categoryAxis": {
        "gridAlpha": 0,
        "parseDates": true
      },
      "export": {
        "enabled": false
      }
    });
    sale.addListener("dataUpdated");

    /********************
     * Flot Update Chart 
     ********************/
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

    var updateInterval = 500;
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
        shadowSize: 0,  /* Drawing is faster without shadows */
        lines: {
          show: true,
          fill: true
        }
      },
      yaxis: {
        min: 0,
        max: 100
      },
      xaxis: {
        show: false
      },
      grid: {
        show: false
      },
      colors: ['#ed174c']
    });

    function update() {

      updateChart.setData([getRandomData()]);

      /* Since the axes don't change, we don't need to call plot.setupGrid() */

      updateChart.draw();
      setTimeout(update, updateInterval);
    }

    update();

    /*************************
     * Peity Chart (Bar chart)
     *************************/
    setTimeout(function(){
      var barChart1 = $(".barChart1").peity("bar", {fill: ["#ED174C", "#CCCCCC"], width:150, height: 30})
      setInterval(function() {
        var random = Math.round(Math.random() * 10)
        var values = barChart1.text().split(",")
        values.shift()
        values.push(random)

        barChart1
          .text(values.join(","))
          .change()
      }, 1000);
      var barChart2 = $(".barChart2").peity("bar", {fill: ["#ED174C", "#CCCCCC"], width:150, height: 30})
      setInterval(function() {
        var random = Math.round(Math.random() * 10)
        var values = barChart2.text().split(",")
        values.shift()
        values.push(random)

        barChart2
          .text(values.join(","))
          .change()
      }, 1000);
    }, 1000);

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

    /**************
     * Liquid Chart
     **************/
    function liquidFillGaugeDefaultSettings() {
      return {
        minValue: 0, /* The gauge minimum value. */
        maxValue: 100, /* The gauge maximum value. */
        circleThickness: 0.05, /* The outer circle thickness as a percentage of it's radius. */
        circleFillGap: 0.05, /* The size of the gap between the outer circle and wave circle as a percentage of the outer circles radius. */
        circleColor: "#178BCA", /* The color of the outer circle. */
        waveHeight: 0.05, /* The wave height as a percentage of the radius of the wave circle. */
        waveCount: 1, /* The number of full waves per width of the wave circle. */
        waveRiseTime: 1000, /* The amount of time in milliseconds for the wave to rise from 0 to it's final height. */
        waveAnimateTime: 18000, /* The amount of time in milliseconds for a full wave to enter the wave circle. */
        waveRise: true, /* Control if the wave should rise from 0 to it's full height, or start at it's full height. */
        waveHeightScaling: true, /* Controls wave size scaling at low and high fill percentages. When true, wave height reaches it's maximum at 50% fill, and minimum at 0% and 100% fill. This helps to prevent the wave from making the wave circle from appear totally full or empty when near it's minimum or maximum fill. */
        waveAnimate: true, /* Controls if the wave scrolls or is static. */
        waveColor: "#178BCA", /* The color of the fill wave. */
        waveOffset: 0, /* The amount to initially offset the wave. 0 = no offset. 1 = offset of one full wave. */
        textVertPosition: .5, /* The height at which to display the percentage text withing the wave circle. 0 = bottom, 1 = top. */
        textSize: 1, /* The relative height of the text to display in the wave circle. 1 = 50% */
        valueCountUp: true, /* If true, the displayed value counts up from 0 to it's final value upon loading. If false, the final value is displayed. */
        displayPercent: true, /* If true, a % symbol is displayed after the value. */
        textColor: "#045681", /* The color of the value text when the wave does not overlap it. */
        waveTextColor: "#A4DBf8" /* The color of the value text when the wave overlaps it. */
      };
    }

    function loadLiquidFillGauge(elementId, value, config) {
      if(config == null) config = liquidFillGaugeDefaultSettings();
      var gauge = d3.select("#" + elementId),
        radius = Math.min(parseInt(gauge.style("width")), parseInt(gauge.style("height")))/2,
        locationX = parseInt(gauge.style("width"))/2 - radius,
        locationY = parseInt(gauge.style("height"))/2 - radius,
        fillPercent = Math.max(config.minValue, Math.min(config.maxValue, value))/config.maxValue,
        waveHeightScale;
      if(config.waveHeightScaling) {
        waveHeightScale = d3.scale.linear()
          .range([0,config.waveHeight,0])
          .domain([0,50,100]);
      } else {
        waveHeightScale = d3.scale.linear()
          .range([config.waveHeight,config.waveHeight])
          .domain([0,100]);
      }

      var textPixels = (config.textSize*radius/2),
        textFinalValue = parseFloat(value).toFixed(2),
        textStartValue = config.valueCountUp?config.minValue:textFinalValue,
        percentText = config.displayPercent?"%":"",
        circleThickness = config.circleThickness * radius,
        circleFillGap = config.circleFillGap * radius,
        fillCircleMargin = circleThickness + circleFillGap,
        fillCircleRadius = radius - fillCircleMargin,
        waveHeight = fillCircleRadius*waveHeightScale(fillPercent*100),
        waveLength = fillCircleRadius*2/config.waveCount,
        waveClipCount = 1+config.waveCount,
        waveClipWidth = waveLength*waveClipCount;

      /*************************************************************************************************************
       * Rounding functions so that the correct number of decimal places is always displayed as the value counts up.
       *************************************************************************************************************/
      var textRounder = function(value){ return Math.round(value); };
      if(parseFloat(textFinalValue) != parseFloat(textRounder(textFinalValue))) {
        textRounder = function(value){ return parseFloat(value).toFixed(1); };
      }
      if(parseFloat(textFinalValue) != parseFloat(textRounder(textFinalValue))) {
        textRounder = function(value){ return parseFloat(value).toFixed(2); };
      }

      /***************************************
       * Data for building the clip wave area.
       ***************************************/
      var data = [];
      for(var i = 0; i <= 40*waveClipCount; i++) {
        data.push({x: i/(40*waveClipCount), y: (i/(40))});
      }

      /**************************************
       * Scales for drawing the outer circle.
       **************************************/
      var gaugeCircleX = d3.scale.linear().range([0,2*Math.PI]).domain([0,1]),
        gaugeCircleY = d3.scale.linear().range([0,radius]).domain([0,radius]);

      /*******************************************************
       * Scales for controlling the size of the clipping path.
       *******************************************************/
      var waveScaleX = d3.scale.linear().range([0,waveClipWidth]).domain([0,1]),
        waveScaleY = d3.scale.linear().range([0,waveHeight]).domain([0,1]);

      /***********************************************************
       * Scales for controlling the position of the clipping path.
       ***********************************************************/
      var waveRiseScale = d3.scale.linear()

        /********************************************************************************************************
        * The clipping area size is the height of the fill circle + the wave height, so we position the clip wave 
        * such that the it will overlap the fill circle at all when at 0%, and will totally cover the fill
        * circle at 100%.
        *********************************************************************************************************/
        .range([(fillCircleMargin+fillCircleRadius*2+waveHeight),(fillCircleMargin-waveHeight)])
        .domain([0,1]);
      var waveAnimateScale = d3.scale.linear()
        .range([0, waveClipWidth-fillCircleRadius*2]) // Push the clip area one full wave then snap back.
        .domain([0,1]);

      /******************************************************************
       * Scale for controlling the position of the text within the gauge.
       ******************************************************************/
      var textRiseScaleY = d3.scale.linear()
        .range([fillCircleMargin+fillCircleRadius*2,(fillCircleMargin+textPixels*0.7)])
        .domain([0,1]);

      /*****************************************
       * Center the gauge within the parent SVG.
       *****************************************/
      var gaugeGroup = gauge.append("g")
        .attr('transform','translate('+locationX+','+locationY+')');

      /************************
       * Draw the outer circle.
       ************************/
      var gaugeCircleArc = d3.svg.arc()
        .startAngle(gaugeCircleX(0))
        .endAngle(gaugeCircleX(1))
        .outerRadius(gaugeCircleY(radius))
        .innerRadius(gaugeCircleY(radius-circleThickness));
      gaugeGroup.append("path")
        .attr("d", gaugeCircleArc)
        .style("fill", config.circleColor)
        .attr('transform','translate('+radius+','+radius+')');

      /***************************************
       * Text where the wave does not overlap.
       ***************************************/
      var text1 = gaugeGroup.append("text")
        .text(textRounder(textStartValue) + percentText)
        .attr("class", "liquidFillGaugeText")
        .attr("text-anchor", "middle")
        .attr("font-size", textPixels + "px")
        .style("fill", config.textColor)
        .attr('transform','translate('+radius+','+textRiseScaleY(config.textVertPosition)+')');

      /*************************
       * The clipping wave area.
       *************************/
      var clipArea = d3.svg.area()
        .x(function(d) { return waveScaleX(d.x); } )
        .y0(function(d) { return waveScaleY(Math.sin(Math.PI*2*config.waveOffset*-1 + Math.PI*2*(1-config.waveCount) + d.y*2*Math.PI));} )
        .y1(function(d) { return (fillCircleRadius*2 + waveHeight); } );
      var waveGroup = gaugeGroup.append("defs")
        .append("clipPath")
        .attr("id", "clipWave" + elementId);
      var wave = waveGroup.append("path")
        .datum(data)
        .attr("d", clipArea)
        .attr("T", 0);

      /***************************************************
       * The inner circle with the clipping wave attached.
       ***************************************************/
      var fillCircleGroup = gaugeGroup.append("g")
        .attr("clip-path", "url(#clipWave" + elementId + ")");
      fillCircleGroup.append("circle")
        .attr("cx", radius)
        .attr("cy", radius)
        .attr("r", fillCircleRadius)
        .style("fill", config.waveColor);

      /***********************************
       * Text where the wave does overlap.
       ***********************************/
      var text2 = fillCircleGroup.append("text")
        .text(textRounder(textStartValue) + percentText)
        .attr("class", "liquidFillGaugeText")
        .attr("text-anchor", "middle")
        .attr("font-size", textPixels + "px")
        .style("fill", config.waveTextColor)
        .attr('transform','translate('+radius+','+textRiseScaleY(config.textVertPosition)+')');

      /**************************
       * Make the value count up.
       **************************/
      if(config.valueCountUp) {
        var textTween = function(){
          var i = d3.interpolate(this.textContent, textFinalValue);
          return function(t) { this.textContent = textRounder(i(t)) + percentText; }
        };
        text1.transition()
          .duration(config.waveRiseTime)
          .tween("text", textTween);
        text2.transition()
          .duration(config.waveRiseTime)
          .tween("text", textTween);
      }

      /*******************************************************************************************************************************
       * Make the wave rise. wave and waveGroup are separate so that horizontal and vertical movement can be controlled independently.
       *******************************************************************************************************************************/
      var waveGroupXPosition = fillCircleMargin+fillCircleRadius*2-waveClipWidth;
      if(config.waveRise) {
        waveGroup.attr('transform','translate('+waveGroupXPosition+','+waveRiseScale(0)+')')
          .transition()
          .duration(config.waveRiseTime)
          .attr('transform','translate('+waveGroupXPosition+','+waveRiseScale(fillPercent)+')')
          .each("start", function(){ wave.attr('transform','translate(1,0)'); }); // This transform is necessary to get the clip wave positioned correctly when waveRise=true and waveAnimate=false. The wave will not position correctly without this, but it's not clear why this is actually necessary.
      } 
      else {
        waveGroup.attr('transform','translate('+waveGroupXPosition+','+waveRiseScale(fillPercent)+')');
      }

      if(config.waveAnimate) animateWave();
      function animateWave() {
        wave.attr('transform','translate('+waveAnimateScale(wave.attr('T'))+',0)');
        wave.transition()
          .duration(config.waveAnimateTime * (1-wave.attr('T')))
          .ease('linear')
          .attr('transform','translate('+waveAnimateScale(1)+',0)')
          .attr('T', 1)
          .each('end', function(){
            wave.attr('T', 0);
            animateWave(config.waveAnimateTime);
          });
      }
    }

    /*******************************
     * Liquide Meter for Wave Colors
     *******************************/
    var config3 = liquidFillGaugeDefaultSettings();
      config3.circleColor = "#ed174c";
      config3.textColor = "#F1F1F1";
      config3.waveTextColor = "#F1F1F1";
      config3.waveColor = "#ed174c";
      config3.circleThickness = 0.1;
      config3.waveAnimateTime = 1000;

    var config4 = liquidFillGaugeDefaultSettings();
      config4.circleColor = "#f39c12";
      config4.textColor = "#F1F1F1";
      config4.waveTextColor = "#F1F1F1";
      config4.waveColor = "#f39c12";
      config4.circleThickness = 0.1;
      config4.waveAnimateTime = 1000;

    var gauge3 = loadLiquidFillGauge("fillgauge3", 90,config3);
    var gauge3 = loadLiquidFillGauge("fillgauge4", 65,config4);

    /******************
     * Sparkline Chart
     ******************/
    var sparklineCharts = function() {
      $('.sparkLine').sparkline([ 5,3,9,6,5,9,7,3,5,2 ], {type: 'line', width: '100%',height: '50',lineColor: '#ED174C', tooltipChartTitle: "Visits", fillColor: "transparent"} );
      $('.sparkLine1').sparkline([ 5,3,2,8,6,9,2,3,5,2 ], {type: 'line', width: '100%',height: '50',lineColor: '#ED174C', tooltipChartTitle: "Rate", fillColor: "transparent"} );
      $('.sparkLine2').sparkline([ 3,9,6,5,9,7,3,5,2,5,3,9,6 ], {type: 'line', width: '100%',height: '50',lineColor: '#ED174C', tooltipChartTitle: "Page Views", fillColor: "transparent"} );
      $('.sparkLine3').sparkline([ 5,9,7,3,5,2,7,3,5,2 ], {type: 'line', width: '100%',height: '50',lineColor: '#ED174C', tooltipChartTitle: "Conversion", fillColor: "transparent"} );
    };
    var sparkResize;

    $(window).resize(function(e) {
      clearTimeout(sparkResize);
      sparkResize = setTimeout(sparklineCharts, 500);
    });

    sparklineCharts();
  }, 1000);
});