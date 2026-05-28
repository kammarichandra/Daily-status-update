
// discount caluclator

let price = 2500;
let discount = 20;

let discountamount = (price*discount)/100;

let finalprice  = price - discountamount;

console.log("original price : ",price);
console.log("discount Amount :  ",discountamount);
console.log("final price : ",finalprice);

// Atm balance check 

let balance = 5000;
let withdraw = 3000;

console.log(balance>=withdraw);
console.log(balance<withdraw);

if(balance>=withdraw){
    console.log("withdraw successfull")
}else{
    console.log("insuficent balance");
}


// login validation 

let username ="admin";
let password = "1234";

if(username === "admin" && password === "1234"){
    console.log("login succsessfully done ")
}else{
    console.log("invalid password")
}

// delivery eligible

let amount = 650;

if(amount >= 500){
console.log("free delivery succsessfull")
}else{
    console.log("not applicable for free delivery");
}

// pass or fail

let marks = 35;

let result = marks>-35?"pass":"fail";

console.log(result)