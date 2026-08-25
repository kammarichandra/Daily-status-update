// let user = {

// }

// console.log(user.address.city);

// with optional chaining 

let user1 = {
    name : "rahul",
    address : {
        city : "hyd"
    }    
};

console.log(user1.address?.city);
console.log(user1.address?.pincode);

// multiple levels 

let company = {
    emp:{
       profile:{
         name : "chandra sekhar",
         role : "ase"
       }
    }
}

console.log(company.emp?.profile?.name);
console.log(company.emp?.profile?.phone);

// arrays

let users = [
    {
        name : "chandra"
    }
];

console.log(users[0]?.name);
console.log(users[1]?.name);

let stu = {

    name : "kiran",
    marks :{
        eng : 34,
        tel : 45,
        mat : 67,
    }
}

console.log(stu.marks?.mat);
console.log(stu.marks?.tel);
console.log(stu.marks?.eng);

// nullish coalescing ??

let username;

console.log(username ?? "guest");

// diff b/w || & ??

let age = 0 ;

console.log(age ||18);
console.log(age ?? 18);


let user3 = {
  profile: {
    name: "Rahul"
  }
};

let city = user3.profile?.city ?? "Unknown";

console.log(city);