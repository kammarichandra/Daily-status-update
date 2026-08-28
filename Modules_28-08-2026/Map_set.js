


export let students5 = new Map();

students5.set(101, "Chandra");
students5.set(102, "Ravi");
students5.set(103, "Kiran");
students5.set(104, "Chandra");
students5.set(105, "Ravi");
students5.set(106, "Kiran");

//map 

let person = {
    name: "suresh",
}
let person2 = {
    name : "sugunesh"
};

let clients = new Map();

clients.set(person,"developer");
clients.set(person2,"tester");

console.log(clients.get(person))
console.log(clients.get(person2))


let numbers = new Set();

numbers.add(10);
numbers.add(20);
numbers.add(30);
numbers.add(40);
numbers.add(50);
numbers.add(60);

console.log(numbers);

let fruits1 = new Set();

fruits1.add("apple");
fruits1.add("banana");
fruits1.add("mango");
fruits1.add("papaya");
fruits1.add("pinapple");
fruits1.add("kindapple");
fruits1.add("apple");

console.log(fruits1);

let set = new Set([10, 20, 10, 30, 20]);

console.log(set);

// weak map

// syntax : let a = new WeakMap();

// it is alsoo used to store key value pairs 
// it has one rule keys must be in object

let user = {
    name : "chandra",
    age : 23
};

let emp = new WeakMap();

emp.set(user,"devloper");

console.log(emp.get(user));

//weak set 

let user1 = {
    emp : "kcs",
};

let user2 = {
    name : "ravi"
}

let ws = new WeakSet();

ws.add(user1);
ws.add(user2);

console.log(ws.has(user1));

// remove an object 

let weakset = new WeakSet();

let emp1 = {
    name : "rahul"
}
let emp2 = {
    name : "priya"
}

weakset.add(emp1);
weakset.add(emp2);
weakset.delete(emp2);
console.log(weakset.has(emp1));
console.log(weakset.has(emp2));
// weakset.delete(emp2);

let loggedInUsers = new WeakSet();

let user3 = {
    name: "Rahul"
};

let user4 = {
    name: "Priya"
};

loggedInUsers.add(user1);

console.log(loggedInUsers.has(user4)); 
console.log(loggedInUsers.has(user3));

