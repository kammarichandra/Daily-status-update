export class User {


    constructor(name, age) {

        this.name = name;
        this.age = age;

    }


    getDetails() {

        return `User: ${this.name}, Age: ${this.age}`;

    }

}