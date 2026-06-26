import { fetchTasks, fetchTopTasks } from "../Modules/api.js";
import { saveFavorites, saveSessionTask } from "../Modules/Storage.js";
import { formatTask } from "../Modules/Utils.js";
import { taskPaginator } from "../Modules/generator.js";

let  list = document.getElementById("tasklist");
let loadBtn = document.getElementById("loadbtn");
let favBtn = document.getElementById("favbtn");

let allTasks = [];

// Event Listener
loadBtn.addEventListener("click", async () => {
  try {
    allTasks = await fetchTasks(); // async/await

    saveSessionTask(allTasks[0]); // session storage demo

    renderTasks(allTasks.slice(0, 10));
  } catch (err) {
    list.innerHTML = "<li>Error loading tasks</li>";
  }
});

// Promise methods demo button (favorites = completed tasks)
favBtn.addEventListener("click", async () => {
  let completed = await fetchTopTasks();

  saveFavorites(completed);
  renderTasks(completed.slice(0, 10));
});

// Render function using destructuring
function renderTasks(tasks) {
  list.innerHTML = "";

  let paginator = taskPaginator(tasks, 5);
  let firstPage = paginator.next().value;

  firstPage.forEach(task => {
    let formatted = formatTask(task);

    let li = document.createElement("li");
    li.textContent = formatted;
    list.appendChild(li);
  });
}