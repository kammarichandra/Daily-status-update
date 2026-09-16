let numbers = [10, 20, 30, 40, 50];

// Find the sum using reduce()
let sum = numbers.reduce((num,sum)=>num+sum,0);
console.log(sum);

let num = [10, 15, 20, 25, 30, 35];

// Find all even numbers using filter()
let even = num.filter((num)=>num %2 === 0);
console.log(even);

let numbers1 = [1, 2, 3, 4, 5];

// Create an array containing squares using map()
let squ = numbers1.map((num)=>num *2);
console.log(squ);

let employees = [
    { id: 101, name: "Rahul" },
    { id: 102, name: "Priya" },
    { id: 103, name: "Arun" }
];

// Find employee whose id is 102 using find()
let emp = employees.find((employee)=>employee.id === 102);
console.log(emp);

let numbers2 = [10, 20, 30, 40, 50];

// Find the index of 40 using findIndex()
let findindex = numbers2.findIndex((num)=> num>40 );
console.log(findindex);

let dup = [10, 20, 10, 30, 20, 40, 30];

// Remove duplicates.

let duplicate = [...new Set(dup)];
console.log(duplicate);

let high = [45, 12, 89, 34, 67, 5];

// Find highest and lowest without Math.max() or Math.min().

let highest = high[0];
let lowest = high[0];

for(let i=0 ; i <= high.length ; i++){
    if(high[i] > highest){
        highest = high[i];
    }
    if(high[i] > lowest){
        lowest = high[i];
    }
}

console.log("highest :",highest);
console.log("lowest : ",lowest);

let number = [50, 10, 40, 20, 30];

// Sort in ascending order without using sort().

let sort = number.sort((a,b)=>a-b);
console.log(sort);

let marks = [75, 80, 65, 90, 55];

// Check:
// 1. Is there any mark below 40?
let some = marks.some((num)=>num <40)
console.log(some);
// 2. Are all marks above 50?
let every = marks.every((num)=>num >50);
console.log(every);


let employees1 = [
    { name: "Ravi", salary: 25000 },
    { name: "Priya", salary: 35000 },
    { name: "Arun", salary: 45000 },
    { name: "Kiran", salary: 30000 }
];

// 1. Get employees with salary > 30000
let sal = employees1.find((employe)=> employe.salary>30000);
console.log(sal);
// 2. Find total salary
let total = employees1.reduce((sal ,emp)=> sal+emp.salary , 0);
console.log(total);
// 3. Find employee with highest salary
let highestsal = employees1.reduce((highest , employee)=> employee.salary > highest.salary ? employee : highest);
console.log(highestsal);
// 4. Create an array containing only employee names
let names = employees.map((employee)=> employee.name);
console.log(names);