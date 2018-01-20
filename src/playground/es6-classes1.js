class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getDescription() {
        return `${this.name} is ${this.age} years old`;
    }
    getGreeting() {
        return 'Hi! '+this.name+'!';
    }
}

class Student extends Person{
    constructor(name, age, major = 'NA') {
        super(name, age);
        this.major = major;
    }
    getDescription() {
        return `${this.name} majors in ${this.major} and has age ${this.age}`
    }
}

class Traveller extends Person {
    constructor(name, homeLocation) {
        super(name);
        this.homeLocation = homeLocation;
    }
    getDescription() {
        return `Hi! This is ${this.name}. His home Location is: ${this.homeLocation}`;
    }
}

const me = new Person('Siddharth Lanka', 21);
console.log(me.getGreeting());
console.log(me.getDescription());
const other = new Person();
console.log(other.getGreeting());
console.log(other.getDescription());

const sid = new Student('Siddharth Lanka', 21, "Computer Science");
console.log(sid.getDescription());

const tra = new Traveller('Siddharth Lanka', 'Bangalore');
console.log(tra.getDescription());
