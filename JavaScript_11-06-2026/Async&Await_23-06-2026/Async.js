
function fetchUser() {

  return new Promise((resolve) => {

    setTimeout(() => {
      resolve({ id: 1, name: "chandra" });
    }, 1000);

  });
}

fetchUser()

  .then(user => {
    
    console.log(user);

  })

  .catch(error => {

    console.error(error);

  });

//using async and await 

function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "chandra" });
    }, 1000);
  });
}


async function displayUser() {
  try {
    const user = await fetchUser();

    console.log( user);

  } 
  catch (error) {

    console.error(error);

  }
}

displayUser();


// chained operation 

function num(){

    return Promise.resolve(10);
}

function multiply(num){

    return Promise.resolve(num*2);

}

function add(num){

    return Promise.resolve(num+5)
}

num()
.then(multiply)
.then(add)
.then(result => console.log(result))
.catch(error => console.log(error));



//using async and await

function num1(){

    return Promise.resolve(10);

}

function multiple1(num1){

    return Promise.resolve(num1*2);

}

function add(num1){

    return Promise.resolve(num1+5)
}


async function calculate() {
    
    try{

        let num2 = await num1();

        let doubled = await multiple1(num2);

        let result = await add(doubled);

        console.log(result);
    }
    catch (error){

        console.log(error);
    }
}

calculate();


//error handing 

function divide(a,b){

    return new Promise((resolve, reject)=>{

        if(b === 0){

            reject("cannot divide by zero");

        }else{

            resolve(a/b);
        }
    });
}

async function calculatedivison() {
    
    try{

        let res = await divide(10,335);

        console.log(res);
    }
    catch (error){

        console.log(error);
    }
}

calculatedivison();

// error handling 

function getdata()
{
    return new Promise((resolve,reject)=>{

        reject("server error");
    })
}

async function fetchdata() {
    
   try{

     let data = await getdata();

    console.log(data);
   }
   catch (error){

    console.log(error);

   }

}

fetchdata();

//divison error 

function divide1(a1,b1){

    return new Promise ((resolve,reject)=>{

        if(b1===0){

            reject("divison error")
        }else{

            resolve(a1/b1);
        }
    })
}

async function hai() {
    
    try{

        let res1 = await divide1(10,4);

        console.log(res1);
    }
    catch(error){
        console.log(error);
    }
}

hai();

// finally block

function profile(){

    return Promise.reject(" network error ")
}

async function name() {
    
    try{

        let getprofile = await profile();
        console.log(getprofile);
    }
    catch(error){
        console.log(error);
    }
    finally{
        console.log("always runs")
    }
}
name();