const removeFromArray = function(originalArray,...args) {
    args.forEach((arg) => {
        const index = originalArray.indexOf(arg);
        if (index > -1) {
            originalArray.splice(index,1);
        }
    });
    return originalArray;
};

// Do not edit below this line
module.exports = removeFromArray;
