const sumAll = function(min,max) {
    // First attempt. It worked but only for small, large numbers. Not in reverse or negative.
    // var list = [];
    // for (var i = lowEnd; i <= highEnd; i++) {
    //     list.push(i);
        
    // };
    // const sum = list.reduce((partialSum, a) => partialSum + a, 0);
    // return sum;

    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
    if (min < 0 || max < 0) return "ERROR";
    if (min > max) {
        const temp = min; 
        min = max;
        max = temp;
    }
    let sum = 0;
    for (let i = min; i < max + 1; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
