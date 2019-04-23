/* class Person {
    constructor(name = 'Anonymous') {
        this.name = name;
    }
    getGtreeting() {
        // return 'Hi. I am ' + this.name + '!';
        return `HI. I am ${ this.name }!`;
    }
}

const me = new Person('Konstantin Torkhov');
console.log(me.getGtreeting());

const other = new Person();
console.log(other.getGtreeting()); */


class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGtreeting() {
        return `HI. I am ${ this.name }!`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person {
    constructor(name, age , major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += ` Their major is ${this.major}`;
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    hasHomeLocation() {
        return !!this.homeLocation;
    }
    getGtreeting() {
        let greeting = super.getGtreeting();

        if (this.hasHomeLocation()) {
            greeting += ` I'm visiting from ${this.homeLocation}.`;
        }
        return greeting;
    }    
}


const me = new Traveler('Konstantin Torkhov', 28, 'Brno');
console.log(me.getGtreeting());

const other = new Traveler();
console.log(other.getGtreeting());


