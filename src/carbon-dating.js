const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const LN_2 = 0.693;

module.exports = function dateSample(sampleActivity) {
  if(typeof(sampleActivity) !== "string") {
    return false;
  }
  let sampleActivityNumber = parseFloat(sampleActivity);
  if(isNaN(sampleActivityNumber) || sampleActivityNumber > MODERN_ACTIVITY || sampleActivityNumber <= 0){
    return false;
  }
  return Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivityNumber) * HALF_LIFE_PERIOD / LN_2);
};
