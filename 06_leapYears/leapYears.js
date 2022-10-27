const leapYears = function(year) {
    if (year%4===0) {
        if (year%400===0 && year%100===0) {
            return 1==1;
        }
        else if (year%100===0 && year%400!==0) {
            return 1!=1;
        }
        else {
            return 1==1;
        }
    }
    else if (year%4!==0) {
        return 1!=1;
    }
};

// Do not edit below this line
module.exports = leapYears;
