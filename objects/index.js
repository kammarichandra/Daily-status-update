// objects 
let person = {
    name: "chandra",
    age: 22,
    city: "ananthapur"
};
console.log(person);

console.log(person.age);
console.log(person.city);

let student = {
    name: "chandra",
    marks: 45
}
//Add
student.grade = "A";
//update
student.marks = 90;
//delete

// function Employee(name, age, city){
//     this.name = name;
//     this.age = age;
//     this.city = city;
// }
// let employee1 = new Employee("chandra", 22, "atp");

// console.log(employee1);

delete student.grade;

console.log(student);

let stu = {
    name: "kcs",
    age: 22,
    marks: 45,
    bloodgroup: "b+",

}
stu.school = "st.joseph";

stu.update = 66;

delete student.age

console.log(stu)

let user = {
    name: "chanduu",
    // age : 22,
    // city : "atp",

    greet: function () {
        console.log("hello " + this.name);

    }
}
user.greet();

let usesr1 = {
    name: "raviii",
    great: function () {
        console.log("helooo " + this.name);
    }
}
usesr1.great()

//nested objects

let employeee = {
    name: "chandra sekhar",
    address: {
        city: "anathapur",
        mandal: "athmakuru",
        pincode: 515751
    }
}
console.log(employeee.address);
console.log(employeee.address.city);
console.log(employeee.name);
console.log(employeee.pincode);

//using loops in obj

let car = {
    brand: "toyota",
    model: "innova",
    price: 1000000
};
for (let key in car) {
    console.log(key + ":" + car[key]);
}

let person1 = {
    name: "sekharr",
    role: "Assosiate software ",
    isdeveloper: true
};
console.log(person1)

console.log(person1["role"]);

//copy of an obj

let original = { a: 1, b: 2, c: 3 };
let copy = { ...original };

copy.a = 100;
copy.c = 222;

console.log(original, copy);


let book = {
    namae: "java book ",
    title: "es6",
    author: "chandra"
};
console.log(book)

let book1 = {
    title: "js basics",
    author: "json ron",
    price: 4000,
    getDiscount() {
        return this.price * 0.9;
    }
}
console.log(book1.getDiscount())

let person2 = {
    name: "rohit",
    age: 44,
    city: "atp"
}
for (let key in person2) {
    console.log(key, ":", person2[key]);
}

// obj,keys,values,entities

let product = {
    name: "laptop",
    price: 50000
}

console.log(Object.keys(product));
console.log(Object.values(product));
console.log(Object.entries(product));

//obj distructing 

let user2 = {
    name: "rajuu",
    age: 22
};

let { name, age } = user2;

console.log(name);
console.log(age);


// constructor

function Employee(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
}

let employee1 = new Employee("chandra", 22, "atp");

console.log(employee1);

//copy with nested objects
let original1 = {
    name: "chandra",
    address1: {
        city1: "atp",
        pincode1: 515751
    }

};
let copy1 = { ...original1 };

copy1.address1.city1 = "hydrebad";

console.log(original1);
console.log(copy1);

//using obj.assing()

let org = {
    a: 1,
    b: 2
};
let copy2 = Object.assign({}, org);

copy2.a = 100000;

console.log(org.a);
console.log(copy2.a);

// using json method 

let org1 = {
    name: "chandra ",
    address2: {
        city2: "atp"
    }
};
let cop = JSON.parse(JSON.stringify(org1));
cop.address2.city2 = "banglore";

console.log(org1.address2.city2);
console.log(cop.address2.city2);

//limitation of json 

let obj1 = {
    data: new Date(),
};

let cop1 = JSON.parse(JSON.stringify(obj1));

console.log(cop1.data);

//spread objs

let obj2 = {
    a1: "chandra",
    a2: 22,
    a3: "atp"
};

let cop2 = { ...obj2 };

cop2.a2 = 33;

console.log(obj2.a2);
console.log(cop2.a2);


let students = [
    { id: 1, name: "chandra", age: 33, city: "atp" },
    { id: 2, name: "kcs", age: 33, city: "hyd" },
    [
        { id: 3, name: "sekhar", age: 33, city: "klr" },
        { id: 4, name: "ravi", age: 33, city: "kdp" },
        { id: 5, name: "rahull", age: 33, city: "dng" }
    ]
];

for (let i = 0; i < students.length; i++) {
    if (Array.isArray(students[i])) {
        for (let j = 0; j < students[i].length; j++) {
            let s = students[i][j];
            console.log(`id: ${s.id}, name: ${s.name}, city: ${s.city}`);
        }
    } else {
        let s = students[i];
        console.log(`id: ${s.id}, name: ${s.name}, city: ${s.city}`);
    }
}
