function one() {
    // console.log("hi broooo")
    two()
}


function two() {
    console.log("heloo chandra")
}
one()

// threee function 

function first() {
    console.log("looking for second function after executed it will remove from the stack")
    second();
}
function second() {
    console.log("in second function looking for third function shows some output")
    third();
}
function third() {
    console.log("hi welcome to atp")
}
first();

// return flow 

function first1() {
    console.log("First");
    second1();
    console.log("End");
}

function second1() {
    console.log("Second");
}

first1();

function A() {
    B();
    console.log("A finished");// in function A B is called but A will not execute (stack will come to A fun will get execte  it wil remove )
}

function B() {
    C();
    console.log("B finished");// A , in B fun C is called  B fun will not execte (stack will enter into the B Will get executed b wiil remove from the stack)
}

function C() {
    console.log("C finished");// A,b Now stack will enter the C function Here c fun will executed  so c will remove form the stack 
}

A();

// web api 

console.log("one");

setTimeout(() => {
    console.log("two")
}, 2000);

console.log("third");

// fun,timer

function a1() {

    console.log("one");

    setTimeout(() => {
        console.log("chnadra")
    }, 3000);

    console.log("three");
}
a1();


// fun,web api , callstack

function first1() {
    console.log("sekhar");

    setTimeout(() => {
        console.log("Timer");
    }, 1000);

    second1();
}

function second1() {
    console.log("chandra");
}

first1();

console.log("End");

// callback and settimeout

function fun(callback) {
    console.log("helooo");

    setTimeout(() => {
        console.log("welcome to hyd");
        callback();
    }, 2000);
}

function fun1() {
    console.log("callback fun called here");
}

fun(fun1);

console.log("the end");

// micro & macro tasks 

//1.microtask

console.log("Start");

Promise.resolve().then(() => {
    console.log("Microtask");
});

console.log("End");

//2.macrotask

console.log("og");

setTimeout(() => {
    console.log("HVM")
}, 2000)

console.log("jsp");

//3. combined micro & macro

console.log("syncronus code..");

setTimeout(() => {
    console.log("macro asyncronus code..")
}, 2000);

Promise.resolve().then(() => {
    console.log("micro asyncronus code...")
});

console.log("sync code 1......");


// promise 

let promise = new Promise((resolve, reject) => {
    resolve("successfully completed...")
})

promise.then((result) => {
    console.log(result);
})

// promise with settimeout

let promise1 = new Promise((resolve, reject) => {

    setTimeout(() => {
        reject("failed to fetch....");
    }, 4000);

    setTimeout(() => {
        resolve("data saved....");
    }, 5000);

});

promise1.then((data) => {
    console.log(data);
})
    .catch((error) => {
        console.log(error);
    });

//async and await 

async function getusers() {

    let response = await fetch("https://jsonplaceholder.typicode.com/users");

    let data = response.json();
    console.log(data);
}
getusers();

 
async function getdata() {

    try {
        let result = await Promise.reject("failed...");
        console.log(result)
    } catch (error) {
        console.log(error)
    }


}

getdata();


// promise methods 

let p1 = Promise.resolve("data saved..");
let p2 = Promise.reject("failed to fetch data..");
let p3 = Promise.resolve("verification done...");

Promise.allSettled([p1, p2, p3])

    .then((result) => {
        console.log(result)
    })
Promise.any([p1, p2, p3])

    .then((res) => {
        console.log(res)
    });
Promise.all([p1, p2, p3])

    .then((a) => {
        console.log(a);
    })
Promise.race([p1, p2, p3])

    .then((a1) => {
        console.log(a1);
    })