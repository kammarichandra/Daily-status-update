const API = "https://jsonplaceholder.typicode.com/posts";

// Async/Await API Function
export let fetchPostsAsync = async () => {
  let response = await fetch(API);

  if (!response.ok) {
    throw new Error("Unable to fetch posts");
  }

  let data = await response.json();

  return data;
};


// Promise Chaining API Function

// export let fetchPostsPromise = () => {
//   return fetch(API)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Unable to fetch posts");
//       }

//       return response.json();
//     })
//     .then((data) => {
//       return data;
//     })
//     .catch((error) => {
//       throw error;
//     });
// };