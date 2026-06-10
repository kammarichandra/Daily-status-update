// object 
// it is collection of data
// functionality stored as key value pairs 
// it is used to represent the real worls entites such as users , products

let obj = {
    name: "chandra",
    age: 23,
    city: "banglore"
};

// accessing obj 
//.notation
console.log(obj.name);
console.log(obj.age);
console.log(obj.city);
console.log(obj);

//[] notation
//bracket notation is useful for when the property name is stored in variable 

let key = "name";

console.log(obj[key]);

// adding properties 

obj.email = "chandra@gmail.com";
console.log(obj);

//updating 

obj.age = 34;

console.log(obj);


//deleting 

delete obj.city;

console.log(obj)

//obj with methods 

let person = {
    name: "chandra",
    hai: function () {
        console.log("hello!");
    }
};
person.hai();

//using this 

let person1 = {
    name: "chandra",
    age: 23,

    intro() {
        console.log(`my name is ${this.name} and i am ${this.age} old`)
    }
}

person1.intro();

// using loops 

let person2 = {
    name: "chandra",
    age: 25,
    city: "banglore"
};

for (let key in person2) {

    console.log(key, person2[key]);
}

let emp = {
    id: 101,
    name: "chandra sekhar",

    address: {
        city: "banglore",
        state: "karnataka"
    }
};
console.log(emp.address.city);
console.log(emp.address.state);
console.log(emp);

// real word example 

let stu = {

    id: 101,
    name: "rahul",
    marks: [45, 67, 88, 99],

    getAverage() {
        let total = 0;

        this.marks.forEach(mark => {
            total += mark;
        });

        return total / this.marks.length;
    }
};

console.log(stu.getAverage());

// objects using diff roles 

let person3 = {
    name: "chandra",
    age: 25,
    great() {
        console.log("heloo!");
    }
};

console.log(person3.name);
person3.great();


// using new oject 

let per = new Object();

per.name = "chandra";
per.age = 25;

console.log(per);

//using constructor function

function person5(name, age) {
    this.name = name;
    this.age = age;
}

let person6 = new person5("chandra", 24)
let person7 = new person5("chandra", 22)

console.log(person6);
console.log(person7);

// using factory funtion 
// a function which return object

function createPerson(name,age){
    return{
        name,
        age,
        fun(){
            console.log(`hi iam ${name}`);
        }
    };
}

let per1 = createPerson("chandra",24);

per1.fun();



// object manipulation

//obj with methods 

let student = {
    name : "chandra",
    age : 24,

    kcs(){
        console.log(`hello my name is ${this.name}`);

    },
    birthday(){
        this.age++;
        console.log(`i am now ${this.age} years old `);
    }
};

student.kcs();
student.birthday();

//adding properties in method 

let car = {
    brand : "suzuki",
    price : 30000
};
car.color = "red";

car.display = function(){
    console.log(`${this.brand} ${this.price} ${this.color}`);
};

car.display();

//updating 

let stu1 = {
    name : "chandra",
    age : 22
}

stu1.role = "ase";
stu1.marks = 76
delete stu1.marks;
console.log(stu1);

//using loop 

let products = {
    id : 101,
    name : "laptop",
    price : 20000
};

for(let key in products){
    console.log(`${key} : ${products[key]}`)
}

//obj with multiple methods 

let account = {
    name : "chandra",
    balance : 30000,

    deposite(amount){
        this.balance += amount;

        console.log(`deposited ${amount}`)
    },

    withdraw(amount){
        if(amount<=this.balance){
            this.balance -= amount;
            console.log(`withdraw ${amount}`);
        }
    },

    checkbalance(amount){
        console.log(`balance : ${this.balance}`);
    }
};
account.deposite(10000);
account.withdraw(2000);
account.checkbalance();