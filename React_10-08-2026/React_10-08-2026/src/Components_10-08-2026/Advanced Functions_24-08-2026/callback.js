function getuser(name,callback){
    console.log("welcome chandra " + name)
    callback();
}

getuser("sekar",function (){
    console.log("welcome to nyb")
})

//with data

function data(a,b,callback){
  callback(a,b);
}
data(10,20 , function(a,b){
    console.log(a*b);
});

//array

let arr = [1,2,3,4,56,7,8,90]

arr.forEach(function(num){
    console.log(num);
})

// using arrow function 

arr.forEach((num) =>{
    console.log(num);
})

// with index 

arr.forEach((index , value)=>{
    console.log(index,value);
})

//using map 

let res = arr.map(function(num){
   return num*2;
})
console.log(res);

//using reduser 

let total = arr.reduce(function ( sum , num){
    return sum + num;
})
console.log(total);
