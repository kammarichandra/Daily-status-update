let obj = {
    name : "chandra",
    age: 23,
    gender : "male",
}

let profile = Object.entries(obj);

console.log(profile);

// printing keys and values 

let person = {
    name : "rahul",
    age:24,
    city : "atp"
};

Object.entries(person).forEach(([key, value]) => {
    console.log(key, value);
});

// calculating total marks

let marks = {

    a:10,
    b:33,
    c:44,
    d:88
};

let total = 0;

Object.entries(marks).forEach(([sub,mark])=>{
    total += mark;
});

console.log(total);

let prices = {
  apple: 100,
  banana: 50,
  mango: 120
};

console.log("apple cost : ", prices.apple);
console.log("banana cost : ", prices.banana);
console.log("mango cost : ", prices.mango);
console.log("apple cost : ", prices.apple);