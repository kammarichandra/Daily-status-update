let obj3 = {
    name: "chnadra",
    age: 23,
    gender: "male",
    mobile_num: 123456789
}

let keys = Object.keys(obj3);
console.log(keys)

// using looping

let product3 = {
    name: "laptop",
    price: 40000,
    brand: "dell"
};

let keys1 = Object.keys(product3);

keys1.forEach(key => {
    console.log(key)
});

// 2.obj values

let obj4 = {
    name: "chnadra",
    age: 23,
    gender: "male",
    mobile_num: 123456789
}

let keys2 = Object.values(obj4);
console.log(keys2)

// calculating total value 

const marks = {
    math: 90,
    science: 85,
    english: 80
};

const values = Object.values(marks);

let total = 0;

for (let i = 0; i < values.length; i++) {

    total += values[i];
}

console.log(total);

// finding largest value 

let scores = {
    Rahul: 85,
    Arjun: 92,
    Amit: 78,
    Ravi: 95
}

let values1 = Object.values(scores);

let highest = Math.max(...values1);

console.log(highest);