export const data = {
  labels: ['M', 'T', 'W', 'T', 'F', 'S'],

  datasets: [
    {
      label: 'Data One',
      backgroundColor: 'transparent',
      borderColor: '#563BFF',
      fill: false,
      showDots: false,

      tension: 0.5,
      data: [4, 38, 18, 12, 34, 19]
    }
  ]
}

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false
    }
  },
  scales: {
    x: {
      ticks: {
        display: false
      },
      border: {
        display: false
      },
      grid: {
        display: false
      }
    },
    y: {
      ticks: {
        display: false
      },
      border: {
        display: false
      },
      grid: {
        display: false
      }
    }
  }
}
