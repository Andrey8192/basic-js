const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(!date){
    return 'Unable to determine the time of year!';
  }
  if(Object.prototype.toString.call(date).slice(8, -1) !== 'Date') {
    throw new Error();
  }
  var month = date.getMonth();
  return month < 2 || month > 10 ? 'winter' :
    month < 5 ? 'spring' :

    month < 8 ? 'summer' : 'autumn';
};
