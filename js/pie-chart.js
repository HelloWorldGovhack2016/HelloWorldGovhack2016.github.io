var Pie = function () {
    var doughnut = $("#doughnut");
    var refugeeLine = $("#refugee-line");
    var migrantLine = $("#migrant-line");
    var myLineChart;
    var myMigrantChart;
    var myDoughnutChart;

    var lineData = {
        "NZ":
        [
            [176, 262, 233, 240, 261, 199, 304, 316, 279, 381], //Refugees/1m Pop
            [178, 177, 175, 173, 172, 171, 170, 168, 165, 163], //Refugee Quota/1m Pop
            [5664,12129,12079,11339,11469,10889,10209,10244,11428,11958]  //Migrants/1m Pop
        ],
        "Aus":
        [
            [625, 605, 631, 634, 626, 616, 879, 594, 583, 583], //Refugees/1m Pop
            [293, 288, 282, 277, 272, 269, 527, 259, 254, 251], //Refugee Quota/1m Pop
            [8792, 9214, 9692, 10355, 9483, 9553, 10774, 10985, 10123, 10123]  //Migrants/1m Pop
        ],
    }

    function updateLineChart(label) {
        var data = lineData[label];
        for (var i = 0; i < 2; i++) {
            myLineChart.data.datasets[i].data = data[i];
        }
        myMigrantChart.data.datasets[0].data = data[2];
        myMigrantChart.update(3000, false);
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

            ]
        };

        myMigrantChart = new Chart(migrantLine, {
                type: 'line',
                data: {
                    labels: ["2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016"],
                    datasets: [                
                        {
                            label: "Migrants/1m Pop",
                            fill: false,
                            lineTension: 0.1,
                            backgroundColor: "rgba(0,230,0,0.4)",
                            borderColor: "rgba(0,230,0,1)",
                            borderCapStyle: 'butt',
                            borderDash: [],
                            pointBorderWidth: 1,
                            pointHoverRadius: 5,
                            pointHoverBorderWidth: 2,
                            pointRadius: 1,
                            pointHitRadius: 10,
                            data: lineData["NZ"][2].slice(0),
                            spanGaps: false,
                        }]
                },
                options: {
                    title: {
                        display: true,
                        text: 'Migrants accepted by year'
                    },
                    scales: {
                        yAxes: [{
                            scaleLabel: {
                                display: true,
                                labelString: 'People'
                            },
                            ticks: {
                                max: 13000,
                                min: 5000,
                                stepSize: 1000
                            }
                        }],
                        xAxes: [{
                            scaleLabel: {
                                display: true,
                                labelString: 'Year'
                            }
                        }],
                    }
                }
            });

        myLineChart =
            new Chart(refugeeLine, {
                type: 'line',
                data: lineInitData,
                options: {
                    title: {
                        display: true,
                        text: 'Refugees accepted by year'
                    },  
                    scales: {
                        yAxes: [{
                            scaleLabel: {
                                display: true,
                                labelString: 'People'
                            },
                            ticks: {
                                max: 1000,
                                min: 0,
                                stepSize: 100
                            }
                        }],
                        xAxes: [{
                            scaleLabel: {
                                display: true,
                                labelString: 'Year'
                            }
                        }],
                    }
                }
            });
    }


    return {
        init: initFunction
    }
} ();

$(document).ready(function () {
    Pie.init();
});