const fibonacci = function(x) {
    x = Number(x);
    if (x == 0) {
        return 0;
    } else if (x == 1) {
        return 1;
    } else if (x > 1) {
        return fibonacci(x-1) + fibonacci(x-2);
    } else {
        return 'OOPS';
    }
};

// Do not edit below this line
module.exports = fibonacci;
