const getRandomValue = (type, maximum = 100) => {
  if (type == 'single') {
    return Math.floor(Math.random() * maximum)
  } else {
    return Math.floor(Math.random() * maximum) + '.' + Math.floor(Math.random() * maximum * 2)
  }
}

export default getRandomValue
