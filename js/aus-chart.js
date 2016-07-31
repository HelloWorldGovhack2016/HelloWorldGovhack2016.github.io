var canvasTwo = document.getElementById('aus-chart'),
    ctxTwo = canvasTwo.getContext('2d'),
    startingDataTwo = {
      labels: [2006, 2007],
      datasets: [
        {
            label: "Australian Quota",
            backgroundColor: "rgba(134, 226, 213,0)",
            borderColor: "rgb(46, 204, 113)",
            borderWidth:1,
            data: [293, 288, 282, 277, 272, 269, 527, 259, 254, 251]
        },
        {
            label: "Australian Refugees",
            backgroundColor: "rgba(0, 177, 106,0)",
            borderColor: "rgb(52, 152, 219)",
            borderWidth:1,
            data: [625, 605, 631, 634, 626, 616, 879, 594, 583, 583]
        },
        // {
        //     label: "Australian Migrants",
        //     backgroundColor: "rgba(54, 215, 183,0)",
        //     borderColor: "rgb(246, 36, 89)",
        //     borderWidth:1,
        //     data: [8792, 9214, 9692, 10355, 9483, 9553, 10774, 10985, 10123, 10123]
        // }
      ]
    },
    latestLabel = startingDataTwo.labels[0];

var ausLineChart = new Chart(ctxTwo, {
    type: 'line',
    data: startingDataTwo,
    options: {
      responsive: true,
      maintainAspectRatio: true,
      title: {
          display: true,
          text: 'Australian Refugee-to-Quota Comparison (per 1m population)'
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

var intervalTwo = setInterval(function(){
  var newLabelTwo = startingDataTwo.labels[startingDataTwo.labels.length-1] + 1;
  startingDataTwo.labels.push(newLabelTwo);
  ausLineChart.update(3000);
  if (newLabelTwo == "2015") {
    clearInterval(intervalTwo);
  };
}, 2000);