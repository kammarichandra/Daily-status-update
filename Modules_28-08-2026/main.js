import { students5 } from "./Map_set.js";
import { add, sub , multiply , divied, getusers, employee  } from "./module1.js";
import { age, employee1, name, user4 } from "./NullishCoalescing.js";
import { student, User2, user3 } from "./OptionalChaining.js";
import { arr, arr1, copy, fruits , newFruits, num, student2 ,addNumbers ,nums } from "./Spread_restOperator.js";
console.log(add(10, 20)); // 30
console.log(sub(22, 11)); // 11
console.log(multiply(34,45));
console.log(divied(45,56))

let user = getusers();

console.log(user);
console.log(user.name);
console.log(user.age);
console.log(user.gender);

let emp = employee();

emp.then((data) => {
  console.log(data);
});

console.log(User2.name.address?.city);
console.log(student.address?.city);
console.log(user3.greet?.());

console.log(name ?? "guest");
console.log(age ?? 18);

console.log(user4.name ?? "Unknown");
console.log(user4.age ?? 18);
console.log(user4.city ?? "Hyderabad");


console.log(employee1.empname ?? "Unknown");
console.log(employee1.empid ?? 0);
console.log(employee1.role ?? "Not Assigned");
console.log(employee1.salary ?? 0);

// spread and rest 

console.log(newFruits);
console.log("Original:", num);
console.log("Copy:", copy);

console.log(arr());
console.log(arr1())

console.log(student2("Chandra",22,"JavaScript", "HTML","CSS","React"))
console.log(addNumbers(...nums));
console.log(students5);
console.log(students5.get(101));
console.log(students5.has(111));
console.log(students5.delete(101));
console.log(students5.size);