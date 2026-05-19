let container = document.getElementById("container");

async function getdata() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts");

        let data = await response.json();

        container.innerHTML = "";

        data.slice(0, 50).forEach((item) => {
            let div = document.createElement("div");

            div.innerHTML = `<h3>${item.title}</h3>
                             <p>${item.body}</p>
                             <hr>`;

            container.append(div);
        });

    } catch (error) {
        console.log(error);
        alert("Error fetching data");
    }
}
// getdata();
