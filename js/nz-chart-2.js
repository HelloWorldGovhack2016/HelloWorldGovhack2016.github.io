var canvas3 = document.getElementById('nz-chart-2'),
    ctx2 = canvas3.getContext('2d'),
    startingData3 = {
      labels: [2006, 2007],
      datasets: [
          {
              label: "NZ Refugees",
              backgroundColor: "rgba(52, 152, 219,0)",
              borderColor: "rgb(52, 152, 219)",
              borderWidth:1,
              data: [738,1110,994,1037,1142,875,1346,1413,1266,1756]
          },
          {
              label: "NZ Migrants",
              backgroundColor: "rgba(25, 181, 254,0)",
              borderColor: "rgb(246, 36, 89)",
              borderWidth:1,
              data: [23803,51426,51638,49036,50102,47866,45133,45758,51917,55105]
          }
      ],
    },
    latestLabel3 = startingData3.labels[0];

var myLineChart3 = new Chart(ctx2, {
    type: 'line',
    data: startingData3,
    options: {
      responsive: true,
      maintainAspectRatio: true,
      title: {
          display: true,
          text: 'New Zealand Migrant-to-Refugee Comparison'
      },
      scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'People'
          },
          ticks: {
            max: 60000,
            min: 0,
            stepSize: 5000
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


(function() {
  var interval;
  var hasStarted = false;

  var observer = new MutationObserver(function(mutations) {
      if (hasStarted) return;
      hasStarted = true;

      interval = setInterval(function(){
          var newLabel3 = startingData3.labels[startingData3.labels.length-1] + 1;
          startingData3.labels.push(newLabel3);
          myLineChart3.update(3000);
          if (newLabel3 == "2015") {
            clearInterval(interval);
          };
      }, 2000);

  });

  observer.observe(document.querySelector('#diff-watcher'), {
      attributes: true
  });
})();