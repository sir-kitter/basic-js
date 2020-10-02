const CustomError = require("../extensions/custom-error");

class DepthCalculator {
  calculateDepth(array) {
    return Array.isArray(array) ?
      1 + array.reduce((maxDepth, element) => Math.max(maxDepth, this.calculateDepth(element)), 0)
      : 0
  }
}

module.exports = DepthCalculator