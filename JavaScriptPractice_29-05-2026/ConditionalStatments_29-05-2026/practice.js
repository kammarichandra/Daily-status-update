// Atm Withdraw

let balance = 5000;
let withdraw = 2000;

if(withdraw<=balance){
    console.log("transaction success")
}else{
    console.log("transaction failed")
}

// Login Atuntication

let email = "chandra@gmail.com";
let password = "12345";

if(email ==="chandra@gmail.com" && password==="12345"){
    console.log("login successfull")
}else{
    console.log("invalid credentials")
}

// delivery

let cartAmount = 1500;

if(cartAmount >= 1000){
    console.log("free delivery applicable")
}else{
    console.log("delivery charges may apply")
}

// trafic signal 

let signal = "red";

if(signal === "red"){
    console.log("stop")
}else if(signal === "yellow"){
    console.log("bee ready")
}else if(signal === "green"){
    console.log("Go")
}else{
    console.log("invalid signal")
}

// online exam 

let marks = 45;

if(marks >= 35){
    console.log("pass")
}else {
    console.log("fail")
}

// weather 

let rain = true;

if(rain){
    console.log("take umbrulla")
}else{
    console.log("not required")
}

// movie ticket 

let age = 21;

if(age>=18){
    console.log("you can book ticket ")
}else {
    console.log("not allowed to book ticket ")
}


// food delevery time check
let restaurantopen = true;

if(restaurantopen){
    console.log("order accepted")
}else{
    console.log("restaurant is closed")
}

// otp verification 

let enteredotp = 1234;
let orinalotp = 1234;

if(enteredotp === orinalotp){
    console.log("otp verified successfull")
}else{
    console.log("invalid otp")
}

// uber 
let driverAvailable = true;

if(driverAvailable){
    console.log("cab booked successfully")
}else{
    console.log("No drivers avaliable")
}

//netflix 

let subscriptionActive = true;

if(subscriptionActive){
    console.log("watch movie")
}else{
    console.log("upgrade to gold")
}

// electric bill 

let units = 350;
let bill;

if(units <=200){
    bill = units*2
}else if(units <=300){
    bill = units*4
}else {
    bill = units*6
}

console.log("current bill :",bill)