let ctx = document.getElementById('mychart');
let myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [
      {
        label: 'Red',
        data: [2, 3.5, 4, 3, 4.5, 3.5, 4.0],
        borderColor: '#f88',
      },
      {
        label: 'Green',
        data: [2, 1.5, 3, 2.5, 3, 4, 3.5],
        borderColor: '#484',
      },
      {
        label: 'Blue',
        data: [3, 2.5, 1, 5, 2.5, 3, 2],
        borderColor: '#48f',
      },
    ],
  },
  options: {
    y: {
      min: 0,
      max: 10,
    },
  },
});
