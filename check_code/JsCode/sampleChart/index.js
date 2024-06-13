const chart = Highcharts.chart('container', {
  chart: {
    type: 'line',
  },
  title: {
    text: '気温の変化',
  },
  xAxis: {
    title: {
      text: '横軸',
    },
    categories: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00'],
  },
  yAxis: {
    title: {
      text: '気温',
    },
  },
  series: [
    {
      name: 'Jane',
      data: [1, 0, 4, 5, 2, 3],
    },
    {
      name: 'John',
      data: [5, 7, 3, 0, 4, 2],
    },
  ],
});
