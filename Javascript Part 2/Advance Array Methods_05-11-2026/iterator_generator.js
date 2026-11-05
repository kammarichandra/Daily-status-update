
// Employee Dataset

const employees = [
    { id: 101, name: "Chandra", department: "IT" },
    { id: 102, name: "Rahul", department: "HR" },
    { id: 103, name: "Priya", department: "Finance" },
    { id: 104, name: "Arjun", department: "IT" },
    { id: 105, name: "Sneha", department: "HR" }
];


// Custom Iterator

function employeeIterator(data) {

    let index = 0;

    return {
        next: function () {

            if (index < data.length) {

                return {
                    value: data[index++],
                    done: false
                };

            } else {

                return {
                    value: undefined,
                    done: true
                };
            }
        }
    };
}


// Create Iterator

const iterator = employeeIterator(employees);


// Retrieve Employees One by One

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());


// Generator Function

function* generateNumbers() {

    for (let i = 1; i <= 10; i++) {

        yield i;

    }
}


// Create Generator

const numbers = generateNumbers();


// Retrieve Values

console.log(numbers.next());
console.log(numbers.next());
console.log(numbers.next());
console.log(numbers.next());
console.log(numbers.next());


// Using for...of Loop

console.log("\nAll Numbers:");

for (const num of generateNumbers()) {
    console.log(num);
}
