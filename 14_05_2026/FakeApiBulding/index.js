
async function getusers() {

    let container = document.getElementById("container");

    container.innerHTML =   "loading...";

    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users");

        let data = await response.json();

        container.innerHTML = "";

        let tableHTML = "<table border='1'><tr><th>Name</th><th>Email</th><th>City</th></tr>";
        data.forEach((user) => {
            tableHTML += `<tr><td>${user.name}</td><td>${user.email}</td><td>${user.address.city}</td></tr>`;
        });
        tableHTML += "</table>";
        container.innerHTML = tableHTML;
    }

    catch (error) {

        container.innerHTML = "Error fetching data";
    }
}

// post api

async function getPost() {
    let response1 = await fetch("https://jsonplaceholder.typicode.com/posts");

    let data = await response1.json();

    let post = document.getElementById("posts");

    let tableHTML = "<table border='1'><tr><th>Title</th><th>Body</th></tr>";
    data.slice(0,5).forEach((item)=>{
        tableHTML += `<tr><td>${item.title}</td><td>${item.body}</td></tr>`;
    });
    tableHTML += "</table>";
    post.innerHTML = tableHTML;
}

// login

async function login() {
    try {
        let username = document.getElementById("username").value;
        let response2 = await fetch("https://jsonplaceholder.typicode.com/users");
        let users = await response2.json();

        let founduser = users.find((user) => user.username === username);

        if (founduser) {
            document.getElementById("result").innerText = "login success";
        } else {
            document.getElementById("result").innerText = "invalid user";
        }
    } catch (error) {
        document.getElementById("result").innerText = "Login failed. Please try again.";
        console.error(error);
    }
}

function fakeApi() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true; // change to false to test error

      if (success) {
        resolve([
          { id: 1, title: "Post 1", body: "This is post 1" },
          { id: 2, title: "Post 2", body: "This is post 2" },
          { id: 3, title: "Post 3", body: "This is post 3" },
          { id: 4, title: "Post 4", body: "This is post 4" },
          { id: 5, title: "Post 5", body: "This is post 5" }
        ]);
      } else {
        reject("Fake API Error");
      }
    }, 1000);
  });
}