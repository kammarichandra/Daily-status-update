async function Getpost() {
    
    try{
        let response = await fetch("https://jsonplaceholder.typicode.com/posts");

        if(!response.ok){
            throw new Error("failed to fetch data")
        }

        let data = await response.json();

        console.log(data);

    }catch (error){
        console.log("error :" , error.message);
    }

} 
Getpost()

//post

async function createpost() {
    
    try{
        let response = await fetch ("https://jsonplaceholder.typicode.com/posts",{
            method : "post",
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify({
                title : "new post",
                body : "this is my first api",
                userid : 1
            })
        });
        let data1 = await response.json();
        console.log(data1) 
    }catch(error){
        console.log(error)
    }
    
}
createpost();

//put request

async function updatePost() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: 1,
        title: "Updated Title",
        body: "Updated Body",
        userId: 1
      })
    });

    const data = await response.json();
    console.log(data);

  } catch (error) {
    console.error(error);
  }
}

updatePost();


//patch post

async function patchPost() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: "Partially Updated Title"
      })
    });

    const data = await response.json();
    console.log(data);

  } catch (error) {
    console.error(error);
  }
}

patchPost();

//delete

async function deletePost() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "DELETE"
    });

    if (response.ok) {
      console.log("Post deleted successfully");
    }

  } catch (error) {
    console.error(error);
  }
}

deletePost();