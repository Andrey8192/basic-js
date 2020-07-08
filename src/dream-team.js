const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(members === null || typeof(members) !== 'object' || members.length === undefined) {
    return false;
  }
  return members
    .filter(x => typeof(x) === 'string')
    .map(x => x.split('').find(s => !/\s/.test(s)))
    .filter(x => x)
    .map(x => x.toUpperCase())
    .sort()
    .join('');
};