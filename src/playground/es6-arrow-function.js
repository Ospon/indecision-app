const square = function (x) {
    return x * x;
};

// const squareArrow = (x) => {
//    return x * x;
// };

const squareArrow = (x) => x * x;

console.log(square(8));
console.log(squareArrow(8));

const fullName = 'Radka Tesarova';
const getFirstName = (fullName) => {
    return fullName.split(' ')[0];
}

console.log(getFirstName(fullName));


const getFirstNameTwo = (fullName) => fullName.split(' ')[0];

console.log(getFirstNameTwo(fullName));