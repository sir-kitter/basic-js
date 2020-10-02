const CustomError = require("../extensions/custom-error");

const letter2code = letter => letter.toUpperCase().charCodeAt(0) - 'A'.charCodeAt(0)
const code2letter = code => String.fromCharCode(code + 'A'.charCodeAt(0))

class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct
  }
  encrypt(message, key) {
    if (typeof message !== 'string' || typeof key !== 'string') {
      throw 'all parameters have to be defined'
    }
    if(key.length === 0) return message.toUpperCase()

    const upperKey = key.toUpperCase().split('').map(char => char.charCodeAt(0) - 'A'.charCodeAt(0))
    let nonletterCount = 0
    return message.toUpperCase().split('').reduce((encoded, letter, index) => {
      const isLetter = letter.match(/[A-Z]/)
      if(!isLetter) ++nonletterCount
      const encodedLetter = isLetter ?
        code2letter((letter2code(letter) + upperKey[(index - nonletterCount) % upperKey.length]) % 26)
        : letter
      return this.direct ? encoded + encodedLetter : encodedLetter + encoded
    }, '')
  }    
  decrypt(message, key) {
    if (typeof message !== 'string' || typeof key !== 'string') {
      throw 'all parameters have to be defined'
    }
    if(key.length === 0) return message.toUpperCase()

    const upperKey = key.toUpperCase().split('').map(char => char.charCodeAt(0) - 'A'.charCodeAt(0))
    let nonletterCount = 0
    return message.toUpperCase().split('').reduce((encoded, letter, index) => {
      const isLetter = letter.match(/[A-Z]/)
      if(!isLetter) ++nonletterCount
      const encodedLetter = isLetter ?
        code2letter((26 + letter2code(letter) - upperKey[(index - nonletterCount) % upperKey.length]) % 26)
        : letter
      return this.direct ? encoded + encodedLetter : encodedLetter + encoded
    }, '')
  }
}

module.exports = VigenereCipheringMachine;
