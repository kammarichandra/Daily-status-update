// this key word 



console.log(this);


// using object method 

let person = {
    name : "chandra",

    great(){
        console.log(this.name);
    }
};
person.great();

// function call 

// "use strict";
function show(){
    console.log(this);
}
show();

// detached method 

let user = {
    name : "chandra sekhar",
    getname(){
        console.log(this.name);
    }
};

let fun  = user.getname;
fun();

// using call

function hai(){
    console.log(`hello ${this.name}`);
}
let person1 = {name : "chandra sekhar"}

hai.call(person1);

// using apply 

function hai1(city){
    console.log(` ${this.name} from ${city}`);
}
let person2 = {name : "chandra sekhar"}

hai1.apply(person2,["HYD"]);

// using bind 

function kcs(){
    console.log(this.name);
}

let emp = {
    name : "chandra"
};


let rule = kcs.bind(emp);

rule();


// using arrow function

let user2 = {
    name : "ramesh",

    regular(){
        console.log(this.name);
    },
    arrow : ()=>{
        console.log(this.name);//undifined
    }
};
user2.regular();
user2.arrow();

// arrow function inside method

let emp1 = {
    name : "rahul",

    great(){
        let inner = ()=>{
            console.log(this.name);
        };
        inner();
    }
}
emp1.great();

// challages 

let obj = {
    value : 20,
    show(){
        console.log(this.value);
    }
};
obj.show();

//2
let obj1 = {

     value1 :10,

     show1(){
        // let inner = ()=>{
        //     console.log(this.value1);//40
        // }
        // inner();//undifined

        function inner(){
            console.log(this.value1)
        }
        inner();
     }
};
obj1.show1();