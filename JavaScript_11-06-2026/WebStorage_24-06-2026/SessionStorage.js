

//session stroage 

function login(){

    let username = document.getElementById("username").value;

    sessionStorage.setItem("user", username);

    document.getElementById("result").innerHTML = "welcome " + username;


}

window.onload  = function(){

    let user = sessionStorage.getItem("user");

    if(user){
        document.getElementById("result").innerHTML = " welcome back " + user;
    }
}


//vist count 

let count = sessionStorage.getItem("visits");

if(count === null){

    count = 1;

}else{

    count = Number(count) + 1;
}

sessionStorage.setItem("visits",count);

document.getElementById("count").innerHTML = " visits in this session :" + count;

// attendence traker 

function present(){

    let count = Number(sessionStorage.getItem("attendance"))||0;

    count++;

    sessionStorage.setItem("attendance" , count);

    let res = document.getElementById("res").innerHTML = " days present :" + count;

}

document.getElementById("res").innerHTML = " days present :" + (sessionStorage.getItem("attendance")||0)
