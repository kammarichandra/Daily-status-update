import employee from "./employee.js";
import { employee, calculateBonus, getEmployeeDetails} from "./employee.js";

console.log(getEmployeeDetails(employee));

const bonus = calculateBonus(employee.salary);

console.log(`Bonus: ₹${bonus}`);
console.log(employee.name);