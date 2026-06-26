let api = "https://jsonplaceholder.typicode.com/posts";

// GET
async function Getpost() {
    try {
        let response = await fetch(api);
        let data = await response.json();

        if (data.length === 0) {
            document.getElementById("output").innerHTML = "<p>No posts found.</p>";
            return;
        }

        let rows = data.slice(0, 5).map(post => `
            <tr>
                <td>${post.id ?? ''}</td>
                <td>${post.title}</td>
                <td>${post.body}</td>
            </tr>
        `).join('');

        let table = `
            <table border="1" cellpadding="8" cellspacing="0" style="border-collapse:collapse;width:100%">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    ${rows}
                </tbody>
            </table>
        `;

        document.getElementById("output").innerHTML = table;
    } catch (error) {
        console.log(error);
    }
}

// POST
async function Post() {
    let post = {
        title: "user details",
        body: "fetch api",
        userId: 1
    };

    try {
        let response = await fetch(api, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(post)
        });

        let data = await response.json();
        alert("post added");
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

// PUT
async function Put() {
    let userdetails = {
        id: 1,
        title: "Updated details",
        body: "Updated Fetch API",
        userId: 1
    };

    try {
        let response = await fetch(api + "/1", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userdetails)
        });

        let data = await response.json();
        alert("details Updated");
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

// DELETE
async function Delete() {
    try {
        let response = await fetch(api + "/1", { method: "DELETE" });
        if (response.ok) {
            alert("Post Deleted");
        }
    } catch (error) {
        console.log(error);
    }
}
