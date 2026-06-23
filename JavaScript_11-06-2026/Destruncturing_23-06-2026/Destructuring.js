

let colors = ["red","yellow","blue"];

let [first , second , third ] = colors;

console.log(colors);

console.log(first);
console.log(second);
console.log(third);

// rest operator

let marks = [34,45,56,67,86];

let [first1 , second1 ,...remainig] = marks;

console.log(first1);
console.log(second1);
console.log(remainig);

console.log(marks);

//object destructuring 


let student = {

    name : "chandra",
    age : 23,
    role : "ASE"
}

let {name,age,role} = student;

console.log(student);

console.log(name);
console.log(age);
console.log(role);


let emp = {

    empid : 1,
    empname : "chandra"
};

let {empid : id ,empname : name1} = emp;

console.log(id);
console.log(name1);

console.log(emp)

//nested object

let person = {

    name2 : "chandra",
    address : {

        city : "atp",
        state : "AP"
    }
};

let {name2 ,  address:{city,state}} = person;

console.log(name2);
console.log(city);
console.log(state);
console.log(person);

