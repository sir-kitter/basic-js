const CustomError = require("../extensions/custom-error");

const toString = value => value === undefined ? ''
  : value === null ? 'null'
  : value.toString()

const repeater = (string, options) => {
  let str = typeof string === 'string' ? string : toString(string)
  if(options == undefined) return str
  
  const repeatTimes = options.hasOwnProperty('repeatTimes') ? options.repeatTimes: 0
  const separator = options.hasOwnProperty('separator') ? toString(options.separator) : '+'
  const addition = options.hasOwnProperty('addition') ? toString(options.addition) : ''
  const additionRepeatTimes = options.hasOwnProperty('additionRepeatTimes') ? options.additionRepeatTimes : 0
  const additionSeparator = options.hasOwnProperty('additionSeparator') ? toString(options.additionSeparator) : '|'

console.log('str', string, 'opt', options, 'rt', repeatTimes, 'ad', addition, 'ad', options.addition, 'art', additionRepeatTimes, 'asep', additionSeparator, '(sep:'+separator+'-'+options.separator+')', Array(repeatTimes)
.fill(str + Array(additionRepeatTimes).fill(addition).join(additionSeparator))
.join(separator))

  return Array(repeatTimes).fill(str + Array(additionRepeatTimes).fill(addition).join(additionSeparator))
    .join(separator)
}

module.exports = repeater