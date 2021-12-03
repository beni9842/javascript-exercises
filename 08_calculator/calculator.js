const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
  let sum = 0;
  numbers.forEach(number => {
    sum += number;
  });
  return sum;
};

const multiply = function(numbers) {
  let product = 1;
  numbers.forEach(number => {
    product *= number;
  });
  return product;
};

const power = function(b, e) {
	let product = 1;
  for (let i = 0; i < e; i++) {
    product *= b;
  }
  return product;
};

const factorial = function(x) {
  
  /* non-recursive solution

  product = 1;
  for (let i = 1; i <= x; i++) {
    product *= i;
  }
  return product;

  */

  /* recursive solution */

  if (x == 1 || x == 0) {
    return 1;
  } else {
    return x * factorial(x-1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
