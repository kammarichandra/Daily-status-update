//using same function diffrent obj

function displayName(){
    console.log(this.name);
}

let obj = {
    name : "chandra"
}
let obj1 ={
    name : "sekhar"
}

displayName.call(obj);
displayName.call(obj1);

//method borrowing 

let emp = {
    name :"ramesh",

    intro(){
        console.log(`hi ${this.name}`);
    }
};

let manager = {
    name:"priya"
};
emp.intro.call(manager);

// calculation function

function calculate(rate){
    console.log(`${this.product} : ${this.price*rate}`);
}
let laptop = {
    product : "laptop",
    price : 20000
};

let mobile = {
    product : "phone",
    price : 30000
}

calculate.call(laptop,0.34);
calculate.call(mobile , 0.34);

// switching this inside method 

let stu = {
    name : "chran",

    ShowNmae(){
        console.log(this.name);
    }
}

let teacher = {
    name : "vasanth"
};

stu.ShowNmae();
stu.ShowNmae.call(teacher);

// changing this with bind 

function fun(){
    console.log(`hello ${this.name}`);
}
let user4 = {
    name : "chandra"
};

let getfun = fun.bind(user4);

getfun();


// demostrating referace of this 

function book(){

    console.log(this.name);
}

let pasenger ={
    name : "candra"
}
let pasenger1 = {
    name : "sekahr"
}

book.apply(pasenger);
book.call(pasenger1);


// bank account opoerations

function deposite(amount){
    this.balance += amount;
    console.log(`balance : ${this.balance}`)
}

let account ={
    balance :20000
}
let account1 = {
    balance : 40000
}
deposite.call(account,30000);
deposite.call(account1,40000);

// method borrowing 

let student = {
    name : "rahul",

    fix(){
        console.log(`hi , i am ${this.name}`);
    }
};
let man = {
    name : "ramesh"
};

student.fix.call(man);
// student.fix.call(student)


// using apply 

function travel(city,country){
    console.log(`${this.name} is travelling ${city} to ${country}`);
}

let person4 = {
     name : "govind"
}

travel.apply(person4,["hyd","uk"]);

//using bind 

function don(){
    console.log(`hello ${this.name}`);
}

let user5 = {
     name : "naga"
};

let getdon = don.bind(user5);

getdon();

//shoping cart

function additeam(item){
    this.items.push(item)
}

let cart ={
    items :[]
};

let cart1 = {
    items : []
};

additeam.call(cart,"laptop");
additeam.call(cart1,"iphone");

console.log(cart.items);
console.log(cart1.items);