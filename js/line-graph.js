var canvas = document.getElementById('nz-chart'),
    ctx = canvas.getContext('2d'),
    startingData = {
      labels: [2006, 2007],
      datasets: [
          {
              label: "NZ Quota",
              backgroundColor: "rgba(44, 62, 80,0)",
              borderColor: "rgb(46, 204, 113)",
              borderWidth:1,
              data: [178, 177, 175, 173, 172, 171, 170, 168, 165, 163]
           },
          {
              label: "NZ Refugees",
              backgroundColor: "rgba(52, 152, 219,0)",
              borderColor: "rgb(52, 152, 219)",
              borderWidth:1,
              data: [176, 262, 233, 240, 261, 199, 304, 316, 279, 381]
          },
          // {
          //     label: "NZ Migrants",
          //     backgroundColor: "rgba(25, 181, 254,0)",
          //     borderColor: "rgb(246, 36, 89)",
          //     borderWidth:1,
          //     data: [5664,12129,12079,11339,11469,10889,10209,10244,11428,11958]
          // }
      ],
    },
    latestLabel = startingData.labels[0];

var myLineChart = new Chart(ctx, {
    type: 'line',
    data: startingData,
    options: {
      responsive: true,
      maintainAspectRatio: true,
      title: {
          display: true,
          text: 'New Zealand Refugee-to-Quota Comparison (per 1m population)'
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

var interval;
var hasStarted = false;

var observer = new MutationObserver(function(mutations) {
    if (hasStarted) return;
    hasStarted = true;
    interval = setInterval(function(){
    var newLabel = startingData.labels[startingData.labels.length-1] + 1;
    startingData.labels.push(newLabel);
    myLineChart.update(3000);
    if (newLabel == "2015") {
      clearInterval(interval);
    };
  }, 2000);
});

observer.observe(document.querySelector('#watcher'), {
    attributes: true
});

