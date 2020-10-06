/* const square = function(x) {
    return x * x;
};

// const squareArrow = (x) => {
//    return x * x;
//};

const squareArrow = (x) => x * x;

console.log(squareArrow(4)); */

/* const fullName = 'Radka Tesarova';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName); */

/* const getFirstName = (fullName) => {
    let firstName;

    fullName ? (firstName = fullName.split(' ')[0]) : undefined;

    return firstName;
} */

const getFirstName = (fullName) => fullName ? fullName.split(' ')[0] : undefined;

console.log(getFirstName('Radka Tesarova'));