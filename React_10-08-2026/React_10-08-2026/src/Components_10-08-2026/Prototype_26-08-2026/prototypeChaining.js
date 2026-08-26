let person = {

    name : "chandra",

    fun(){
        console.log("helloo world")
    }
}

let per = Object.create(person);
let child = Object.create(person);

child.fun();

// with properties 

let pro3 ={
    name : "chandra",

    fun(){
        console.log(this.name);
    }
}

let parent = Object.create(pro3);
let parent1 = Object.create(pro3);
let parent2 = Object.create(pro3);
let parent3 = Object.create(pro3);

parent3.fun();


// prototype 

function User(name) {
  this.name = name;
}

User.prototype.login = function () {
  console.log(this.name + " logged in");
};

// const user1 = new user("Ravi");
// const user2 = new user("Kiran");
const user3 = new User("kcs")

// user1.login();
// user2.login();
user3.login();
console.log(user3.__proto__);

const person3 = {
  name: "Ravi"
};

console.log(person3.__proto__);
//it will check the person object
console.log(person.__proto__ === Object.prototype);
// it will check in person obj name is there are not 
console.log(person.hasOwnProperty("name"));

console.log(person.hasOwnProperty("age"));
console.log(person.hasOwnProperty("toString"));
console.log(person.toString);
console.log(person.toString());
// person.someRandomFunction();
//value of()
console.log(person.valueOf());
// isprototypeof
console.log(Object.prototype.isPrototypeOf(person));


// constructure function 

function Ab(name, id, price) {
    this.name = name;
    this.id = id;
    this.price = price;
}

Ab.prototype.getPrice = function () {
    return this.price;
};

let Laptop = new Ab(
    "Laptop",
    1,
    20000
);

let Laptop1 = new Ab(
    "Laptop",
    2,
    25000
);

console.log(Laptop1);
console.log(Laptop1.getPrice());


function fun(name){
    this.name = name;
    
}

fun.prototype.login1 = function(){

    console.log(this.name + " logined");

}

let fun1 = new fun("chandra");
let fun2 = new fun("sekhar");

// fun1.login1()
// let a2 {

// phone : ""
// age : 

// }
// let a = a.eventbubling();