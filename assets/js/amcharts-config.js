'use strict';
/*****************************************************
 ** amcharts-config.js
 ** 
 ** Javascript for Am-Chart Config.
 ** Developer: Ranpariya - The Development Lab - India
 *****************************************************/
$(document).ready(function() {
  setTimeout(function(){

    /************
     * Pie Chart
     ************/
    var chart = AmCharts.makeChart( "pieChart", {
      "type": "pie",
      "theme": "none",
      "dataProvider": [ {
        "browser": "Chrome",
        "value": 400,
        "color":"#ED174C"
      }, {
        "browser": "FireFox",
        "value": 150,
        "color":"#2C2B2B"
      }, {
        "browser": "Safari",
        "value": 65,
        "color":"#6E6E6E"
      }],
      "valueField": "value",
      "titleField": "browser",
      "labelsEnabled": false,
      "colorField": "color",
      "outlineAlpha": 0.4,
      "depth3D": 15,
      "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
      "angle": 30,
      "export": {
        "enabled": false
      }
    });

    /*****************************
     * Donut with radial gradient
     *****************************/
    var chart = AmCharts.makeChart("donut-gradient-chart", {
      "type": "pie",
      "theme": "light",
      "innerRadius": "40%",
      "gradientRatio": [-0.4, -0.4, -0.4, -0.4, -0.4, -0.4, 0, 0.1, 0.2, 0.1, 0, -0.2, -0.5],
      "dataProvider": [{
        "country": "Lithuania",
        "litres": 501.9
      }, {
        "country": "Czech Republic",
        "litres": 301.9
      }, {
        "country": "Ireland",
        "litres": 201.1
      }, {
        "country": "Germany",
        "litres": 165.8
      }, {
        "country": "Australia",
        "litres": 139.9
      }, {
        "country": "Austria",
        "litres": 128.3
      }],
      "balloonText": "[[value]]",
      "valueField": "litres",
      "titleField": "country",
      "labelsEnabled": false,
      "balloon": {
        "drop": true,
        "adjustBorderColor": false,
        "color": "#FFFFFF",
        "fontSize": 16
      },
      "export": {
        "enabled": false
      }
    });

    /**************
     * Gauge Chart
     **************/
    var gaugeChart = AmCharts.makeChart( "angular-gauge-chart", {
      "type": "gauge",
      "theme": "none",
      "axes": [ {
        "axisThickness": 1,
        "axisAlpha": 0.2,
        "tickAlpha": 0.2,
        "valueInterval": 20,
        "bands": [ {
          "color": "#84b761",
          "endValue": 90,
          "startValue": 0
        }, {
          "color": "#fdd400",
          "endValue": 130,
          "startValue": 90
        }, {
          "color": "#cc4748",
          "endValue": 220,
          "innerRadius": "95%",
          "startValue": 130
        } ],
        "bottomText": "0 km/h",
        "bottomTextYOffset": -20,
        "endValue": 220
      } ],
      "arrows": [ {} ],
      "export": {
        "enabled": false
      }
    } );
    setInterval( randomValue, 2000 );

    /*******************
     * set random value
     *******************/
    function randomValue() {
      var value = Math.round( Math.random() * 200 );
      if(gaugeChart) {
        if(gaugeChart.arrows) {
          if(gaugeChart.arrows[ 0 ]) {
            if(gaugeChart.arrows[ 0 ].setValue) {
              gaugeChart.arrows[ 0 ].setValue(value);
              gaugeChart.axes[ 0 ].setBottomText(value + " km/h");
            }
          }
        }
      }
    }

    /**************
     * Clock Chart
     **************/
    var clockChart = AmCharts.makeChart( "clock-chart", {
      "type": "gauge",
      "theme": "light",
      "startDuration": 0.3,
      "marginTop": 20,
      "marginBottom": 50,
      "axes": [ {
        "axisAlpha": 0.3,
        "endAngle": 360,
        "endValue": 12,
        "minorTickInterval": 0.2,
        "showFirstLabel": false,
        "startAngle": 0,
        "axisThickness": 1,
        "valueInterval": 1
      } ],
      "arrows": [ {
        "radius": "50%",
        "innerRadius": 0,
        "clockWiseOnly": true,
        "nailRadius": 10,
        "nailAlpha": 1
      }, {
        "nailRadius": 0,
        "radius": "80%",
        "startWidth": 6,
        "innerRadius": 0,
        "clockWiseOnly": true
      }, {
        "color": "#CC0000",
        "nailRadius": 4,
        "startWidth": 3,
        "innerRadius": 0,
        "clockWiseOnly": true,
        "nailAlpha": 1
      } ],
      "export": {
        "enabled": false
      }
    } );
    setInterval( updateClock, 1000 );
    function updateClock() {
      if(clockChart.arrows.length > 0) {
        var date = new Date(),
          hours = date.getHours(),
          minutes = date.getMinutes(),
          seconds = date.getSeconds();
        if(clockChart.arrows[ 0 ].setValue) {
          clockChart.arrows[ 0 ].setValue( hours + minutes / 60 );
          clockChart.arrows[ 1 ].setValue( 12 * ( minutes + seconds / 60 ) / 60 );
          clockChart.arrows[ 2 ].setValue( 12 * date.getSeconds() / 60 );
        }
      }
    }

    /****************
     * Cylinder Chart
     ****************/
    var chart = AmCharts.makeChart("cylinder-chart", {
      "theme": "light",
      "type": "serial",
      "startDuration": 2,
      "dataProvider": [{
        "country": "USA",
        "visits": 4025,
        "color": "#FF0F00"
      }, {
        "country": "China",
        "visits": 3682,
        "color": "#FF6600"
      }, {
        "country": "Japan",
        "visits": 2809,
        "color": "#FF9E01"
      }, {
        "country": "Germany",
        "visits": 2322,
        "color": "#FCD202"
      }, {
        "country": "India",
        "visits": 2122,
        "color": "#F8FF01"
      }],
      "valueAxes": [{
        "position": "left",
        "axisAlpha":0,
        "gridAlpha":0
      }],
      "graphs": [{
        "balloonText": "[[category]]: <b>[[value]]</b>",
        "colorField": "color",
        "fillAlphas": 0.85,
        "lineAlpha": 0.1,
        "type": "column",
        "topRadius":1,
        "valueField": "visits"
      }],
      "depth3D": 40,
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
        "enabled": false
       }
    }, 0);

    /**********************
     * Stacked Column Chart
     **********************/
    var chart = AmCharts.makeChart("stacked-column-chart", {
      "theme": "light",
      "type": "serial",
      "dataProvider": [{
        "country": "USA",
        "year2016": 3.5,
        "year2017": 4.2
      }, {
        "country": "China",
        "year2016": 1.7,
        "year2017": 3.1
      }, {
        "country": "Japan",
        "year2016": 2.8,
        "year2017": 2.9
      }, {
        "country": "Germany",
        "year2016": 2.6,
        "year2017": 2.3
      }, {
        "country": "India",
        "year2016": 1.4,
        "year2017": 2.1
      }],
      "valueAxes": [{
        "stackType": "3d",
        "unit": "%",
        "position": "left",
        "title": "GDP growth rate",
      }],
      "startDuration": 1,
      "graphs": [{
        "balloonText": "GDP grow in [[category]] (2016): <b>[[value]]</b>",
        "fillAlphas": 0.9,
        "lineAlpha": 0.2,
        "title": "2016",
        "type": "column",
        "valueField": "year2016"
      }, {
        "balloonText": "GDP grow in [[category]] (2017): <b>[[value]]</b>",
        "fillAlphas": 0.9,
        "lineAlpha": 0.2,
        "title": "2017",
        "type": "column",
        "valueField": "year2017"
      }],
      "plotAreaFillAlphas": 0.1,
      "depth3D": 60,
      "angle": 30,
      "categoryField": "country",
      "categoryAxis": {
        "gridPosition": "start"
      },
      "export": {
        "enabled": false
       }
    });
    jQuery('.chart-input').off().on('input change',function() {
      var property = jQuery(this).data('property'),
        target = chart;
      chart.startDuration = 0;
      if(property == 'topRadius') {
        target = chart.graphs[0];
        if(this.value == 0) {
          this.value = undefined;
        }
      }
      target[property] = this.value;
      chart.validateNow();
    });

    /****************************************
     * Stacked bar chart with negative values
     ****************************************/
    var chart = AmCharts.makeChart("negative-chart", {
      "type": "serial",
      "theme": "light",
      "rotate": true,
      "marginBottom": 50,
      "dataProvider": [{
        "age": "85+",
        "male": -0.1,
        "female": 0.3
        }, {
          "age": "80-54",
          "male": -0.2,
          "female": 0.3
        }, {
          "age": "75-79",
          "male": -0.3,
          "female": 0.6
        }, {
          "age": "70-74",
          "male": -0.5,
          "female": 0.8
        }, {
          "age": "65-69",
          "male": -0.8,
          "female": 1.0
        }, {
          "age": "60-64",
          "male": -1.1,
          "female": 1.3
        }, {
          "age": "55-59",
          "male": -1.7,
          "female": 1.9
        }],
      "startDuration": 1,
      "graphs": [{
        "fillAlphas": 0.8,
        "lineAlpha": 0.2,
        "type": "column",
        "valueField": "male",
        "title": "Male",
        "labelText": "[[value]]",
        "clustered": false,
        "labelFunction": function(item) {
          return Math.abs(item.values.value);
        },
        "balloonFunction": function(item) {
          return item.category + ": " + Math.abs(item.values.value) + "%";
        }
      }, {
        "fillAlphas": 0.8,
        "lineAlpha": 0.2,
        "type": "column",
        "valueField": "female",
        "title": "Female",
        "labelText": "[[value]]",
        "clustered": false,
        "labelFunction": function(item) {
          return Math.abs(item.values.value);
        },
        "balloonFunction": function(item) {
          return item.category + ": " + Math.abs(item.values.value) + "%";
        }
      }],
      "categoryField": "age",
      "categoryAxis": {
        "gridPosition": "start",
        "gridAlpha": 0.2,
        "axisAlpha": 0
      },
      "valueAxes": [{
        "gridAlpha": 0,
        "ignoreAxisWidth": true,
        "labelFunction": function(value) {
          return Math.abs(value) + '%';
        },
        "guides": [{
          "value": 0,
          "lineAlpha": 0.2
        }]
      }],
      "balloon": {
        "fixedPosition": true
      },
      "chartCursor": {
        "valueBalloonsEnabled": false,
        "cursorAlpha": 0.05,
        "fullWidth": true
      },
      "export": {
        "enabled": false
      }
    });

    /***************************
     * Line With Changing Color
     ***************************/
    var chart = AmCharts.makeChart("linecolor-chart", {
      "type": "serial",
      "theme": "light",
      "marginRight": 20,
      "dataProvider": [{
        "lineColor": "#b7e021",
        "date": "2017-10-01",
        "duration": 408
      }, {
        "date": "2017-10-02",
        "duration": 482
      }, {
        "date": "2017-10-03",
        "duration": 562
      }, {
        "date": "2017-10-04",
        "duration": 379
      }, {
        "lineColor": "#fbd51a",
        "date": "2017-10-05",
        "duration": 501
      }, {
        "date": "2017-10-06",
        "duration": 443
      }, {
        "date": "2017-10-07",
        "duration": 405
      }, {
        "date": "2017-10-08",
        "duration": 309,
        "lineColor": "#2498d2"
      }, {
        "date": "2017-10-09",
        "duration": 287
      }, {
        "date": "2017-10-10",
        "duration": 485
      }, {
        "date": "2017-10-11",
        "duration": 890
      }, {
        "date": "2017-10-12",
        "duration": 810
      }],
      "balloon": {
        "cornerRadius": 6,
        "horizontalPadding": 15,
        "verticalPadding": 10
      },
      "valueAxes": [{
        "duration": "mm",
        "durationUnits": {
          "hh": "h ",
          "mm": "min"
        },
        "axisAlpha": 0
      }],
      "graphs": [{
        "bullet": "square",
        "bulletBorderAlpha": 1,
        "bulletBorderThickness": 1,
        "fillAlphas": 0.3,
        "fillColorsField": "lineColor",
        "legendValueText": "[[value]]",
        "lineColorField": "lineColor",
        "title": "duration",
        "valueField": "duration"
      }],
      "chartScrollbar": {
      },
      "chartCursor": {
        "categoryBalloonDateFormat": "YYYY MMM DD",
        "cursorAlpha": 0,
        "fullWidth": true
      },
      "dataDateFormat": "YYYY-MM-DD",
      "categoryField": "date",
      "categoryAxis": {
        "dateFormats": [{
          "period": "DD",
          "format": "DD"
        }, {
          "period": "WW",
          "format": "MMM DD"
        }, {
          "period": "MM",
          "format": "MMM"
        }, {
          "period": "YYYY",
          "format": "YYYY"
        }],
        "parseDates": true,
        "autoGridCount": false,
        "axisColor": "#555555",
        "gridAlpha": 0,
        "gridCount": 50
      },
      "export": {
        "enabled": false
      }
    });
    chart.addListener("dataUpdated");

    /**************************
     * Chart With Gaps In Data
     **************************/
    var gaps = AmCharts.makeChart("gaps-chart", {
      "type": "serial",
      "theme": "light",
      "marginRight": 20,
      "autoMarginOffset": 20,
      "dataProvider": [{
        "year": "1985",
        "value": 0.17
      },{
        "year": "1986",
        "value": 0.077
      }, {
        "year": "1987",
        "value": -0.213
      }, {
        "year": "1988",
        "value": -0.17
      }, {
        "year": "1989",
        "value": -0.254
      }, {
        "year": "1990",
        "value": 0.019
      }, {
        "year": "1991",
        "value": -0.063
      }, {
        "year": "1992",
        "value": 0.05
      }, {
        "year": "1993",
        "value": 0.077
      }, {
        "year": "1994",
        "value": 0.12
      }, {
        "year": "1995",
        "value": 0.011
      }, {
        "year": "1996",
        "value": 0.177
      }, {
        "year": "1997",
        "value": 0.104
      }, {
        "year": "1998",
        "value": 0.255
      }, {
        "year": "1999",
        "value": 0.21
      }, {
        "year": "2000",
        "value": 0.065
      }, {
        "year": "2001",
        "value": 0.187
      }, {
        "year": "2002",
        "value": 0.19
      }, {
        "year": "2005",
        "value": 0.11
      }, {
        "year": "2006",
        "value": 0.172
      }, {
        "year": "2007",
        "value": 0.269
      }, {
        "year": "2008",
        "value": 0.141
      }, {
        "year": "2009",
        "value": 0.353
      }, {
        "year": "2010",
        "value": 0.548
      }, {
        "year": "2011",
        "value": 0.298
      }, {
        "year": "2012",
        "value": 0.267
      }, {
        "year": "2013",
        "value": 0.411
      }, {
        "year": "2014",
        "value": 0.462
      }, {
        "year": "2015",
        "value": 0.47
      }, {
        "year": "2016",
        "value": 0.445
      }, {
        "year": "2017",
        "value": 0.47
      }],
      "balloon": {
        "cornerRadius": 6
      },
      "valueAxes": [{
        "axisAlpha": 0
      }],
      "graphs": [{
        "balloonText": "[[category]]<br><b><span style='font-size:14px;'>[[value]] C</span></b>",
        "bullet": "round",
        "bulletSize": 6,
        "connect": false,
        "lineColor": "#b6d278",
        "lineThickness": 2,
        "negativeLineColor": "#487dac",
        "valueField": "value"
      }],
      "chartCursor": {
        "categoryBalloonDateFormat": "YYYY",
        "cursorAlpha": 0.1,
        "cursorColor": "#000000",
        "fullWidth": true,
        "graphBulletSize": 2
      },
      "chartScrollbar": {},
      "dataDateFormat": "YYYY",
      "categoryField": "year",
      "categoryAxis": {
        "minPeriod": "YYYY",
        "parseDates": true,
        "minorGridEnabled": true
      },
      "export": {
        "enabled": false
      }
    });
    gaps.addListener("dataUpdated");

    /********************
     * Logarithmic Scale
     ********************/
    var logarithmic = AmCharts.makeChart("logarithmic-chart", {
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
        "price": 89
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
        "logarithmic": true,
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
        "valueField": "price"
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
        "parseDates": true
      },
      "export": {
        "enabled": false
      }
    });
    logarithmic.addListener("dataUpdated");

    /*****************
     * 3D Donut Chart
     *****************/
    var donut = AmCharts.makeChart( "donut-chart", {
      "type": "pie",
      "theme": "light",
      "dataProvider": [ {
        "country": "United States",
        "visits": 7252
      }, {
        "country": "China",
        "visits": 3882
      }, {
        "country": "Japan",
        "visits": 1809
      }, {
        "country": "Germany",
        "visits": 1322
      }, {
        "country": "United Kingdom",
        "visits": 1122
      }],
      "valueField": "visits",
      "titleField": "country",
      "startEffect": "elastic",
      "startDuration": 2,
      "labelsEnabled": false,
      "labelRadius": 15,
      "innerRadius": "50%",
      "depth3D": 10,
      "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
      "angle": 15,
      "export": {
        "enabled": false
      }
    } );

    /******************
     * 3D Funnel chart
     ******************/
    var funnel = AmCharts.makeChart( "funnel-chart", {
      "type": "funnel",
      "theme": "light",
      "dataProvider": [ {
        "title": "Website visits",
        "value": 200
      }, {
        "title": "Downloads",
        "value": 123
      }, {
        "title": "Requested price list",
        "value": 98
      }, {
        "title": "Contaced for more info",
        "value": 72
      }, {
        "title": "Purchased",
        "value": 35
      }],
      "balloon": {
        "fixedPosition": true
      },
      "valueField": "value",
      "titleField": "title",
      "marginRight": 240,
      "marginLeft": 50,
      "startX": -500,
      "depth3D": 100,
      "angle": 40,
      "outlineAlpha": 1,
      "outlineColor": "#FFFFFF",
      "outlineThickness": 2,
      "labelPosition": "right",
      "balloonText": "[[title]]: [[value]]n[[description]]",
      "export": {
        "enabled": false
      }
    } );

    /************************
     * Zoomable Bubble Chart
     ************************/
    var bubble = AmCharts.makeChart("bubble-chart", {
      "type": "xy",
      "theme": "light",
      "marginRight": 20,
      "marginTop": 10,
      "dataProvider": [{
        "y": 10,
        "x": 14,
        "value": 59,
        "y2": -5,
        "x2": 0,
        "value2": 44
      }, {
        "y": 5,
        "x": 3,
        "value": 50,
        "y2": -15,
        "x2": -8,
        "value2": 12
      }, {
        "y": 1,
        "x": 6,
        "value": 35,
        "y2": 0,
        "x2": 1,
        "value2": 16
      }],
      "valueAxes": [{
        "position": "bottom",
        "axisAlpha": 0
      }, {
        "minMaxMultiplier": 1.2,
        "axisAlpha": 0,
        "position": "left"
      }],
      "startDuration": 1.5,
      "graphs": [{
        "balloonText": "x:<b>[[x]]</b> y:<b>[[y]]</b><br>value:<b>[[value]]</b>",
        "bullet": "bubble",
        "lineAlpha": 0,
        "valueField": "value",
        "xField": "x",
        "yField": "y",
        "fillAlphas": 0,
        "bulletBorderAlpha": 0.2,
        "maxBulletSize": 80
      }, {
        "balloonText": "x:<b>[[x]]</b> y:<b>[[y]]</b><br>value:<b>[[value]]</b>",
        "bullet": "bubble",
        "lineAlpha": 0,
        "valueField": "value2",
        "xField": "x2",
        "yField": "y2",
        "fillAlphas": 0,
        "bulletBorderAlpha": 0.2,
        "maxBulletSize": 80
      }],
      "marginLeft": 46,
      "marginBottom": 35,
      "chartScrollbar": {},
      "chartCursor": {},
      "balloon":{
        "fixedPosition":true
      },
      "export": {
        "enabled": false
      }
    });

    /********************
     * Step Line Chart
     ********************/
    var stepLine = AmCharts.makeChart("step-line-chart", {
      "type": "serial",
      "theme": "light",
      "dataProvider": [{
        "year": "1990",
        "value": 0.077
      }, {
        "year": "1991",
        "value": -0.213
      }, {
        "year": "1992",
        "value": -0.17
      }, {
        "year": "1993",
        "value": -0.254
      }, {
        "year": "1994",
        "value": 0.019
      }, {
        "year": "1995",
        "value": -0.063
      }, {
        "year": "1996",
        "value": 0.05
      }, {
        "year": "1997",
        "value": 0.077
      }, {
        "year": "1998",
        "value": 0.12
      }, {
        "year": "1999",
        "value": 0.011
      }, {
        "year": "2000",
        "value": 0.177
      }, {
        "year": "2001",
        "value": 0.104
      }, {
        "year": "2002",
        "value": 0.255
      }, {
        "year": "2003",
        "value": 0.21
      }, {
        "year": "2004",
        "value": 0.065
      }, {
        "year": "2005",
        "value": 0.11
      }, {
        "year": "2006",
        "value": 0.172
      }, {
        "year": "2007",
        "value": 0.269
      }, {
        "year": "2008",
        "value": 0.141
      }, {
        "year": "2009",
        "value": 0.353
      }, {
        "year": "2010",
        "value": 0.548
      }, {
        "year": "2011",
        "value": 0.298
      }, {
        "year": "2012",
        "value": 0.267
      }, {
        "year": "2013",
        "value": 0.411
      }, {
        "year": "2014",
        "value": 0.462
      }, {
        "year": "2015",
        "value": 0.47
      }, {
        "year": "2016",
        "value": 0.445
      }, {
        "year": "2017",
        "value": 0.47
      }],
      "valueAxes": [{
        "axisAlpha": 0,
        "position": "right"
      }],
      "graphs": [{
        "id":"g1",
        "balloonText": "[[category]]<br><b>[[value]] C</b>",
        "type": "step",
        "lineThickness": 2,
        "bullet":"square",
        "bulletAlpha":0,
        "bulletSize":4,
        "bulletBorderAlpha":0,
        "valueField": "value"
      }],
      "chartScrollbar": {
        enabled: false
      },
      "chartCursor": {
        "fullWidth":true,
        "categoryBalloonDateFormat": "YYYY",
        "cursorAlpha": 0.05,
        "graphBulletAlpha": 1
      },
      "dataDateFormat": "YYYY",
      "categoryField": "year",
      "categoryAxis": {
        "minPeriod": "YYYY",
        "parseDates": true,
        "gridAlpha": 0
      },
      "export": {
        "enabled": false
      }
    });
  }, 1000);
});