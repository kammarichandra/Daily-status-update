
let getbtn = document.getElementById("getbtn");
let clearbtn = document.getElementById("clearbtn");
let container = document.getElementById("container")

getbtn.addEventListener("click",async()=>{
    try{
        container.innerHTML = "<h1>data loading..</h1>"
        clearbtn.style.display = "none";

        let response = await fetch("https://jsonplaceholder.typicode.com/posts");

        if(!response.ok){
            throw new Error("failed to fetch data");
        }
        let data = await response.json();

        container.innerHTML = "";

        data.slice(0,100).forEach(iteam => {
            let div = document.createElement("div");

            div.className = "card";

            div.innerHTML = `    <h3>${iteam.title}</h3>
    <p>${iteam.body}</p>`;
            container.appendChild(div);
        });

        clearbtn.style.display = "inline-block";
    }
    catch(error){
        container.innerHTML = `  <h3>${error.message}</h3>`;
    }
});

// clear data

clearbtn.addEventListener("click",()=>{
    container.innerHTML = "";
    clearbtn.style.display = "none";
});