//Without destructuring 

let student = {
  name: "Chandra",
  age: 21
};

function display(student) {
  console.log(student.name);
  console.log(student.age);
}

display(student);

// with destructuring 

let student = {
  name: "Chandra",
  age: 21
};

function display({ name, age }) {
  console.log(name);
  console.log(age);
}

display(student);