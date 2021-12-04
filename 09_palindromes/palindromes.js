const palindromes = function (string) {
    string = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~() ]/g,"");
    string = string.toLowerCase();
    return string == string.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
