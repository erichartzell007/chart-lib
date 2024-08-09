export const data = {
  labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],

  datasets: [
    {
      label: 'Bitcoin',
      backgroundColor: '#E03ED0',
      hoverBackgroundColor: '#E03ED0',
      borderRadius: 12,

      data: [6, 9, 24, 18, 14, 8, 9]
    },
    {
      label: 'Etherum',
      backgroundColor: '#6149CC',
      hoverBackgroundColor: '#6149CC',
      borderRadius: 12,

      data: [23, 19, 14, 8, 9, 15, 7]
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
  }
}
