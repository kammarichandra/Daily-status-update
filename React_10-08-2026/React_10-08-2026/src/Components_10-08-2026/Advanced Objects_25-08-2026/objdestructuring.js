// with destructuring 

let obj = {

    name : "chandra",
    age : 23,
    gender : "male",
    role : "ase"
}

let {name,age,gender,role} = obj;

console.log("with destructuring : ", obj);

// without destructuring 

let obj1 ={
    name :"sekahr",
    age : 23,
    gender : "male",
    role : "ai"
}

console.log("without destructuring : ")
console.log(obj1.name)
console.log(obj1.age)
console.log(obj1.gender)
console.log(obj1.role)

let product = {
  name: "Laptop",
  price: 50000
};

let {name :productName , price :productPrice  } = product

console.log(productName);
console.log(productPrice);

// defult value 

let obj2 = {
    name1 : "rahul",
    age1 : 23
}

let {name1,age1,city1= "atp"} = obj2

console.log(obj2)
console.log(city1);

// obj method

let person1 = {
    name : "chandra sekahr",
    fun(){
        console.log("welcome to nyb",this.name);
    }
}
person1.fun();


const person2 = {
  name: "Rahul",
  age: 25,

  introduce() {
    console.log(`My name is ${this.name}`);
    console.log(`I am ${this.age} years old`);
  }
};

person2.introduce();

// calculating values 

const calculator = {
  num1: 20,
  num2: 10,

  add() {
    return this.num1 + this.num2
  },

  multiply() {
    return this.num1 * this.num2
  }
};

console.log(calculator.add());
console.log(calculator.multiply());