const reverseString = function(word) {
    const letters = word.split('');
    const reversedArr = letters.reverse();
    const reversedStr = reversedArr.toString();
    return reversedStr.replaceAll(',' , '');
};

// Do not edit below this line
module.exports = reverseString;
