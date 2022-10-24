const reverseString = function(word) {
    // let letters = [];
    let newWord = word;
    let letters = Array.from(newWord);
    let reversedArray = letters.reverse();
    return finalWord = reversedArray.toString();
};

// Do not edit below this line
module.exports = reverseString;
