var Pie = function() {
    var doughnut = $("#doughnut");
    var andyline = $("#andyline");
    var myLineChart;

    var lineData = {
        "NZ": [
              [11, 21, 31, 41, 51, 61, 71],
              [15, 25, 35, 45, 55, 65, 75],
              [16, 26, 36, 46, 56, 66, 76]
              ],
        "Global": [
                  [51, 41, 31, 21, 11, 61, 71],
                  [56, 46, 36, 26, 16, 66, 76],
                  [58, 48, 38, 28, 18, 68, 78]
                  ]
    }

    function updateLineChart(label) {
        var data = lineData[label];
        for (var i = 0; i < data.length; i++) {
            console.log(data[i]);
            for (var j = 0; j < data[i].length; j++) {
                myLineChart.data.datasets[i].data[j] = data[i][j];
                myLineChart.update();
            }
        }
    }

    function initFunction() {
            function handleDoughnutClick(evt) {
                var activeElement = myDoughnutChart.getElementAtEvent(evt);
                if (activeElement[0] == null) return;
                var clickedLabel = pieData.labels[activeElement[0]._index];
                updateLineChart(clickedLabel);
            }

            var pieData = {
                    labels: [
                        "NZ",
                        "Global"
                    ],
                    datasets: [
                        {
                            data: [750, 10000],
                            backgroundColor: [
                                "#FF6384",
                                "#36A2EB",
                            ],
                            hoverBackgroundColor: [
                                "#FF6384",
                                "#36A2EB",
                            ]
                        }]
                };

            var myDoughnutChart = 
            new Chart(doughnut, {
                type: 'pie',
                data: pieData,
                options: {
                    legend: {
                        onClick: function (event, legendItem) {
                            console.log("hey");
                            updateLineChart(legendItem.text);
                        }
                    }
                }
            });

            myDoughnutChart.config.options.onClick = handleDoughnutClick;

            var lineInitData = {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [
                    {
                        label: "Migration",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(0,153,255,0.4)",
                        borderColor: "rgba(0,153,255,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: lineData["NZ"][0].slice(0),
                        spanGaps: false,
                    },
                    {
                        label: "Immigration",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(255,0,64,0.4)",
                        borderColor: "rgba(255,0,64,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: lineData["NZ"][1].slice(0),
                        spanGaps: false,
                    },
                    {
                        label: "Another",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(255,255,102,0.4)",
                        borderColor: "rgba(255,255,102,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: lineData["NZ"][2].slice(0),
                        spanGaps: false,
                    }
                ]
            };

            myLineChart = 
            new Chart(andyline, {
                type: 'line',
                data: lineInitData,
            });
    }


    return {
        init: initFunction
    }
}();

$(document).ready(function() {
    Pie.init();
});
