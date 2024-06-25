import _ from 'lodash';

export function sum(a, b) {
    return a + b;
}

export function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
}

export function reverseString(str) {
    return str.split("").reverse().join("");
}

export const Calculator = {
    add: function (a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    },
    divide(a, b) {
        return a / b;
    },
    multiply(a, b) {
        return a * b;
    }
}


export function caesarCipher(inputString, shift) {
    const shiftedString = _.map(inputString, char => shiftChar(char, shift)).join('');
    return shiftedString;
}

function shiftChar(char, shift) {
    if (!isLetter(char)) {
        return char;
    }

    const charCode = char.charCodeAt(0); // Get ASCII value of the character
    let baseCharCode, startIndex;

    if (isUpperCase(char)) {
        baseCharCode = 'A'.charCodeAt(0);
        startIndex = 0;
    } else {
        baseCharCode = 'a'.charCodeAt(0);
        startIndex = 26; // Offset for lowercase letters
    }

    let shiftedCharCode = ((charCode - baseCharCode + shift) % 26 + 26) % 26 + baseCharCode; // Adjust for wrapping
    const shiftedChar = String.fromCharCode(shiftedCharCode); // Convert ASCII value back to character

    return shiftedChar;
}

function isUpperCase(char) {
    return char >= 'A' && char <= 'Z';
}

function isLetter(char) {
    return /^[a-zA-Z]$/.test(char);
}


export function analyzeArray(arr){
    const object = {
        average: arr.reduce((pre, cur) => pre + cur) / arr.length,
        min: Math.min(...arr),
        max: Math.max(...arr),
        length: arr.length
    }
    return object;
}