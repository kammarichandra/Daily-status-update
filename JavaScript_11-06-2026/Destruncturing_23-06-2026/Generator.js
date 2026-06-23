
// generator function
//syntax

function* generator(){

    yield 1;
    yield 2;
    yield 3;
}

// normal function 

function hai(){

    console.log("hello");
    console.log("chandra");

    return "done";
}

console.log(hai());

// generator fun 

function* hai1(){

    console.log("hi");
    yield;

    console.log("chandra")
    yield;

    return "done";
}

let gen = hai1();

gen.next();
gen.next();
console.log(gen.next());


function* num(){

    yield 10;
    yield 20;
    yield 30;
};

let a = num();

console.log(a.next());
console.log(a.next());
console.log(a.next());
console.log(a.next());

// using iterator in generator 

function* colors(){

    yield "red";
    yield "yellow";
    yield "blue";
    yield "orange";
}

for(let color of colors()){
    console.log(color);
}

//infinet sequence 

function* counter(){

    let i = 1;

    while(true){
        yield i++;
    }
}

let gen1 = counter();

console.log(gen1.next());
console.log(gen1.next());
console.log(gen1.next());
console.log(gen1.next());
console.log(gen1.next());
console.log(gen1.next());

// range generator 

function* range(start,end){

    for(let i=start ; i<=end;i++){
        yield i;
    }
}

for(let num of range(1,5)){

    console.log(num);
}