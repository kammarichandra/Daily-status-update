
//squre nums 
//fun dec
function square(num){
    return num*num
}
console.log(square(5))
//fun exp

let square2 = function(num){
    return num*num
}
console.log(square(6));

//arrow 

let square1 = num=>num*num;

console.log(square1(6));


// even or odd 

function iseven1(num){
    return num %2 ===0;
}
console.log(iseven1(8));//fun dec

let iseven = function(num){
    return num%2===0;
}
console.log(iseven(4));// anonymus fun


// fin max two

let max = function max (a,b){
    return a>b ?a :b;
};
console.log(max(23,54));//named function

let max1 = (a,b)=>a>b?a:b;

console.log(max1(12,45)); 

// factorial 

function factorial(n){

    let result = 1;

    for(let i = 1;i<=n;i++){
        result = result*i;
    
    }
    return result;

};
console.log(factorial(5));


// vowels count 

let countvowels = str=>{
    let count = 0;

    for(let chr of str.toLowerCase()){
        if("aeiou".includes(chr)){
            count++;
        }
    }
    return count;
};
console.log(countvowels("chandrasekhar"))
