export let fruits = ["Apple", "Banana", "Mango"];

 export let newFruits = [
    ...fruits,
    "Orange"
];

// copying an array 

export let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export let copy = [...num];

copy.push(50);

// merge
 export function arr() {
    let boys = ["Chandra", "Ravi"];
    let girls = ["Priya", "Anu"];

    let students = [...boys, ...girls]

    return students;
}

// spread operator with objects

export function arr1(){
    let employee4 = {
    name: "Chandra",
    age: 22
};

let updatedEmployee = {
    ...employee4,
    role: "ASE"
};
return updatedEmployee;
}

 export function student2(name, age, ...subjects) {

    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Subjects:", subjects);

}

// rest and spred together

export function addNumbers(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

export let nums = [10, 20, 30, 40];

console.log(addNumbers(...nums));