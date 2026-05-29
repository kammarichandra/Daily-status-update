
// Map

let student = new Map();

student.set("name","rahul");
student.set("age",21);
student.set("course","JavaScript");

console.log(student.get("name"));

console.log(student.has("age"));

console.log(student.size);

for(let [key , value]of student){
    console.log(key , ":" , value);
}

student.delete("course");

console.log(student);


// weak map

let weekMap = new WeakMap();

let user = {name : "chandra"};
let user1 = {name :"sekhaar" };

//add data

weekMap.set(user,"online");
weekMap.set(user1 , "offline");

console.log(weekMap.get(user));
console.log(weekMap.has(user));
console.log(weekMap.delete(user1));


//set 
let num1 = new Set();

num1.add(10);
num1.add(20);
num1.add(30);
num1.add(40);
num1.add(40);
num1.add(50);

console.log(num1);

console.log(num1.has(10));
console.log(num1.size);
console.log(num1.delete(30));