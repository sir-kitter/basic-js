const CustomError = require("../extensions/custom-error");

const createDreamTeam = members => {
  if(!Array.isArray(members)) return ''

  return members
    .reduce((teamName, name) => typeof name === 'string' && name.length ? teamName.concat(name.trimLeft()[0].toUpperCase()): teamName, [])
    .sort((lesser, greater) => lesser.charCodeAt(0) - greater.charCodeAt(0))
    .join('')
}

module.exports = createDreamTeam
