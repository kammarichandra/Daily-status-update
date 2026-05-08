


let fruits = ["apple", "banana", "mango"]

let [a, b, c] = fruits;

console.log(a)
console.log(b)
console.log(c)

console.log(a, b, c)


//skip values

let colors = ["red", "green", "blue", "orange"]

let [first, third] = colors;

console.log(first);

console.log(third);


let nums = [1, 2, 3, 4]
let [a1, b1, c1, d1] = nums;

console.log(a1, b1, c1, d1);


// combining reset + defult 

let data = ["javascript"];

let [course, duration = "3 mounts", ...extra] = data;

console.log(course);
console.log(duration);
console.log(extra);


// practice challange 

let games = ["cricket", "football", "hockey", "vollyball"]

let [g1, g2, ...remaininggames] = games;

console.log(g1);
console.log(g2);
console.log(remaininggames);


let users = [
    ["rama", 22],
    ["sitha", 23],
    ["ravi", 44]
];

for (let [user, agevalue] of users) {
    console.log(user, agevalue)
};

// real time example

let order = ["pizza", "large", 2];

let [Food, size, quantity] = order;

console.log(`you orderd  ${quantity} ${size} ${Food}`);

//defult nums 

let number = [10];
let [x, y = 20] = number

console.log(x);
console.log(y);

// swap two nums 

let p = 10;
let q = 20;

[p, q] = [q, p];

console.log(p);
console.log(q);

//nested array destructuring 

let student = ["chandra", [101, "cse"]]

let [name, [id, dept]] = student;

console.log(name);
console.log(id);
console.log(dept);
console.log(name, [id, dept]);

//multiple nested arrays

let data1 = [1, [1, 2], [4, 3]];

let [a2, [b2, c2], [d2, e2]] = data1;

console.log(a2);
console.log(b2);
console.log(c2);
console.log(d2);
console.log(e2);
console.log(a2, [b2, c2], [d2, e2]);


// skip values 

let colors1 = ["red", ["blue", "green"], ["purpule", "lavender"]];

let [firstcolor, [, secondcolor]] = colors1;

console.log(firstcolor);
console.log(secondcolor);

// itterators and generators 

let num = [1, 2, 4, 5, 6, 7];

let iterator = num[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

let name1 = "chandra ";

let iterator1 = name1[Symbol.iterator]();

console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());

//custom iterator 

let employee = {
    names: ["ravi", "ramesh", "rahul", "hari"],

    [Symbol.iterator]() {
        let index = 0;
        let data2 = this.names;

        return {
            next() {
                if (index < data2.length) {
                    return {
                        value: data2[index++]
                    }
                }
                else {
                    return {
                        done: true
                    }
                }
            }
        }
    }
}

for (let emp of employee) {

    console.log(emp);
}


// generator 

function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;

}

let gen = numberGenerator();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

// generate with loop 

function* printnumbers() {
    for (let i = 1; i <= 5; i++) {
        yield i;
    }
}

let gen1 = printnumbers();

for (let value of gen1) {
    console.log(value);
}