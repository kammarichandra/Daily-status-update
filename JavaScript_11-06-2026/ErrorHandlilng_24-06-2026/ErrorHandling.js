
try{

    let res = 10/4;

    console.log(res);
}
catch{

    console.log("error occured");
}

try{

    console.log(num);

}
catch (error){

    console.log(" error :" , error);
}
finally{

    console.log("finally executed")
}


function mark(marks){

    try{
        if(marks < 0 || marks > 100){
            
            throw new Error("marks should must be b/w 0 and 100");
        
        }

        console.log("valid marks");
    }
    catch(error){

        console.log("error :", error);
    }
}
mark(12)

// validating password 

function validating(password){

    try{

        if(password.length < 8){

            throw new Error("password must contain at least 8 charesters");

        }

        console.log("password accepted")
    }
    catch(error){

        console.log(error)
    }
}

validating("q");

//bank withdraw 

function withdraw(balance,amount){

    try{

        if(amount > balance){

            throw new Error(" low balance ");
        }

        console.log(" withdraw successfull.remaining balance :" , balance - amount);


    }
    catch(error){

        console.log(error);
    }
}
withdraw(2000,10000)