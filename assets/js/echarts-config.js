'use strict';
/*****************************************************
 ** echarts-config.js
 ** 
 ** Javascript for E-Chart Js Config.
 ** Developer: Ranpariya - The Development Lab - India
 *****************************************************/
$(document).ready(function() {
  setTimeout(function(){

    /*************
     * Line Chart
     *************/
    var lineChart = echarts.init(document.getElementById('lineChart'), 'macarons');
    var lineOption = {
      tooltip : {
        trigger: 'axis'
      },
      calculable : true,
      xAxis : [
        {
          type : 'category',
          boundaryGap : false,
          data : ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
        }
      ],
      yAxis : [
        {
          type : 'value',
          axisLabel : {
            formatter: '{value} °C'
          }
        }
      ],
      series : [
        {
          name:'Maximum temperature',
          type:'line',
          data:[11, 11, 15, 13, 12, 13, 10],
          markPoint : {
            data : [
              {type : 'max', name: 'The maximum'},
              {type : 'min', name: 'Minimum value'}
            ]
          },
          markLine : {
            data : [
              {type : 'average', name: 'average value'}
            ]
          }
        },
        {
          name:'Minimum temperature',
          type:'line',
          data:[1, -2, 2, 5, 3, 2, 0],
          markPoint : {
            data : [
              {name : 'Week minimum', value : -2, xAxis: 1, yAxis: -1.5}
            ]
          },
          markLine : {
            data : [
              {type : 'average', name : 'average value'}
            ]
          }
        }
      ]
    };
    lineChart.setOption(lineOption);

    /*************
     * Area Chart
     *************/
    var areaChart = echarts.init(document.getElementById('areaChart'), 'macarons');
    var areaOption = {
      tooltip : {
        trigger: 'axis'
      },
      animation: {
        animationDuration : 10000
      },
      calculable : true,
      xAxis : [
        {
          type : 'category',
          boundaryGap : false,
          data : ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
        }
      ],
      yAxis : [
        {
          type : 'value'
        }
      ],
      series : [
        {
          name:'Transactions',
          type:'line',
          smooth:true,
          itemStyle: {normal: {areaStyle: {type: 'default'}}},
          data:[10, 12, 21, 54, 260, 830, 710]
        },
        {
          name:'pre order',
          type:'line',
          smooth:true,
          itemStyle: {normal: {areaStyle: {type: 'default'}}},
          data:[30, 182, 434, 791, 390, 30, 10]
        },
        {
          name:'intention',
          type:'line',
          smooth:true,
          itemStyle: {normal: {areaStyle: {type: 'default'}}},
          data:[1320, 1132, 601, 234, 120, 90, 20]
        }
      ]
    };
    areaChart.setOption(areaOption);

    /************
     * Bar Chart
     ************/
    var barChart = echarts.init(document.getElementById('barChart'), 'macarons');
    var barOption = {
      tooltip : {
        trigger: 'axis'
      },
      calculable : true,
      xAxis : [
        {
          type : 'category',
          data : ['1','2','3','4','5','6','7','8','9','10','11','12']
        }
      ],
      yAxis : [
        {
          type : 'value'
        }
      ],
      series : [
        {
          name:'Evaporation',
          type:'bar',
          data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
          markPoint : {
            data : [
              {type : 'max', name: 'The maximum'},
              {type : 'min', name: 'Minimum value'}
            ]
          },
          markLine : {
            data : [
              {type : 'average', name: 'average value'}
            ]
          }
        },
        {
          name:'Precipitation',
          type:'bar',
          data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 48.7, 18.8, 6.0, 182.2, 2.3],
          markPoint : {
            data : [
              {type : 'max', name : 'The highest'},
              {type : 'min', name : 'Year minimum'}
            ]
          },
          markLine : {
            data : [
              {type : 'average', name : 'average value'}
            ]
          }
        }
      ]
    };
    barChart.setOption(barOption);

    /****************
     * Stacked Chart
     ****************/
    var stackedChart = echarts.init(document.getElementById('stackedChart'), 'macarons');
    var stackedOption = {
      tooltip : {
        trigger: 'axis',
        axisPointer : {
          type : 'shadow'
        }
      },
      calculable : true,
      xAxis : [
        {
          type : 'category',
          data : ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
        }
      ],
      yAxis : [
        {
          type : 'value'
        }
      ],
      series : [
        {
          name:'2012',
          type:'bar',
          stack: 'Total',
          itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
          data:[150, 212, 201, 154, 190, 330, 410]
        },
        {
          name:'2013',
          type:'bar',
          stack: 'Total',
          itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
          data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
          name:'2014',
          type:'bar',
          stack: 'Total',
          itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
          data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
          name:'2015',
          type:'bar',
          stack: 'Total',
          itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
          data:[320, 302, 301, 334, 390, 330, 320]
        },
        {
          name:'2016',
          type:'bar',
          stack: 'Total',
          itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
          data:[820, 832, 901, 934, 1290, 1330, 1320]
        }
      ]
    };
    stackedChart.setOption(stackedOption);

    /************
     * Pie Chart
     ************/
    var pieChart = echarts.init(document.getElementById('pieChart'), 'macarons');
    function random(){
      var r = Math.round(Math.random() * 100);
      return (r * (r % 2 == 0 ? 1 : -1));
    }
    function randomDataArray() {
      var d = [],
        len = 100;
      while (len--) {
        d.push([
          random(),
          random(),
          Math.abs(random()),
        ]);
      }
      return d;
    }
    var pieOption = {
      tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      calculable : true,
      series : [
        {
          name:'Sale',
          type:'pie',
          radius : [30, 110],
          roseType : 'area',
          x: '50%',
          max: 40,
          sort : 'ascending',
          data:[
            {value:10, name:'2010'},
            {value:20, name:'2011'},
            {value:15, name:'2012'},
            {value:25, name:'2013'},
            {value:20, name:'2014'},
            {value:35, name:'2015'},
            {value:30, name:'2016'},
            {value:40, name:'2017'}
          ]
        }
      ]
    };
    pieChart.setOption(pieOption);

    /*****************
     * Doughnut Chart
     *****************/
    var doughnutChart = echarts.init(document.getElementById('doughnutChart'), 'macarons');
    var doughnutOption = {
      tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      calculable : true,
      series : [
        {
          name:'Sale',
          type:'pie',
          radius : ['50%', '70%'],
          itemStyle : {
            normal : {
              label : {
                show : false
              },
              labelLine : {
                show : false
              }
            },
            emphasis : {
              label : {
                show : true,
                position : 'center',
                textStyle : {
                  fontSize : '30',
                  fontWeight : 'bold'
                }
              }
            }
          },
          data:[
            {value:135, name:'2013'},
            {value:234, name:'2014'},
            {value:310, name:'2015'},
            {value:335, name:'2016'},
            {value:1548, name:'2017'}
          ]
        }
      ]
    };
    doughnutChart.setOption(doughnutOption);

    /***************
     * Bubble Chart
     ***************/
    var bubbleChart = echarts.init(document.getElementById('bubbleChart'), 'macarons');
    function random(){
      var r = Math.round(Math.random() * 100);
      return (r * (r % 2 == 0 ? 1 : -1));
    }
    function randomDataArray() {
      var d = [],
        len = 100;
      while (len--) {
        d.push([
          random(),
          random(),
          Math.abs(random()),
        ]);
      }
      return d;
    }
    var bubbleOption = {
      tooltip : {
        trigger: 'axis',
        showDelay : 0,
        axisPointer:{
          show: true,
          type : 'cross',
          lineStyle: {
            type : 'dashed',
            width : 1
          }
        }
      },
      xAxis : [
        {
          type : 'value',
          splitNumber: 4,
          scale: true
        }
      ],
      yAxis : [
        {
          type : 'value',
          splitNumber: 4,
          scale: true
        }
      ],
      series : [
        {
          name:'scatter1',
          type:'scatter',
          symbolSize: function (value){
            return Math.round(value[2] / 5);
          },
          data: randomDataArray()
        },
        {
          name:'scatter2',
          type:'scatter',
          symbolSize: function (value){
            return Math.round(value[2] / 5);
          },
          data: randomDataArray()
        }
      ]
    };
    bubbleChart.setOption(bubbleOption);

    /**************
     * Range Chart
     **************/
    var rangeChart = echarts.init(document.getElementById('rangeChart'), 'macarons');
    var rangeOption = {
      tooltip : {
        trigger: 'axis',
        formatter: function (params){
          return params[0].name + '<br/>'
            + params[2].seriesName + ' : ' + params[2].value + '<br/>'
            + params[3].seriesName + ' : ' + params[3].value + '<br/>'
        }
      },
      xAxis : [
        {
          type : 'category',
          data : ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
        }
      ],
      yAxis : [
        {
          type : 'value',
          min : 200,
          max : 450
        }
      ],
      series : [
        {
          name:'This week Sale',
          type:'line',
          data:[400, 374, 251, 300, 420, 400, 440]
        },
        {
          name:'Last week Sale',
          type:'line',
          symbol:'none',
          itemStyle:{
            normal:{
              lineStyle: {
                width:1,
                type:'dashed'
              }
            }
          },
          data:[320, 332, 301, 334, 360, 330, 350]
        },
        {
          name:'Last week Sale',
          type:'bar',
          stack: '1',
          barWidth: 6,
          itemStyle:{
            normal:{
              color:'rgba(0,0,0,0)'
            },
            emphasis:{
              color:'rgba(0,0,0,0)'
            }
          },
          data:[320, 332, 251, 300, 360, 330, 350]
        },
        {
          name:'Today Sale',
          type:'bar',
          stack: '1',
          data:[
            {value : 80, itemStyle:{ normal:{color:'#ED174C'}}},
            {value : 42, itemStyle:{ normal:{color:'#ED174C'}}},
            {value : 50, itemStyle:{ normal:{color:'#ED174C'}}},
            {value : 34, itemStyle:{ normal:{color:'#ED174C'}}}, 
            {value : 60, itemStyle:{ normal:{color:'#ED174C'}}},
            {value : 70, itemStyle:{ normal:{color:'#ED174C'}}},
            {value : 90, itemStyle:{ normal:{color:'#ED174C'}}}
          ]
        }
      ]
    };
    rangeChart.setOption(rangeOption);
  }, 1000);
});