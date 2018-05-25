'use strict';
/******************************************************
 ** peity-and-sparkline-config.js
 ** 
 ** Javascript Config Peity and SparkLine Charts.
 ** Developer: Ranpariya - The Development Lab - India
 ******************************************************/

$(document).ready(function() {
  setTimeout(function(){

    /************
     * Pie Charts
     ************/
    $("span.pie").peity("pie")

    /**************
     * Donut Charts
     **************/
    $('span.donut').peity('donut')

    /**************
     * Line Charts
     **************/
    $("span.line").peity("line")

    /************
     * Bar Charts
     ************/
    $("span.bar").peity("bar")

    /*************
     * Data Charts
     *************/
    $(".data-attributes span").peity("donut")

    /**************
     * Color Charts
     **************/
    $(".bar-colours-1").peity("bar", {
      fill: ["red", "green", "blue"]
    })
    $(".bar-colours-2").peity("bar", {
      fill: function(value) {
        return value > 0 ? "green" : "red"
      }
    })
    $(".bar-colours-3").peity("bar", {
      fill: function(_, i, all) {
        var g = parseInt((i / all.length) * 255)
        return "rgb(255, " + g + ", 0)"
      }
    })
    $(".pie-colours-1").peity("pie", {
      fill: ["cyan", "magenta", "yellow", "black"]
    })
    $(".pie-colours-2").peity("pie", {
      fill: function(_, i, all) {
        var g = parseInt((i / all.length) * 255)
        return "rgb(255, " + g + ", 0)"
      }
    })

    /*****************
     * Updating Charts
     *****************/
    var updatingChart = $(".updating-chart").peity("line", { width: 64 })
    setInterval(function() {
      var random = Math.round(Math.random() * 10)
      var values = updatingChart.text().split(",")
      values.shift()
      values.push(random)
      updatingChart
        .text(values.join(","))
        .change()
    }, 1000)

    /***************
     * Custom Charts
     ***************/
    $('select').change(function() {
      var text = $(this).val() + '/' + 5
      $(this)
        .siblings('span.graph')
        .text(text)
        .change()

      $('#notice').text('Chart updated: ' + text)
    }).change()
    $('span.graph').peity('pie')

    /*******************
     * Spark Line Charts
     *******************/
    $('.sparkLine').sparkline([ 5,3,9,6,5,9,7,3,5,2 ], {height: '20'});
    $('.sparkLine1').sparkline([ 5,3,2,-1,-3,-2,2,3,5,2 ], {height: '20'});
    $('.sparkLine2').sparkline([ 0,-3,-6,-4,-5,-4,-7,-3,-5,-2 ], {height: '20'});

    /*******************
     * Spark Bar Charts
     *******************/
    $('.sparkBar').sparkline([ 5,3,9,6,5,9,7,3,5,2 ], { type: 'bar', height: '20'});
    $('.sparkBar1').sparkline([ 5,3,2,-1,-3,-2,2,3,5,2 ], { type: 'bar', height: '20'});
    $('.sparkBar2').sparkline([ 0,-3,-6,-4,-5,-4,-7,-3,-5,-2 ], { type: 'bar', height: '20'});

    /***********************
     * Spark Discrete Charts
     ***********************/
    $('.sparkDiscrete').sparkline([ 5,3,9,6,5,9,7,3,5,2 ], { type: 'discrete', height: '20'});
    $('.sparkDiscrete1').sparkline([ 5,3,2,-1,-3,-2,2,3,5,2 ], { type: 'discrete', height: '20'});
    $('.sparkDiscrete2').sparkline([ 0,-3,-6,-4,-5,-4,-7,-3,-5,-2 ], { type: 'discrete', height: '20'});

    /*********************
     * Spark Bullet Charts
     *********************/
    $('.sparkBullet').sparkline([ 5,3,9,6,5,9,7,3,5,2 ], { type: 'bullet', height: '20'});
    $('.sparkBullet1').sparkline([ 5,3,2,-1,-3,-2,2,3,5,2 ], { type: 'bullet', height: '20'});
    $('.sparkBullet2').sparkline([ 0,-3,-6,-4,-5,-4,-7,-3,-5,-2 ], { type: 'bullet', height: '20'});

    /******************
     * Spark Pie Charts
     ******************/
    $('.sparkPie').sparkline([ 5,3,9 ], { type: 'pie', height: '20'});
    $('.sparkPie1').sparkline([ 5,3,5 ], { type: 'pie', height: '20'});
    $('.sparkPie2').sparkline([ 5,7,2 ], { type: 'pie', height: '20'});

    /******************
     * Spark Box Charts
     ******************/
    $('.sparkBox').sparkline([4,27,34,52,54,59,61,68,78,82,85,87,91,93,100], { type: 'box', height: '20'});
    $('.sparkBox1').sparkline([4,17,24,42,54,59,62,68,82,86,91,93,100], { type: 'box', height: '20'});
    $('.sparkBox2').sparkline([4,27,36,42,52,59,61,65,78,82,88,90,93,100], { type: 'box', height: '20'});
  }, 1000);
});