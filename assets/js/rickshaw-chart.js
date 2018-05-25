'use strict';
/*****************************************************
 ** rickshaw.js
 ** 
 ** Javascript Config for Rickshaw Chart.
 ** Developer: Ranpariya - The Development Lab - India
 *****************************************************/
$(document).ready(function() {
  setTimeout(function(){

    /****************
     * Simple charts
     ****************/
    var simpleGraph = new Rickshaw.Graph({
        element: document.querySelector("#simple-chart"),
        series: [ {
          color: '#CB513A',
          data: [{ x: 0, y: 10 },{ x: 1, y: 50 },{ x: 2, y: 20 },{ x: 3, y: 10 },{ x: 4, y: 50 },{ x: 5, y: 1 }]
        }]
      });
    simpleGraph.render();

    /****************
     * X-Axis charts
     ****************/
    var x_axisGraph = new Rickshaw.Graph({
        element: document.querySelector("#x-axis-chart"),
        series: [{
          color: '#7798BF',
          data: [{ x: -1893456000, y: 92228535 },{ x: -1577923200, y: 106021566 },{ x: -1262304000, y: 123202665 },{ x: -946771210, y: 132165124 },{ x: -631152001, y: 151325792 },{ x: -315619200, y: 179323175 },{ x: 0, y: 203211926 },{ x: 315532800, y: 226545808 },{ x: 631152000, y: 248709871 },{ x: 946684800, y: 281421902 },{ x: 1262304000, y: 308745532 }]
        }]
      });
    var x_axis_axes = new Rickshaw.Graph.Axis.Time({ graph: x_axisGraph });
    x_axisGraph.render();

    /****************
     * Y-Axis charts
     ****************/
    var y_axisGraph = new Rickshaw.Graph({
      element: document.querySelector("#y-axis-chart"),
      series: [{
        data: [ 
          { x: -1893456555, y: 92228221 },
          { x: -1577923211, y: 106021111 },
          { x: -1262304011, y: 123202222 },
          { x: -946771211, y: 132165333 },
          { x: -631152011, y: 151325444 },
          { x: -315619211, y: 179323555 },
          { x: 0, y: 20 },
          { x: 21, y: 40 },
          { x: 41, y: 80 },
          { x: 81, y: 160 },
          { x: 161, y:100 }
        ], 
        color: '#65B9AC'
      }]
    });
    var y_axis = new Rickshaw.Graph.Axis.Time({ graph: y_axisGraph });
    y_axisGraph.render();

    /*********************************
     * Y-Axis Color Chart with Legend
     *********************************/
    var seriesData = [ [], [], [] ],
      random = new Rickshaw.Fixtures.RandomData(150);
    for(var i = 0; i < 150; i++) {
      random.addData(seriesData);
    }

    /* instantiate our graph! */
    var graph = new Rickshaw.Graph( {
      element: document.getElementById("y-axis-colorlegend-chart"),
      renderer: 'area',
      series: [
        {
          color: "#A9FF96",
          data: seriesData[0],
          name: 'New York'
        }, {
          color: "#5C5C61",
          data: seriesData[1],
          name: 'London'
        }, {
          color: "#95CEFF",
          data: seriesData[2],
          name: 'Tokyo'
        }
      ]
    } );
    graph.render();
    var legend = new Rickshaw.Graph.Legend( {
      graph: graph,
      element: document.getElementById('y-axis-color-legend')
    } );
    var shelving = new Rickshaw.Graph.Behavior.Series.Toggle( {
      graph: graph,
      legend: legend
    } );
    var order = new Rickshaw.Graph.Behavior.Series.Order( {
      graph: graph,
      legend: legend
    } );
    var highlight = new Rickshaw.Graph.Behavior.Series.Highlight( {
      graph: graph,
      legend: legend
    } );

    /**************************
     * Y-Axis Unstacking Chart
     **************************/
    var palette = new Rickshaw.Color.Palette(),
      graph = new Rickshaw.Graph( {
      element: document.querySelector("#y_axis_unstacking_chart"),
      renderer: 'line',
      series: [
        {
          name: "Northeast",
          data: [ { x: -1893456000, y: 25868573 }, { x: -1577923200, y: 29662053 }, { x: -1262304000, y: 34427091 }, { x: -946771200, y: 35976777 }, { x: -631152000, y: 39477986 }, { x: -315619200, y: 44677819 }, { x: 0, y: 49040703 }, { x: 315532800, y: 49135283 }, { x: 631152000, y: 50809229 }, { x: 946684800, y: 53594378 }, { x: 1262304000, y: 55317240 } ],
          color: '#434348'
        },
        {
          name: "Midwest",
          data: [ { x: -1893456000, y: 29888542 }, { x: -1577923200, y: 34019792 }, { x: -1262304000, y: 38594100 }, { x: -946771200, y: 40143332 }, { x: -631152000, y: 44460762 }, { x: -315619200, y: 51619139 }, { x: 0, y: 56571663 }, { x: 315532800, y: 58865670 }, { x: 631152000, y: 59668632 }, { x: 946684800, y: 64392776 }, { x: 1262304000, y: 66927001 } ],
          color: '#A9FF96'
        },
        {
          name: "South",
          data: [ { x: -1893456000, y: 29389330 }, { x: -1577923200, y: 33125803 }, { x: -1262304000, y: 37857633 }, { x: -946771200, y: 41665901 }, { x: -631152000, y: 47197088 }, { x: -315619200, y: 54973113 }, { x: 0, y: 62795367 }, { x: 315532800, y: 75372362 }, { x: 631152000, y: 85445930 }, { x: 946684800, y: 100236820 }, { x: 1262304000, y: 114555744 } ],
          color: '#969AE9'
        },
        {
          name: "West",
          data: [ { x: -1893456000, y: 7082086 }, { x: -1577923200, y: 9213920 }, { x: -1262304000, y: 12323836 }, { x: -946771200, y: 14379119 }, { x: -631152000, y: 20189962 }, { x: -315619200, y: 28053104 }, { x: 0, y: 34804193 }, { x: 315532800, y: 43172490 }, { x: 631152000, y: 52786082 }, { x: 946684800, y: 63197932 }, { x: 1262304000, y: 71945553 } ],
          color: '#F15C80'
        }
      ]
    });

    var x_axis = new Rickshaw.Graph.Axis.Time( { graph: graph } ),
      legend = new Rickshaw.Graph.Legend( {
      element: document.querySelector('#y_axis_unstacking_legend'),
      graph: graph
    });

    var offsetForm = document.getElementById('offset_form');
    offsetForm.addEventListener('change', function(e) {
      var offsetMode = e.target.value;
      if(offsetMode == 'lines') {
        graph.setRenderer('line');
        graph.offset = 'zero';
      } else {
        graph.setRenderer('stack');
        graph.offset = offsetMode;
      }
      graph.render();
    }, false);
    graph.render();

    /*************
     * Bar charts
     *************/
    var seriesData = [ [], [], [] ],
      random = new Rickshaw.Fixtures.RandomData(150);
    for(var i = 0; i < 70; i++) {
      random.addData(seriesData);
    }
    /* instantiate our graph! */
    var bar_graph = new Rickshaw.Graph( {
      element: document.getElementById("bar-chart"),
      renderer: 'bar',
      series: [
        {
          color: "#FF7474",
          data: seriesData[0],
        }, {
          color: "#A9FF97",
          data: seriesData[1],
        }, {
          color: "#5C5C61",
          data: seriesData[2],
          opacity: 0.30
        }
      ]
    } );
    bar_graph.render();

    /***************
     * Fixed charts
     ***************/
    var tv = 250,
      fixedGraph = new Rickshaw.Graph( {
      element: document.getElementById("fixed-chart"),
      renderer: 'line',
      series: new Rickshaw.Series.FixedDuration([{ name: 'one' }], undefined, {
        timeInterval: tv,
        maxDataPoints: 100,
        timeBase: new Date().getTime() / 1000
      }) 
    } );
    fixedGraph.render();

    var i = 0,
      iv = setInterval(function() {
        var data = { one: Math.floor(Math.random() * 40) + 120 },
          randInt = Math.floor(Math.random()*100);
        data.two = (Math.sin(i++ / 40) + 4) * (randInt + 400);
        data.three = randInt + 300;
        fixedGraph.series.addData(data);
        fixedGraph.render();
      }, tv );

    /**************
     * Gaps charts
     **************/
    var palette = new Rickshaw.Color.Palette(),
      gapGraph = new Rickshaw.Graph( {
      element: document.getElementById("gaps-chart"),
      renderer: 'area',
      stroke: true,
      series: [
      {
        data: [ { x: 0, y: 19 }, { x: 1, y: 30 }, { x: 2, y: 22 }, { x: 3, y: 29 }, { x: 4, y: 21 }, { x: 5, y: 29 } ],
        name: 'new york',
        color: palette.color()
      }, {
        data: [ { x: 0, y: 19 }, { x: 1, y: 29 }, { x: 2, y: 22 }, { x: 3, y: 27 }, { x: 4, y: 21 }, { x: 5, y: 29 } ],
        name: 'boston',
        color: palette.color()
      }, {
        data: [ { x: 0, y: 19 }, { x: 1, y: 22 }, { x: 2, y: 10 }, { x: 3, y: null }, { x: 4, y: 21 }, { x: 5, y: 29 } ],
        name: 'los angeles',
        color: palette.color()
      }, {
        data: [ { x: 0, y: 19 }, { x: 1, y: 10 }, { x: 2, y: 22 }, { x: 3, y: null }, { x: 4, y: 21 }, { x: 5, y: 29 } ],
        name: 'san francisco',
        color: palette.color()
      }
    ]
    } );
    gapGraph.render();
    new Rickshaw.Graph.HoverDetail({ graph: gapGraph });

    /**********************
     * Legend hover charts
     **********************/
    var seriesData = [ [], [], [] ],
      random = new Rickshaw.Fixtures.RandomData(150);
    for(var i = 0; i < 150; i++) {
      random.addData(seriesData);
    }

    /* instantiate our graph! */
    var hoverGraph = new Rickshaw.Graph( {
      element: document.getElementById("lagend_hover_chart"),
      renderer: 'line',
      series: [
        {
          color: "#c05020",
          data: seriesData[0],
          name: 'New York'
        }, {
          color: "#30c020",
          data: seriesData[1],
          name: 'London'
        }, {
          color: "#6060c0",
          data: seriesData[2],
          name: 'Tokyo'
        }
      ]
    } );
    hoverGraph.render();
    var hoverLegend = document.querySelector('#hover_legend'),
      Hover = Rickshaw.Class.create(Rickshaw.Graph.HoverDetail, {
      render: function(args) {
        hoverLegend.innerHTML = args.formattedXValue;
        args.detail.sort(function(a, b) { return a.order - b.order }).forEach( function(d) {
          var line = document.createElement('div');
          line.className = 'line';
          var swatch = document.createElement('div');
          swatch.className = 'swatch';
          swatch.style.backgroundColor = d.series.color;
          var label = document.createElement('div');
          label.className = 'label';
          label.innerHTML = d.name + ": " + d.formattedYValue;
          line.appendChild(swatch);
          line.appendChild(label);
          hoverLegend.appendChild(line);
          var dot = document.createElement('div');
          dot.className = 'dot';
          dot.style.top = hoverGraph.y(d.value.y0 + d.value.y) + 'px';
          dot.style.borderColor = d.series.color;
          this.element.appendChild(dot);
          dot.className = 'dot active';
          this.show();
        }, this );
      }
    });
    var hover = new Hover( { graph: hoverGraph } );

    /*****************
     * Lineplot chart
     *****************/
    var linechartGraph = new Rickshaw.Graph( {
      element: document.getElementById("lineplot_chart"),
      renderer: 'lineplot',
      padding: { top: 0.1 },
      series: [
        {
          data: [ { x: 0, y: 40 }, { x: 1, y: 49 }, { x: 2, y: 38 }, { x: 3, y: 30 }, { x: 4, y: 32 } ],
          color: '#5C5C61',
          name: "New York",
        }, {
          data: [ { x: 0, y: 19 }, { x: 1, y: 22 }, { x: 2, y: 32 }, { x: 3, y: 20 }, { x: 4, y: 21 } ],
          color: 'rgb(169, 255, 150)',
          name: "London"
        }
      ]
    } );
    var hover = new Rickshaw.Graph.HoverDetail({ graph: linechartGraph });
    linechartGraph.render();

    /*************
     * Line chart
     *************/
    var lineSeriesData = [ [], [], [] ],
      lineRandom = new Rickshaw.Fixtures.RandomData(150);
    for(var i = 0; i < 150; i++) {
      lineRandom.addData(lineSeriesData);
    }
    /* instantiate our graph! */
    var lineGraph = new Rickshaw.Graph( {
      element: document.getElementById("line_chart"),
      renderer: 'line',
      series: [
        {
          color: "#3A3A4F",
          data: lineSeriesData[0],
          name: 'New York',
          strokeWidth: 5,
          opacity: 0.3
        }, {
          color: "rgba(244, 91, 91, 0.74902)",
          data: lineSeriesData[1],
          name: 'London'
        }, {
          color: "rgb(80, 80, 83)",
          data: lineSeriesData[2],
          name: 'Tokyo'
        }
      ]
    } );
    lineGraph.render();
    var hoverDetails = new Rickshaw.Graph.HoverDetail( {
      graph: lineGraph
    } );
    var legends = new Rickshaw.Graph.Legend( {
      graph: lineGraph,
      element: document.getElementById('line_legend')
    } );
    var shelving = new Rickshaw.Graph.Behavior.Series.Toggle( {
      graph: lineGraph,
      legend: legends
    } );
    var axes = new Rickshaw.Graph.Axis.Time( {
      graph: lineGraph
    } );
    axes.render();

    /***************
     * Multi charts
     ***************/
    var seriesData = [ [], [], [], [], [] ],
      random = new Rickshaw.Fixtures.RandomData(50);
    for(var i = 0; i < 75; i++) {
      random.addData(seriesData);
    }
    var multiGraph = new Rickshaw.Graph( {
      element: document.getElementById("multi_chart"),
      renderer: 'multi',
      dotSize: 5,
      series: [
        {
          name: 'temperature',
          data: seriesData.shift(),
          color: 'rgba(255, 0, 0, 0.4)',
          renderer: 'stack'
        }, {
          name: 'heat index',
          data: seriesData.shift(),
          color: 'rgba(255, 127, 0, 0.4)',
          renderer: 'stack'
        }, {
          name: 'dewpoint',
          data: seriesData.shift(),
          color: 'rgba(127, 0, 0, 0.3)',
          renderer: 'scatterplot'
        }, {
          name: 'pop',
          data: seriesData.shift().map(function(d) { return { x: d.x, y: d.y / 4 } }),
          color: 'rgba(0, 0, 127, 0.4)',
          renderer: 'bar'
        }, {
          name: 'humidity',
          data: seriesData.shift().map(function(d) { return { x: d.x, y: d.y * 1.5 } }),
          renderer: 'line',
          color: 'rgba(0, 0, 127, 0.25)'
        }
      ]
    } );
    var multiSlider = new Rickshaw.Graph.RangeSlider.Preview({
      graph: multiGraph,
      element: document.querySelector('#multi_slider')
    });
    multiGraph.render();
    var detail = new Rickshaw.Graph.HoverDetail({
      graph: multiGraph
    });
    var multiLegend = new Rickshaw.Graph.Legend({
      graph: multiGraph,
      element: document.querySelector('#multi_legend')
    });
    var highlighter = new Rickshaw.Graph.Behavior.Series.Highlight({
      graph: multiGraph,
      legend: multiLegend,
      disabledColor: function() { return 'rgba(0, 0, 0, 0.2)' }
    });
    var highlighter = new Rickshaw.Graph.Behavior.Series.Toggle({
      graph: multiGraph,
      legend: multiLegend
    });

    /******************
     * Negative Charts
     ******************/
    var negativeGraph = new Rickshaw.Graph({
      unstack: true,
      element: document.querySelector("#negative_chart"),
      min: 'auto',
      renderer: 'bar',
      series: [ {
        color: 'steelblue',
        data: [ { x: 0, y: 20 }, { x: 1, y: 3 }, { x: 2, y: 15 }, { x: 3, y: 42 } ]
      }, {
        color: 'tomato',
        data: [ { x: 0, y: 12 }, { x: 1, y: -20 }, { x: 2, y: 18 }, { x: 3, y: 8 } ]
      } ]
    });
    negativeGraph.render();

    /****************
     * Scaled charts
     ****************/
    var data, scaledGraph, i, max, min, point, scaledRandom, scales, series, _i, _j, _k, _l, _len, _len1, _len2, _ref;
    data = [[], []];
    scaledRandom = new Rickshaw.Fixtures.RandomData(12 * 60 * 60);
    for(i = _i = 0; _i < 100; i = ++_i) {
      scaledRandom.addData(data);
    }
    scales = [];
    _ref = data[1];
    for(_j = 0, _len = _ref.length; _j < _len; _j++) {
      point = _ref[_j];
      point.y *= point.y;
    }
    for(_k = 0, _len1 = data.length; _k < _len1; _k++) {
      series = data[_k];
      min = Number.MAX_VALUE;
      max = Number.MIN_VALUE;
      for(_l = 0, _len2 = series.length; _l < _len2; _l++) {
        point = series[_l];
        min = Math.min(min, point.y);
        max = Math.max(max, point.y);
        }
      if(_k === 0) {
        scales.push(d3.scale.linear().domain([min, max]).nice());
      } else {
        scales.push(d3.scale.pow().domain([min, max]).nice());
      }
    }
    scaledGraph = new Rickshaw.Graph({
      element: document.getElementById("scale_chart"),
      renderer: 'line',
      series: [
        {
          color: 'steelblue',
          data: data[0],
          name: 'Series A',
          scale: scales[0]
        }, {
          color: 'lightblue',
          data: data[1],
          name: 'Series B',
          scale: scales[1]
        }
      ]
    });
    new Rickshaw.Graph.Axis.Time({
      graph: scaledGraph
    });
    new Rickshaw.Graph.HoverDetail({
      graph: scaledGraph
    });
    scaledGraph.render();

    /****************
     * Sparse Charts
     ****************/
    var seriesData = [ [], [], [] ],
      random = new Rickshaw.Fixtures.RandomData(150);
    for(var i = 0; i < 150; i++) {
      random.addData(seriesData);
    }

    /* instantiate our graph! */
    var sparseGraph = new Rickshaw.Graph( {
      element: document.getElementById("sparse_chart"),
      renderer: 'line',
      series: [
        {
          color: "rgb(247, 163, 92)",
          name: 'New York',
          data: [ { x: 0, y: 15 }, { x: 100, y: 20 }, { x: 200, y: 22 }, { x: 300, y: 25 }, { x: 380, y: 24 }, { x: 400, y: 22 }, { x: 420, y: 25 } ],
        }
      ]
    } );
    sparseGraph.render();
    var hoverDetail = new Rickshaw.Graph.HoverDetail( {
      graph: sparseGraph
    } );

    /*********************
     * Scatterplot charts
     *********************/
    var seriesData = [ [], [], [] ],
      random = new Rickshaw.Fixtures.RandomData(150);
    for(var i = 0; i < 500; i++) {
      random.addData(seriesData);
      seriesData[0][i].r = 0|Math.random() * 2 + 8
      seriesData[1][i].r = 0|Math.random() * 5 + 5
      seriesData[2][i].r = 0|Math.random() * 8 + 2
    }

    /* instantiate our graph! */
    var scatter_graph = new Rickshaw.Graph( {
      element: document.getElementById("scatterplot_chart"),
      renderer: 'scatterplot',
      series: [
        {
          color: "#BCBCBE",
          data: seriesData[0],
          opacity: 0.5,
          name: 'New York'
        }, {
          color: "#8F85E8",
          data: seriesData[1],
          opacity: 0.3,
          name: 'London'
        }, {
          color: "#3A3A4F",
          data: seriesData[2],
          name: 'Tokyo'
        }
      ]
    } );
    scatter_graph.renderer.dotSize = 6;
    new Rickshaw.Graph.HoverDetail({ graph: scatter_graph });
    scatter_graph.render();

    /****************
     * Status charts
     ****************/
    var palette = new Rickshaw.Color.Palette( { scheme: 'httpStatus' } ),
      wrapper = new Rickshaw.Graph.Ajax( {
      element: document.getElementById("status_chart"),
      dataURL: 'status.json',
      renderer: 'bar',
      onData: function(d) { return transformData(d) },
      onComplete: function(w) {
        var legend = new Rickshaw.Graph.Legend( { 
          element: document.querySelector('#status_legend'),
          graph: w.graph
        } );
      }
    } );
    function transformData(d) {
      var data = [],
        statusCounts = {};
      Rickshaw.keys(d).sort().forEach( function(t) {
        Rickshaw.keys(d[t]).forEach( function(status) {
          statusCounts[status] = statusCounts[status] || [];
          statusCounts[status].push( { x: parseFloat(t), y: d[t][status] } );
        } );
      } );
      Rickshaw.keys(statusCounts).sort().forEach( function(status) {
        data.push( {
          name: status,
          data: statusCounts[status],
          color: palette.color(status)
        } );
      } );
      Rickshaw.Series.zeroFill(data);
      return data;
    }

    /*******************
     * Timescale charts
     *******************/
    var seriesData = [ [], [] ],
      random = new Rickshaw.Fixtures.RandomData(1500000);
    for(var i = 0; i < 900; i++) {
      random.addData(seriesData);
    }
    var timescale_graph = new Rickshaw.Graph({
      element: document.getElementById("timescale_chart"),
      stroke: true,
      strokeWidth: 0.5,
      renderer: 'area',
      xScale: d3.time.scale(),
      yScale: d3.scale.sqrt(),
      series:[
        { color: 'rgb(67, 67, 72)', data: seriesData[0] },
        { color: 'rgb(149, 206, 255)', data: seriesData[1] }
      ] 
    });
    timescale_graph.render();
    var xAxis = new Rickshaw.Graph.Axis.X({
      graph: timescale_graph,
      tickFormat: timescale_graph.x.tickFormat()
    });
    xAxis.render();
    var yAxis = new Rickshaw.Graph.Axis.Y({
      graph: timescale_graph
    });
    yAxis.render();
    var slider = new Rickshaw.Graph.RangeSlider.Preview({
      graph: timescale_graph,
      element: document.getElementById('timescale_slider')
    });
  }, 1000);
});