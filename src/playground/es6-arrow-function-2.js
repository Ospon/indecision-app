// Аргументы не связаны между собой

const add = (a, b) => {
    return a + b;
}

console.log(add(55,1,1001));

// This больше не связано

const user = {
    name: 'Konstantin',
    cities: ['Philadelphia', 'Moscow', 'Prague'],
    printPlacecLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};
console.log(user.printPlacecLived());

const multiplier = {
    numbers: [1, 2, 3, 4, 5],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => this.multiplyBy * number);
    }
};

console.log(multiplier.multiply());

