var Pie = function() {
    var doughnut = $("#doughnut");
    var andyline = $("#andyline");
    var myLineChart;
    var myDoughnutChart;

    var lineData = {
        "NZ": 
              [
              [686, 1101, 986, 898, 777, 755, 767, 846, 831, 924], //Refugees/1m Pop
              [178, 177, 175, 173, 172, 171, 170, 168, 165, 163], //Refugee Quota/1m Pop
              //[5154, 11289, 11326, 10680, 10953, 10333, 9747, 9715, 10875, 11416]  //Migrants/1m Pop
              ],
        "Aus": 
              [
              [625, 605, 631, 634, 626, 616, 879, 594, 583, 583], //Refugees/1m Pop
              [293, 288, 282, 277, 272, 269, 527, 259, 254, 251], //Refugee Quota/1m Pop
              //[8792, 9214, 9692, 10355, 9483, 9553, 10774, 10985, 10123, 10123]  //Migrants/1m Pop
              ],
    }

    function updateLineChart(label) {
        var data = lineData[label];
        for (var i = 0; i < data.length; i++) {
            myLineChart.data.datasets[i].data = data[i];
        }
        myLineChart.update(3000, false);
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
                        "Aus"
                    ],
                    datasets: [
                        {
                            data: [4608200, 23940300],
                            backgroundColor: [
                                "#f42525",
                                "#1a53ff",
                            ],
                            hoverBackgroundColor: [
                                "#f42525",
                                "#1a53ff",
                            ]
                        }]
                };

            myDoughnutChart = 
            new Chart(doughnut, {
                type: 'pie',
                data: pieData,
                options: {
                    legend: {
                        onClick: function (event, legendItem) {
                            console.log("hey");
                            updateLineChart(legendItem.text);
                        }
                    },
                    title: {
                        display: true,
                        text: 'Population 2016'
                    }
                }
            });

            myDoughnutChart.config.options.onClick = handleDoughnutClick;

            var lineInitData = {
                labels: ["2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016"],
                datasets: [
                    {
                        label: "Refugees/1m Pop",
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
                        label: "Refugee Quota/1m Pop",
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
              //     {
              //         label: "Migrants/1m Pop",
              //         fill: false,
              //         lineTension: 0.1,
              //         backgroundColor: "rgba(0,230,0,0.4)",
              //         borderColor: "rgba(0,230,0,1)",
              //         borderCapStyle: 'butt',
              //         borderDash: [],
              //         pointBorderWidth: 1,
              //         pointHoverRadius: 5,
              //         pointHoverBorderWidth: 2,
              //         pointRadius: 1,
              //         pointHitRadius: 10,
              //         data: lineData["NZ"][2].slice(0),
              //         spanGaps: false,
              //     }
                ]
            };

            myLineChart = 
            new Chart(andyline, {
                type: 'line',
                data: lineInitData,
                options: {
                    title: {
                        display: true,
                        text: 'Hey bb how u doin'
                    },
                    scales: {
                        yAxes: [{
                            scaleLabel: {
                                display: true,
                                labelString: 'Y babby'
                            }
                        }],
                        xAxes: [{
                            scaleLabel: {
                                display: true,
                                labelString: 'X babby'
                            }
                        }],
                    }
                }
            });
    }


    return {
        init: initFunction
    }
}();

$(document).ready(function() {
    Pie.init();
});
