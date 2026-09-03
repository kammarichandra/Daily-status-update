// try catch
// it will contains code this may accors error 
// syntax : try{....code}catch(){}

try{
    console.log("start");
    let res = 10/2

    console.log(res);
    console.log("end");

}catch(error){

    console.log(error);
}

try {
    console.log(user.name)
} 
catch(error) {

    console.log("somethig went wrong");
    console.log(error.message);
}

// finally :

// finally block will get executed even error occured or not occured 
// finally is useful for cleanup operations, such as closing a connection or hiding a loading indicator.
// syntax : try {
    
// } catch (error) {
    
// }finally{

// }

try {
    console.log("Trying...");
} catch (error) {
    console.log("Error occurred");
} finally {
    console.log("Finished");
}

// throw 
// by using throw we can throw error maually 
// syntax : throw new Error()

let age = 15;

try {
    if(age <= 18){
        throw new Error("not eligible ");
    }
    console.log("eligible");
} catch (error) {
    console.log(error);
}

// custom errors 
// javascript provides a error class but you cant creat you own error by error handling 

class ValidationError extends Error {

    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

try {
    let username = "";

    if(username === ""){
        throw new ValidationError("username required..")
    }

    console.log("valid user")
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}


// combining all examples 

class validationerror extends Error{

    constructor(message){
        super(message);
        this.name = "validationerror"
    }
}

function registeruser(username , age){
    try {
        if(!username){
            throw new Error("user name required")
        }
        if(age <= 18){
            throw new Error("you must have 18 ")
        }

        console.log("user registerd successfully..")
    } catch (error) {
        console.log(`${error.name}: ${error.message}`);
    }finally{
        console.log("registration process completed")
    }
}
registeruser("chandra",22);


// local storage :

// local storage is used to store broser data that remains when we close or open 
// syntax : localStorage.setItem("key",value);
//          localStorage.getItem(key);
//          localStorage.removeItem(key);
//          localStorage.clear();

localStorage.setItem("username","chandra");

let username = localStorage.getItem("username");

console.log(username);

localStorage.removeItem("username");
localStorage.clear();

// session storage 
// both will store the browser data but in these data will get deleted after closing tab 

sessionStorage.setItem("username","");

let user = sessionStorage.getItem("username");

console.log(user);

// json.stringify()
// it will convert obj in to string 

let stu = {
    name : "chandra",
    age : 22
}

let data = JSON.stringify(stu);

console.log(data.name);
localStorage.setItem("user",data);


let data1 = '{"name":"Ravi","age":25}';

let user1 = JSON.parse(data);

console.log(user1.name);
console.log(user1.age);