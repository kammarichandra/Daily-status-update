//get element by id 

let h1 = document.getElementById("text");

console.log(h1)

let p = document.getElementsByClassName(".title")

console.log(p);


function changeText() {

    let element = document.getElementById("title");
    element.innerHTML = "congrats chandraa got pramotion............🎉";

}
function change1(){
     
    let elements = document.getElementsByClassName("demo");
    let elements1 = document.getElementsByClassName("demo1");

    for(let i = 0; i<elements.length;i++){
        elements[i].style.color = "red";
        elements[i].style.fontSize = "20px";
    }
}

function change2(){
    let elements = document.getElementsByClassName("demo");
    let elements1 = document.getElementsByClassName("demo1");

    for(let i = 0; i<elements.length;i++){

        elements1[i].style.color = "purple";
        elements1[i].style.fontSize = "20px";
    }
}

function changeAll(){
    let elements = document.getElementsByClassName("demo");
    let elements1 = document.getElementsByClassName("demo1");

    for(let i = 0; i<elements.length;i++){
        elements[i].style.color = "orange";
        elements[i].style.fontSize = "20px";
        elements1[i].style.color = "orange";
        elements1[i].style.fontSize = "20px";
    }
}