const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    if(date == undefined) return 'Unable to determine the time of year!'
    if(!(date instanceof Date) || isNaN(date)) throw 'Error'

    const month = date.getMonth()
    return month >= 2 && month <= 4 ? 'spring'
        : month >= 5 && month <= 7 ? 'summer'
        : month >= 8 && month <= 10 ? 'autumn'
        : 'winter'
}
