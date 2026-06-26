let url = "https://jsonplaceholder.typicode.com/todos";

// using async/await
export async function fetchTasks() {
  try {
    let response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    let data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch failed:", error);
    throw error;
  }
}

export function fetchTopTasks() {
  return fetch(url)
    .then(res => {
      if (!res.ok) {
        throw new Error(`HTTP error: ${res.status}`);
      }
      return res.json();
    })
    .then(tasks => tasks.filter(task => task.completed || task.complete))
    .catch(error => {
      console.error("Promise fetch failed:", error);
      return [];
    });
}
