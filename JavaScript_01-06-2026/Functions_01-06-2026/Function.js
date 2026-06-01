// functions 

// 1.function with parameters
// 2.with out parameters
// 3.returning a value
// 4. defult parameters
// 5. passing arguments
// 6. missing arguments

// with parameters

function great(name){
    console.log("hello"+name);
}
great("chandra");
great("sekhar");


// without parameters

function fun(){
    console.log("heloo chandra ")
}
fun();

//return value;

function multiply(a,b){
    return a*b;
};
let result = multiply(2,44);
console.log(result);


// defult parameters

function greet( name = " chandra"){
    console.log("hello" + name)
}; 
greet(" sekhar");
greet();

function calculateprice(price,tax=0.18){
    return price*(price*tax)
}
console.log(calculateprice(1000));
console.log(calculateprice(1000,0.18))


//passing arguments

function display(name,age){
    console.log(name + " is" +  age )
}
display(" chandra", 22);

// missing arguments

function showdetails(name,age){
    console.log(name,age);
};
showdetails("chadnra")


// advanced functions

//argument object 

function showargs(){
    console.log(arguments);
}
console.log(10,20,30);

function display1(){
    console.log(arguments[0]);
    console.log(arguments[1]);
}
display1("javascript","css")

// sum arguments

function sum(){
    let total = 0;

    for(let i =0 ;i < arguments.length;i++){
        total += arguments[i];
    }
    return total;
}
console.log(sum(10,20,30,40))

//rest parameters

function shownums(...nums){
    console.log(nums)
}
console.log(10,12,3,4,)

// sum using rest parameters 

function sum1(...num1){
    return num1.reduce((total,num1)=>total+num1,0);

}
console.log(sum1(10,20,30,40));

// with normal parametrs

function studentinfo(name,age,...sub){
    console.log("name :",name);
    console.log("age :", age);
    console.log("subjects : ",sub);

}
studentinfo("chandra",22,"html","css","js");