'use strict';
/*****************************************************
 ** liquide-meter.js
 ** 
 ** Javascript for Liquide Meter Config.
 ** Developer: Ranpariya - The Development Lab - India
 *****************************************************/
$(document).ready(function(){

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

      /*********************************************************************************************************
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
  var config1 = liquidFillGaugeDefaultSettings();
    config1.circleColor = "#f2f2f2";
    config1.textColor = "#333333";
    config1.waveTextColor = "#333333";
    config1.waveColor = "#428bca";
    config1.circleThickness = 0.1;
    config1.waveAnimateTime = 1000;

  var config2 = liquidFillGaugeDefaultSettings();
    config2.circleColor = "#f2f2f2";
    config2.textColor = "#ED174C";
    config2.waveTextColor = "#fff";
    config2.waveColor = "#ED174C";
    config2.circleThickness = 0.1;
    config2.waveAnimateTime = 1000;

  var config3 = liquidFillGaugeDefaultSettings();
    config3.circleColor = "#f2f2f2";
    config3.textColor = "#F1F1F1";
    config3.waveTextColor = "#F1F1F1";
    config3.waveColor = "#00a65a";
    config3.circleThickness = 0.1;
    config3.waveAnimateTime = 1000;

  var config4 = liquidFillGaugeDefaultSettings();
    config4.circleColor = "#f2f2f2";
    config4.textColor = "#909190";
    config4.waveTextColor = "#909190";
    config4.waveColor = "#dd4b39";
    config4.circleThickness = 0.1;
    config4.waveAnimateTime = 1000;

  var config5 = liquidFillGaugeDefaultSettings();
    config5.circleColor = "#f2f2f2";
    config5.textColor = "#ccc";
    config5.waveTextColor = "#ccc";
    config5.waveColor = "#00c0ef";
    config5.circleThickness = 0.1;
    config5.waveAnimateTime = 1000;

  var config6 = liquidFillGaugeDefaultSettings();
    config6.circleColor = "#f2f2f2";
    config6.textColor = "#ED174C";
    config6.waveTextColor = "#fff";
    config6.waveColor = "#f39c12";
    config6.circleThickness = 0.1;
    config6.waveAnimateTime = 1000;

  /*******************************
   * Liquide Meter for Wave Speeds
   *******************************/
  var config7 = liquidFillGaugeDefaultSettings();
    config7.circleColor = "#f2f2f2";
    config7.textColor = "#fff";
    config7.waveTextColor = "#fff";
    config7.waveColor = "#cccccc";
    config7.circleThickness = 0.1;
    config7.waveAnimateTime = 250;

  var config8 = liquidFillGaugeDefaultSettings();
    config8.circleColor = "#f2f2f2";
    config8.textColor = "#CCC";
    config8.waveTextColor = "#CCC";
    config8.waveColor = "#cccccc";
    config8.circleThickness = 0.1;
    config8.waveAnimateTime = 500;

  var config9 = liquidFillGaugeDefaultSettings();
    config9.circleColor = "#f2f2f2";
    config9.textColor = "#ED174C";
    config9.waveTextColor = "#fff";
    config9.waveColor = "#cccccc";
    config9.circleThickness = 0.1;
    config9.waveAnimateTime = 750;

  var config10 = liquidFillGaugeDefaultSettings();
    config10.circleColor = "#f2f2f2";
    config10.textColor = "#fff";
    config10.waveTextColor = "#fff";
    config10.waveColor = "#cccccc";
    config10.circleThickness = 0.1;
    config10.waveAnimateTime = 2000;

  var config11 = liquidFillGaugeDefaultSettings();
    config11.circleColor = "#f2f2f2";
    config11.textColor = "#ccc";
    config11.waveTextColor = "#ccc";
    config11.waveColor = "#cccccc";
    config11.circleThickness = 0.1;
    config11.waveAnimateTime = 2500;

  /*******************************
   * Liquide Meter for Wave Colors
   *******************************/
  loadLiquidFillGauge("fillgauge-primary", 40,config1),
  loadLiquidFillGauge("fillgauge-theme", 80,config2),
  loadLiquidFillGauge("fillgauge-success", 90,config3),
  loadLiquidFillGauge("fillgauge-danger", 20,config4),
  loadLiquidFillGauge("fillgauge-info", 50,config5),
  loadLiquidFillGauge("fillgauge-warning", 75,config6);

  /*******************************
   * Liquide Meter for Wave Speeds
   *******************************/
  loadLiquidFillGauge("fillgauge-wave-2000", 70,config7),
  loadLiquidFillGauge("fillgauge-wave-1000", 35,config8),
  loadLiquidFillGauge("fillgauge-wave-500", 63,config9),
  loadLiquidFillGauge("fillgauge-wave-250", 69,config10);

  /*************************
   * Liquide Meter for Sizes
   *************************/
  loadLiquidFillGauge("fillgauge-demo1", 40,config1),
  loadLiquidFillGauge("fillgauge-demo2", 80,config2),
  loadLiquidFillGauge("fillgauge-demo3", 90,config3),
  loadLiquidFillGauge("fillgauge-demo4", 20,config4),
  loadLiquidFillGauge("fillgauge-demo5", 50,config5),
  loadLiquidFillGauge("fillgauge-demo6", 75,config6);
});