const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(Object.prototype.toString.call(arr).slice(8, -1) !== 'Array') {
    throw new Error();
  }
  let result = [];
  let discard = false;
  let double = false;
  for(let i=0; i<arr.length; i++) {
    if(double && discard) {
      result.push(arr[i]);
      double = false;
      discard = false;
    }
    else if(discard) {
      discard = false;
    }
    else if(double) {
      result.push(arr[i]);
      result.push(arr[i]);
      double = false;
    }
    else if(['--discard-prev', '--double-prev', '--discard-next', '--double-next'].indexOf(arr[i]) < 0) {
      result.push(arr[i]);
    }

    if(arr[i] === '--discard-next' || arr[i+2] === '--discard-prev') {
      discard = true;
    }
    if(arr[i] === '--double-next') {
      double = true;
    }
    if(arr[i] === '--double-prev' && arr[i-2] !== '--discard-next' && result.length > 1) {
      result.push(result[result.length-1]);
    }

  }
  return result;
};
