const CustomError = require("../extensions/custom-error");

function countCats(matrix) {
  return Array.isArray(matrix) ?
    matrix.reduce((row_acc, row) => Array.isArray(row) ? 
      row_acc + row.reduce((a, v) => v === '^^' ? a + 1 : a, 0)
        : row_acc + (row === '^^' ? 1 : 0)
      , 0)
    : (matrix === '^^' ? 1 : 0)
};

module.exports = countCats