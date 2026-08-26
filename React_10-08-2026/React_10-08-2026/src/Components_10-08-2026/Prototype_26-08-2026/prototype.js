let obj = {
    fun(){
        console.log("heloo");
    }
};

let pro = Object.create(obj);

pro.fun();

// with property 

let obj1 = {
    name : "chandra",

    fun(){
        console.log("welcome to nyb");
    }
};

let pro1 = Object.create(obj1);

pro1.fun();
console.log(pro1.name)

// overiding

let obj2 = {
    name : "sekar",
    fun(){
        console.log("hello kcs")
    }
};

let pro2 = Object.create(obj2);

pro2.name = "rahul";

pro2.fun();
console.log(pro2.name);

// multiple obj 

let mul = {
    name : "rohit",

    hello(){
        console.log(`hi ${this.name} how are you`);
    },
    bye(){
        console.log(`take care ${this.name} bye....`)
    }
}
let ro = Object.create(mul);

ro.hello();
ro.bye();