"use strict";

// Вары можно снова переписать при помощи новой вар. Из-за этого часто можно ошибиться и долго искать ошибку в коде.

var nameVar = 'Mike';
var nameVar = 'Andrew';

console.log('nameVar', nameVar);

// Лет можно дать новое значение, но саму переменную переписать не получиться, выдаст ошибку.
// let + reassign = true
// let + redefine = flase

let nameLet = 'Jen';
nameLet = 'Anna'; 

console.log('nameLet', nameLet);

const constName = 'Frank';

console.log('constName', constName);


// Переменные лет и конст блокируются для чтения внутри тех скобок, где они написаны.

const fullName = 'Radka Tesarova';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);