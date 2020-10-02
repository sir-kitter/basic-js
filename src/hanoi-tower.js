const CustomError = require("../extensions/custom-error");

const calculateHanoi = (disksNumber, turnsSpeed) => {
    const minimumMoveCount = Math.pow(2, disksNumber) - 1
    const seconds = minimumMoveCount * 3600 / turnsSpeed
    return { 'turns': minimumMoveCount, 'seconds': Math.floor(seconds) }
}

module.exports = calculateHanoi