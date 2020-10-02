const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const fakeLn2 = 0.693
const k = fakeLn2 / HALF_LIFE_PERIOD

dateSample = sampleActivity => {
    if (typeof sampleActivity !== 'string' || !sampleActivity || isNaN(sampleActivity)) return false;

    const N0 = parseFloat(sampleActivity)
    if (isNaN(N0) || N0 <= 0 || N0 > MODERN_ACTIVITY) return false;

    const t = Math.log(MODERN_ACTIVITY / N0) / k

    //console.log(t)
    return Math.ceil(t)
}

module.exports = dateSample