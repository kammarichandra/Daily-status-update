// Local Storage
// Local Storage allows you to store data in the browser.
// The data remains available even after:
// Page refresh
// Browser restart
// Closing and reopening the website

localStorage.setItem("username","chandra");

// get item 

let username =localStorage.getItem("username");
console.log(username);

localStorage.removeItem("username");
localStorage.clear();

// session storage 
// Session Storage is similar to Local Storage, but the data is associated with the current browser tab/session.
sessionStorage.setItem("username", "Chandra");

let user = sessionStorage.getItem("username");
console.log(user);

// user.removeItem("username");

sessionStorage.clear();

// json.stringify()

let employee = {
    name: "Chandra",
    role: "Developer",
    salary: 30000
};

let jsonData = JSON.stringify(employee);

console.log(jsonData);


// JSON.parse()
// JSON.parse() converts a JSON string back into a JavaScript object.
let jsonData1 = '{"name":"Chandra","role":"Developer","salary":30000}';

let employee1 = JSON.parse(jsonData);

console.log(employee1);
console.log(employee1.name);
console.log(employee1.salary);

localStorage.setItem("employee",JSON.stringify(employee));


// to get item 

let data = localStorage.getItem("emoloyee");
let empobj = JSON.parse(data);

console.log(empobj);
