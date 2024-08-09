const labels = ['Bitcoin', 'Etherum', 'Binance']
const backgroundColor = ['#E03ED0', '#FEAB5F', '#6149CC']

export const info = labels.map((label, index) => {
  return {
    label,
    backgroundColor: backgroundColor[index],
    amount: Math.floor(Math.random() * 100) + '.' + Math.floor(Math.random() * 100)
  }
})

export const data = {
  labels: [...labels],
  datasets: [
    {
      backgroundColor: [...backgroundColor],
      hoverBackgroundColor: [...backgroundColor],
      data: [20, 20, 80],

      borderWidth: 0,
      cutout: '80%'
    }
  ]
}

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false
    }
  },
  maintainAspectRatio: false
}
