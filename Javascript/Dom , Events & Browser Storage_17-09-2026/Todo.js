

const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");
const todoCount = document.getElementById("todoCount");
const filterButtons = document.querySelectorAll(".filter-btn");

// Get todos from Local Storage

let todos = JSON.parse(localStorage.getItem("todos")) || [];

// Current filter

let currentFilter = "all";

function saveTodos() {

    localStorage.setItem(
        "todos",
        JSON.stringify(todos)
    );

}

function renderTodos() {

    // Clear existing DOM

    todoList.innerHTML = "";

    // Filter todos

    let filteredTodos = todos.filter(function (todo) {

        if (currentFilter === "active") {
            return !todo.completed;
        }

        if (currentFilter === "completed") {
            return todo.completed;
        }

        return true;

    });

    // Empty message

    if (filteredTodos.length === 0) {

        todoList.innerHTML = `
            <div class="empty-message">
                No todos found
            </div>
        `;

        updateCount();

        return;
    }

    // Create todo elements dynamically

    filteredTodos.forEach(function (todo) {

        // Main todo div

        const todoItem = document.createElement("div");

        todoItem.classList.add("todo-item");

        // Left section

        const todoLeft = document.createElement("div");

        todoLeft.classList.add("todo-left");

        // Checkbox

        const checkbox = document.createElement("input");

        checkbox.type = "checkbox";

        checkbox.classList.add("form-check-input");

        checkbox.checked = todo.completed;

        // Todo text

        const todoText = document.createElement("span");

        todoText.classList.add("todo-text");

        todoText.textContent = todo.text;

        // Add completed class

        if (todo.completed) {
            todoText.classList.add("completed");
        }

        checkbox.addEventListener("change", function () {

            toggleTodo(todo.id);

        });

        // Add checkbox + text

        todoLeft.appendChild(checkbox);

        todoLeft.appendChild(todoText);

        const buttonSection = document.createElement("div");

        // Edit button

        const editBtn = document.createElement("button");

        editBtn.textContent = "Edit";

        editBtn.classList.add(
            "btn",
            "btn-sm",
            "btn-warning",
            "me-2"
        );

        // Delete button

        const deleteBtn = document.createElement("button");

        deleteBtn.textContent = "Delete";

        deleteBtn.classList.add(
            "btn",
            "btn-sm",
            "btn-danger"
        );


        editBtn.addEventListener("click", function () {

            editTodo(todo.id);

        });

        deleteBtn.addEventListener("click", function () {

            deleteTodo(todo.id);

        });

        // Add buttons

        buttonSection.appendChild(editBtn);

        buttonSection.appendChild(deleteBtn);

        // Add everything to todo item

        todoItem.appendChild(todoLeft);

        todoItem.appendChild(buttonSection);

        // Add todo item to DOM

        todoList.appendChild(todoItem);

    });

    updateCount();

}

function addTodo() {

    const text = todoInput.value.trim();

    // Validation

    if (text === "") {

        alert("Please enter a todo");

        return;
    }


    // Create new todo object

    const newTodo = {

        id: Date.now(),

        text: text,

        completed: false

    };

    // Add to array
    todos.push(newTodo);

    // Save to Local Storage
    saveTodos();

    // Clear input
    todoInput.value = "";

    // Render
    renderTodos();

}

function editTodo(id) {

    const todo = todos.find(function (todo) {

        return todo.id === id;

    });

    if (!todo) {
        return;
    }

    const newText = prompt(
        "Edit Todo:",
        todo.text
    );

    if (newText === null) {
        return;
    }

    const updatedText = newText.trim();

    if (updatedText === "") {
        alert("Todo cannot be empty");
        return;
    }

    // Update text
    todo.text = updatedText;

    // Save
    saveTodos();

    // Render
    renderTodos();

}

function deleteTodo(id) {

    const confirmDelete = confirm(
        "Are you sure you want to delete this todo?"
    );

    if (!confirmDelete) {
        return;
    }

    todos = todos.filter(function (todo) {

        return todo.id !== id;

    });

    saveTodos();
    renderTodos();
}

function toggleTodo(id) {

    const todo = todos.find(function (todo) {

        return todo.id === id;

    });


    if (!todo) {
        return;
    }

    todo.completed = !todo.completed;

    saveTodos();

    renderTodos();

}

filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        // Remove active class

        filterButtons.forEach(function (btn) {

            btn.classList.remove("active");

        });


        // Add active class to clicked button

        button.classList.add("active");


        // Get filter

        currentFilter = button.dataset.filter;


        // Render filtered todos

        renderTodos();

    });

});

addBtn.addEventListener("click", function () {

    addTodo();

});

// ===============================
// ENTER KEY EVENT
// ===============================

todoInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        addTodo();

    }

});

function updateCount() {

    const activeTodos = todos.filter(function (todo) {

        return !todo.completed;

    });

    const count = activeTodos.length;

    todoCount.textContent = count + (count === 1 ? " todo left" : " todos left");

}



renderTodos();