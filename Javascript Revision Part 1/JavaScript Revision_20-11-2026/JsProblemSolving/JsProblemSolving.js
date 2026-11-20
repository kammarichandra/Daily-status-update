
// 1. Reverse a String

let str = "JavaScript";
let reverse = "";

for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
}
console.log("1. Reverse:", reverse);


// 3. Find Largest Number in Array

let numbers = [10, 25, 5, 40, 15];
let largest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}
console.log("3. Largest:", largest);


// 4. Remove Duplicate Elements

let arr = [1, 2, 3, 2, 4, 1, 5];
let unique = [];

for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
        unique.push(arr[i]);
    }
}
console.log("4. Unique Elements:", unique);


// 5. Find Even and Odd Numbers
let nums = [1, 2, 3, 4, 5, 6, 7, 8];
let even = [];
let odd = [];

for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
        even.push(nums[i]);
    } else {
        odd.push(nums[i]);
    }
}
console.log("6. Even Numbers:", even);
console.log("6. Odd Numbers:", odd);


// 6. Sort Array Without Using sort()

let values = [5, 2, 8, 1, 3];

for (let i = 0; i < values.length; i++) {
    for (let j = 0; j < values.length - 1 - i; j++) {
        if (values[j] > values[j + 1]) {
            let temp = values[j];
            values[j] = values[j + 1];
            values[j + 1] = temp;
        }
    }
}

console.log("7. Sorted Array:", values);


// 7. Sum of Array Elements Using reduce()
let marks = [10, 20, 30, 40, 50];

let total = marks.reduce(function(sum, num) {
    return sum + num;
}, 0);

console.log("10. Sum:", total);
