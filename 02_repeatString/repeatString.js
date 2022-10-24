const repeatString = function(string,num) {
    let repeatWord = '';
    if (num<0) {
        repeatWord = 'ERROR';
    }
    else if (string==='') {
        repeatWord = '';
    }
    else {
        for (let j=0; j<num; j++) {
            if (j===0) {
                repeatWord = string;
            }
            else {
                repeatWord += string;
            }
        }
    }
    return repeatWord;
};

// Do not edit below this line
module.exports = repeatString;
