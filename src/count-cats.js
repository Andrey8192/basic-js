const CustomError = require("../extensions/custom-error");

module.exports = function countCats(array) {
  var counter = 0;
  for(let arr of array) {
    for(let a of arr) {
      if(a === "^^"){
        counter++;
      }
    }
  }
  return counter;
};
