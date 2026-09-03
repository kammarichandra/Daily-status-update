let student = {
    name: "Rahul",
    age: 21,
    course: "JavaScript"
};

let  keys = Object.keys(student);
let lenghth = Object.keys(student).length;

console.log(lenghth);
console.log(keys);

// values
// it will return all values of an object 
let car = {
    brand: "Toyota",
    model: "Camry",
    year: 2024,
    color: "Black"
}

let values = Object.values(car);
let valueslength = Object.values(car).length;
console.log(valueslength)
console.log(values);

// using loop 

for(let value of values){
    console.log(value);
};

// object entries
// it will return all key , value pairs in the form an array 

let stu = {
    name: "Rahul",
    age: 21,
    course: "JavaScript"
}

console.log(Object.entries(stu));

// optional chaning 
// it allows you to access esisy without showing error if property not existed 
// it is denoted wit ?.

console.log(stu.city?.age);

// nested

let a1 = {
    name : "chandra",
    address : {
        pincode : 124234,
        street : "org"
    }
}
console.log(a1.address.pincode?.city);

let user = {
    name: "Rahul",
    profile: {
        social: {
            instagram: "@rahul"
        }
    }
};

console.log(user.profile?.social?.instagram);
console.log(user.profile?.social?.twitter);


// Nullish Coalescing 
// nullish operator gives you defult value when the assined value become null or undefined 
// it is denoted with ??

let username;

let result = username ?? "guest";

console.log(result);

//optional chaining & nullish coalseaing

let user1 = {
    name: "Rahul",
    address: {
        city: "Hyderabad"
    }
};

let city = user1.address?.city ?? "Unknown";

console.log(city);