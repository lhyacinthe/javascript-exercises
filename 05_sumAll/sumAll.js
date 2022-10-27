const sumAll = function(int1,int2) {
    let finalSum = 0;
    if (int1 < 0 || int2 < 0 || typeof int1 != "number" || typeof int2 != "number") {
        finalSum = "ERROR";
    }
    else if (int2 > int1) {
        for (let i = int1; i <= int2; i++) {
            finalSum += i;
        }
    }
    else if (int1 > int2) {
        for (let i = int2; i <= int1; i++) {
            finalSum += i;
        } 
    }
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
