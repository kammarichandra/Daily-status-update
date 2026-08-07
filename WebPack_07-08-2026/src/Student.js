export class Student {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }


    introduce() {
        return `My name is ${this.name} and I am ${this.age} years old`;
    }

}