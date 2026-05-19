let api = "https://dummyjson.com/recipes";


// GET

export async function getfoods() {

    try {

        let res = await fetch(api);

        let data = await res.json();

        return data;

    }
    catch (error) {

        console.log("get error");
    }
}


// POST

// let api = "https://dummyjson.com/recipes";

export async function addfood(food) {

    try {

        let res = await fetch( api, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(food)
        });

        let data = await res.json();

        return data;

    }
    catch (error) {

        console.log("POST error");
     }
} 




// PUT

export async function updatefood(id) {

    try {

        let res = await fetch(`${api}/${id}`, {

            method: "PUT",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                title: "updated Pizza"
            })
        });

        let data = await res.json();

        return data;

    }
    catch (error) {

        console.log("put error");
    }
}


// DELETE

export async function deletefood(id) {

    try {

        await fetch(`${api}/${id}`, {

            method: "DELETE"
        });

    }
    catch (error) {

        console.log("delete error");
    }
}

