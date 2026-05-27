

// object 

let stu = {
    name : "chandra sekhar",
    age : 22,
    role : "ASE"
}

console.log(stu);
console.log(stu.name);
console.log(stu.role);

// Array 

let arr  = ["apple","banana","orange","pineapple"]

console.log(arr);
console.log(arr[0]);
console.log(arr[2]);


// function 

function great(){
    console.log("welcome to nyb");
}
great();

// referance 

let person = {
    name : "chandra"
};

let person1 = person

person1.name = "ramesh";

console.log(person.name);
console.log(person1.name);

// nested object

let emp = {
    id : 101,
    details :{
        name : "rahul",
        department : "it"
    }
};
console.log(emp.details.name);
console.log(emp.details)

// array objects 

let emp1 = [
    {name : "ram", sallary : 20000},
    {name : "chandra", sallary : 20000},
]
console.log(emp1)
console.log(emp1[0])

// storing in variable

let add = function(a,b){
    return a+b;
};
console.log(add(10,20))