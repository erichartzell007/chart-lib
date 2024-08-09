export const data = {
  labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
  datasets: [
    {
      label: 'Data One',
      backgroundColor: '#f87979',
      borderColor: '#563BFF',
      fill: false,
      tension: 0.5,
      data: [17, 8, 13, 5, 25, 4, 8]
    },
    {
      label: 'Data Two ',
      backgroundColor: '#f87979',
      borderColor: '#e03ed0',
      fill: false,
      tension: 0.5,
      data: [7, 18, 3, 19, 5, 14, 18]
    }
  ]
}

export const options = {
  responsive: true,
  scales: {
    x: {
      grid: {
        display: false
      }
    }
  },
  plugins: {
    legend: {
      display: false
    }
  },
  maintainAspectRatio: false
}
