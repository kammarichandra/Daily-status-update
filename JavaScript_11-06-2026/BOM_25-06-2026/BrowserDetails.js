
let name = prompt("enter your name");

alert (" welcome " + name);

document.getElementById("output").innerHTML = `

 <p>Name: ${name}</p>
    <p>Language: ${navigator.language}</p>
    <p>Resolution: ${screen.width} x ${screen.height}</p>
    <p>URL: ${location.href}</p>

`;