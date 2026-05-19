
export function add(a, b) {
    return a + b;
}

export function subtraction(a, b) {
    return a - b;
}

export default function great(name){

    return `hello ${name}`
}

// multiple exports

export let username = "chandra";

export let age = 22;

export function login(){
    console.log("user logined ")
}

// rename 

export function multiply(a,b){
    return a*b;
}

export let pro1="lapi";
export let pro2 = "mobile";
export let pro3 = "earphones";
export let price = "5000";


// real time 

let cart = [];

export function addtocart(iteam){
    cart.push(iteam);

    console.log(`${iteam} added`);
}

export function showcart(){
    console.log(cart)
}

// advanced real time 

export class employeee {
    constructor(name,sallary){
        this.name=name;
        this.sallary= sallary;
    }

    display(){
        console.log(this.name,this.sallary);
    }
}

// banking module 

let balance = 10000;

export function deposit(amount){
    balance += amount;
    console.log(`deposited : ${amount} `);
}

export function withdraw(amount){
   
    if(amount<=balance){
        balance-=amount;
        console.log(`withdraw : ${amount}`);
    }else{
        console.log("insufficent balance")
    }
}

export function checkbalance(){
    console.log(`balance : ${balance}`)
}

//student result 

export function totalMarks(marks){
    let total = marks.reduce((sum,mark)=>sum + mark,0);

    return total;
}

export function calculateAvg(marks){
    return totalMarks(marks)/marks.length;
}
