
const caesar = function(message, key) {
    cipher = "";
    for (let i = 0; i < message.length; i++) {

        let char = message.charCodeAt(i);
        if (char >= 65 && char <= 90) {
            char = (((char - 65 + key + 26 ) % 26) + 65);
        } else if (char >= 97 && char <= 122) {
            char = (((char - 97 + key + 26) % 26) + 97);
        }
    
        cipher += String.fromCharCode(char)
    }

    return cipher;
};

// Do not edit below this line
module.exports = caesar;
