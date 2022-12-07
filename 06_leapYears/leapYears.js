const leapYears = function(year) {
//    if ((!years % 100) == 0) return false;
//    if ((!years % 100) == 0 && (years % 400) == 0) return true;
//    if ((years % 4) == 0 ) return true;
//    console.log(years);
//  My first thought on how to do this

    return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
};

// Do not edit below this line
module.exports = leapYears;
