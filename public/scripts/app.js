'use strict';

var square = function square(x) {
    return x * x;
};

// const squareArrow = (x) => {
//    return x * x;
// };

var squareArrow = function squareArrow(x) {
    return x * x;
};

console.log(square(8));
console.log(squareArrow(8));

var fullName = 'Radka Tesarova';
var getFirstName = function getFirstName(fullName) {
    return fullName.split(' ')[0];
};

console.log(getFirstName(fullName));

var getFirstNameTwo = function getFirstNameTwo(fullName) {
    return fullName.split(' ')[0];
};

console.log(getFirstNameTwo(fullName));
