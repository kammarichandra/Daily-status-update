
try{
    let result = 10/20;
    console.log(result);
    console.log(res);

}catch (error){

    console.log("error found");
    console.log(error.message);
}

console.log("program continues")


// finally 

try{
       console.log("database connected")
}
catch (error){
    console.log(error.message)
}
finally{
    console.log("connection closed..")
}

// using throw 

let age = 18;
try{
    if(age<18){
        throw "you are not eligible"
    }
    console.log("welcome")
}catch(error){
    console.log(error)
}

// using num 

let marks = "abc";

try{
    if(isNaN(marks)){
        throw "marks should be number ";
    }
    console.log("valid marks ");
}
catch(error){
    console.log(error);
}

// login form

let username = "chandra";
let password = "";

try{
    if(username === ""){
        throw "username required"
    }
    if(password == ""){
        throw "password required"
    }

    console.log("login done..!")
}
catch(error){
    console.log(error);
}

// json handling 

let data = `{
name :"chandra"
}`  

try{
    let result1 = JSON.parse(data);
    console.log(result1.name)
}
catch(error){
    console.log("invalid json");
}

// api fetching 

async function getusers() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        let users = await response.json();
        console.log(users);
        return users;
    } catch (error) {
        console.error("Failed to fetch users:", error);
        return ;
    }
}

getusers();

 // Atm withdraw 

 let balance = 50000;
 let withdraw = 3000;

 try{
    if(withdraw > balance){
        throw "insufficent balance";
    }

    balance = balance - withdraw;

    console.log("remainin balance : ",balance);
 }catch{
    console.log(error)
 }
 finally{
    console.log("thank you visit again")
 }

 