const removeFromArray = function() {
    let array = arguments[0];
    let vals = Array.from(arguments).slice(1);

    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        if (vals.indexOf(array[i]) < 0) {
            newArray.push(array[i]);
        }
    }

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
