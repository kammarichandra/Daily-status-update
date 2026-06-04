//scope
// 1.global scope
// 2.function scope
// 3.block scope

//1.global scope 

// this can be used inside function and blocks

let country = "india";

function showContry(){
    console.log(country);
}
showContry();
console.log(country)


let name = "chandra";

function showName(){
    console.log(name);
}
showName();
console.log(name);


//2 function scope 


function hai(){
    let message = "hello chandra";
    console.log(message);
}
hai();
// console.log(message);// error


// in this we can access var,let,const inside the function
// when we console outside the function it wil display error

function add(){
    let a = 10;
    var b = 20;
    const c = a+b;

    console.log(c);
}
add();
// console.log(c)//error

//3 block scope 

function age(){

    // let a1 = 10;
    {
        let a1 = 40
        var b1 = 10
        var c1 = 20
        const d =30

        console.log(d)
        console.log(b1)
        console.log(a1)
    }
    console.log(b1);//var-->accesed outside block
    // console.log(d);//const-->cant accesed outside block
    // console.log(a1);//let

}
age();
// console.log(a1);//error
// console.log(b1);//b1 not defined
// console.log(c1);//c1 not
// console.log(age);

// let 
// we can access let in block scope 
// we cannot access let in outside of block scope

if (true){
    let age1 = 24;
    console.log(age1)//24
}
// console.log(age1)// error

// var
// we can access inside and outside the block
if (true){
    var age2 = 24;
    console.log(age2)//24
}
console.log(age2)//24

// const
// we can access inside and outside the block
if (true){
    var age2 = 24;
    console.log(age2)//24
}
console.log(age2)//24


// example

let global = "chandra";

function test(){
    let fun  = "function";

    if(true){

        let block = "block scope";

        console.log(global);//chandra
        console.log(fun);// function
        console.log(block);//block scope
    }
    console.log(global);//global
    console.log(fun);//function
    // console.log(block);// error
}
test();
// console.log(fun);//error
// console.log(block);



// demonstrating scope accessability

//global accessibility

let company = "Nyb infotech";

function ShowCompany(){

    console.log(company);
}
ShowCompany();
console.log(company);


// function scope 

function emp(){
    let empname = "chadnra";

    console.log(empname);
}
emp();
// console.log(empname)// error

// block scope 

if (true){
    let city = "Atp";
    console.log(city);//atp
}
// console.log(city);//error


// global --> function --> block

let globalscope = "global";

function test1(){

    let functionScope = "fun scope";

    if(true){
        let block1 = "block scope";

        console.log(globalscope);
        console.log(functionScope);
        console.log(block1);
    }
}
test1();