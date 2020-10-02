const CustomError = require("../extensions/custom-error");

const transform = array => {
  if(!Array.isArray(array)) throw 'parameter is not array'

  const map = Array(array.length).fill(1)
  for(let i = 0; i < array.length; ++i) {
    switch(array[i]) {
      case '--discard-next':
        if(i + 1 < array.length) --map[i + 1]
        map[i] = 0
        break
      case '--discard-prev':
        if(i - 1 >= 0) --map[i - 1]
        map[i] = 0
        break
      case '--double-next':
        if(i + 1 < array.length && map[i + 1] > 0) ++map[i + 1]
        map[i] = 0
        break
      case '--double-prev':
        if(i - 1 > 0 && map[i - 1] > 0) ++map[i - 1]
        map[i] = 0
        break
    }
  }
  const result = map.reduce((result, value, index) => result.concat(Array(value > 0 ? value : 0).fill(array[index])), [])
  return result
}

module.exports = transform