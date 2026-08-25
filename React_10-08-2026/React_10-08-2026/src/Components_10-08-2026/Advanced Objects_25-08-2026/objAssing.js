let person1 = {
  name: "Rahul"
};

let details = {
  age: 22,
  city: "Vijayawada"
};

Object.assign(person1, details);

console.log(person1);

// merge the obj 

let obj1 ={
    name: "chandra"
};

let obj2 = {
    name : "chandra"
};

let obj3 = {
    name : "rahul"
};

let res = Object.assign({},obj1,obj2,obj3);

console.log(res);

// overriding propereties 

let user = {
  name: "Rahul",
  age: 20
};

let updatedUser = {
  age: 25,
  city: "Hyderabad"
};

let result = Object.assign({}, user, updatedUser);

console.log(result);