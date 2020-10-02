const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length
  },
  addLink(value = '') {
    this.chain.push(this.getStringValue(value))
    return this
  },
  removeLink(position) {
    if(position <= this.chain.length && position > 0 && !isNaN(position) && Number.isInteger(position)) {
      this.chain.splice(position - 1, 1)
    }
    else {
      this.clear()
      throw 'wrong position'
    }
    return this
  },
  reverseChain() {
    this.chain.reverse()
    return this
  },
  finishChain() {
    if(this.chain.length === 0) return ''
    const result = '( ' + this.chain.join(' )~~( ') + ' )'
    this.clear()
    return result
  },
  clear() {
    this.chain = []
  },
  getStringValue(value) {
    return value == null ? 'null'
      : value.toString()
  }
}

module.exports = chainMaker

