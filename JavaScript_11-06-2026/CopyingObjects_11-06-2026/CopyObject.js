// copying objects 
//normal copy

let original = {name : "chandra",age : 22};
let copy = original;

copy.age = 34;

console.log(original);
console.log(copy);

//using spread oprator
// new object is created 
let stu = {name : "sekhar",age : 33};
let copy1 = {...stu};

copy1.age = 38;

console.log("copied :",copy1);
console.log("original :",stu);

//using object.assign()

let original1 = {name : "chandra",age : 23}

let copied = Object.assign({},original1);

copied.age = 45;

console.log("original :",original1)
console.log("copy :",copied);

// shallow copy 
//using spread operator 
let person = {
    name : "chandra",
    age : 23,
    city : "atp"
};

// person.age =34;
let copy3 = {...person};
console.log("orinal :",person);
console.log("copied :",copy3);
console.log(person === copy3);

//using object.assing()

let hai = Object.assign({},person);

console.log("orinal :",person);
console.log("copied :",hai);

//demonstrating shallow copies 

let original2 = {
    name : "kcs",
    address : {
        city : "atp"
    }
};

let spread = {...original2};
let assing = Object.assign({},original2);

spread.address.city = "hyd";

console.log("oriinal :",original2.address.city);
console.log("copy :",assing.address.city);

// deep copy 

//using json methods 
let deep = {
    name : "sekahr",
    age : 24,
    address : {
        city : "hyd"
    }
};

let deepcopy = JSON.parse(JSON.stringify(deep));
deepcopy.address.city = "atp";

console.log("deepcopy original :",deep.address.city)
console.log("deepcopy copied :",deepcopy.address.city)

// using structuredclone

let data = {
    name : "sekhar",
    age : 34,
    address : { 
        city : "hyd"
    }
};

let deepdata = structuredClone(data);
deepdata.address.city = "kadapa";

console.log("deep coopy original :",data.address.city);
console.log("deep copied :",deepdata.address.city);

// comaring deep copy and shalow copy 

let person1 = {
    name : "chandra",
    age : 23,
    address: {
        city: "atp",
        name: "chandra"
    }
};

// person.age =34;
let copy4 = {...person1};

copy4.address.city = "kurnool";
copy4.address.name = "nikhil";

console.log("original :", person1);
// console.log("copied :", copy4);

// deep copy 

let data1 = {
    name : "sekhar",
    age : 34,
    address : { 
        city : "hyd"
    }
};

let deepdata1 = structuredClone(data1);
deepdata1.address.city = "kadapa";

console.log("deep coopy original :",data1.address.city);
console.log("deep copied :",deepdata1.address.city);