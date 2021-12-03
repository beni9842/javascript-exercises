const sumAll = function(a, b) {
    if (typeof a == 'number' && typeof b == 'number') {
        if (0 <= a && 0 < b) {
            let sum = 0;
            if (a > b) {
                [a,b] = [b,a];
            }
            for (let i = a; i <= b; i++) {
                sum += i;
            }
            return sum;
        } else {
            return 'ERROR';
        }
    } 

    return 'ERROR';
};

// Do not edit below this line
module.exports = sumAll;
