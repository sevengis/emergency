'use strict';
/*****************************************************
 ** chartjs-config.js
 ** 
 ** Javascript for Chart JS config.
 ** Developer: Ranpariya - The Development Lab - India
 *****************************************************/
$(document).ready(function() {
  setTimeout(function(){

    /**************
     * Chart (Data)
     **************/
    var bar = document.getElementById("bar"),
      bubble = document.getElementById("bubble"),
      polarArea = document.getElementById("polarArea"),
      option = {
        type: 'bar',
        data: {
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [{
            label: '# of Votes',
            data: [3, 10, 3, 5, 2, 7],
            backgroundColor: [
              'rgba(255, 99, 132, 0.8)',
              'rgba(54, 162, 235, 0.8)',
              'rgba(255, 206, 86, 0.8)',
              'rgba(75, 192, 192, 0.8)',
              'rgba(153, 102, 255, 0.8)',
              'rgba(255, 159, 64, 0.8)'
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero:true
              }
            }]
          }
        }
      };

    /************
     * Bar chart
     ************/
    option.type = 'bar';
    var bar = new Chart(bar, option);

    /***************
     * Bubble Chart
     ***************/
    option.type = 'bubble';
    var bubble = new Chart(bubble, option);

    /******************
     * Polar area Chart
     ******************/
    option.type = 'polarArea';
    var polarArea = new Chart(polarArea, option);

    /**************
     * Radar Chart
     **************/
    var radarData = {
      labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: "rgba(179,181,198,0.2)",
          borderColor: "rgba(179,181,198,1)",
          pointBackgroundColor: "rgba(179,181,198,1)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgba(179,181,198,1)",
          data: [65, 59, 90, 81, 56, 55, 40]
        },
        {
          label: "My Second dataset",
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          pointBackgroundColor: "rgba(255,99,132,1)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgba(255,99,132,1)",
          data: [28, 48, 40, 19, 96, 27, 100]
        }
      ]
    };
    var myRadarChart = new Chart(document.getElementById("radarChart"), {
      type: 'radar',
      data: radarData
    });

    /************
     * Line Chart
     ************/
    var lineData = {
      labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September"],
      datasets: [
        {
          label: "My First dataset",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [65, 59, 80, 81, 56, 55, 60, 65, 82],
          spanGaps: false,
        }
      ]
    };
    var myLineChart = new Chart(document.getElementById("lineChart"), {
      type: 'line',
      data: lineData
    });

    /************
     * Pie Chart
     ************/
    var pieData = {
      labels: [
        "Red",
        "Blue",
        "Yellow"
      ],
      datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56"
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56"
        ]
      }]
    };
    var myPieChart = new Chart(document.getElementById("pieChart"), {
      type: 'pie',
      data: pieData
    });

    /****************
     * Doughnut Chart
     ****************/
    var doughnutData = {
      labels: [
        "Red",
        "Blue",
        "Yellow"
      ],
      datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56"
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56"
        ]
      }]
    };
    var myDoughnutChart = new Chart(document.getElementById("doughnutChart"), {
      type: 'doughnut',
      data: doughnutData
    });

    /**************
     * Scales Chart
     **************/
    var scalesChart = new Chart(document.getElementById("scalesChart"), {
      type: 'line',
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September"],
        datasets: [{
          label: "My First dataset",
          data: [3, 10, 3, 5, 2, 7, 11, 12, 14],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              max: 20,
              min: -10,
              stepSize: 2
            }
          }]
        }
      }
    });
  }, 1000);
});