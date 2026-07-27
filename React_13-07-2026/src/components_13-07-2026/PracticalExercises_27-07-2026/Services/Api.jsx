const url = "https://jsonplaceholder.typicode.com/users";

export let getUsers = async () => {

  let response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  return response.json();
  
};