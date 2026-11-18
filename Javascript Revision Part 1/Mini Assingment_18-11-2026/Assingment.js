// Get HTML elements
    const taskForm = document.getElementById("taskForm");
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    const searchInput = document.getElementById("searchInput");
    const filterSelect = document.getElementById("filterSelect");
    const submitBtn = document.getElementById("submitBtn");

    // Load tasks from Local Storage
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    let editId = null;

    // Save tasks to Local Storage
    function saveTasks() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    // Add or Update Task
    taskForm.addEventListener("submit", function(e) {

        e.preventDefault();

        const title = taskInput.value.trim();

        if (title === "") {
            alert("Please enter a task!");
            return;
        }

        if (editId !== null) {

            const task = tasks.find(t => t.id === editId);
            task.title = title;

            editId = null;
            submitBtn.textContent = "Add Task";

        } else {

            const newTask = {
                id: Date.now(),
                title: title,
                completed: false
            };

            tasks.push(newTask);

        }

        saveTasks();
        taskInput.value = "";

        displayTasks();

    });

    // Display Tasks
    function displayTasks() {

        taskList.innerHTML = "";

        const searchText = searchInput.value.toLowerCase();
        const filterValue = filterSelect.value;

        const filteredTasks = tasks.filter(task => {

            const matchesSearch = task.title
                .toLowerCase()
                .includes(searchText);

            const matchesFilter = filterValue === "all" ||
                (filterValue === "completed" && task.completed) ||
                (filterValue === "pending" && !task.completed);

            return matchesSearch && matchesFilter;

        });

        if (filteredTasks.length === 0) {
            taskList.innerHTML = '<p class="empty">No tasks found!</p>';
        }

        filteredTasks.forEach(task => {

            const taskDiv = document.createElement("div");

            taskDiv.className = "task";

            const info = document.createElement("div");
            info.className = "task-info";

            if (task.completed) {
                info.classList.add("completed");
            }

            const heading = document.createElement("h3");
            heading.textContent = task.title;

            const status = document.createElement("p");
            status.textContent = task.completed
                ? "Completed"
                : "Pending";

            info.append(heading, status);

            const actions = document.createElement("div");
            actions.className = "actions";

            const completeBtn = document.createElement("button");
            completeBtn.className = "complete-btn";
            completeBtn.textContent = task.completed
                ? "Undo"
                : "Complete";

            completeBtn.addEventListener("click", () => {
                toggleTask(task.id);
            });

            const editBtn = document.createElement("button");
            editBtn.className = "edit-btn";
            editBtn.textContent = "Edit";

            editBtn.addEventListener("click", () => {
                editTask(task.id);
            });

            const deleteBtn = document.createElement("button");
            deleteBtn.className = "delete-btn";
            deleteBtn.textContent = "Delete";

            deleteBtn.addEventListener("click", () => {
                deleteTask(task.id);
            });

            actions.append( completeBtn, editBtn, deleteBtn );

            taskDiv.append(info, actions);

            taskList.appendChild(taskDiv);

        });

        updateStats();

    }

    // Edit Task
    function editTask(id) {

        const task = tasks.find(t => t.id === id);

        if (!task) return;

        taskInput.value = task.title;

        editId = id;

        submitBtn.textContent = "Update Task";

        taskInput.focus();

    }

    // Delete Task
    function deleteTask(id) {

        if (confirm("Are you sure you want to delete this task?")) {

            tasks = tasks.filter(task => task.id !== id);

            if (editId === id) {
                editId = null;
                taskInput.value = "";
                submitBtn.textContent = "Add Task";
            }

            saveTasks();
            displayTasks();

        }

    }

    // Complete or Undo Task
    function toggleTask(id) {

        const task = tasks.find(t => t.id === id);

        if (!task) return;

        task.completed = !task.completed;

        saveTasks();
        displayTasks();

    }

    // Update Statistics
    function updateStats() {

        document.getElementById("totalCount").textContent =
            tasks.length;

        document.getElementById("completedCount").textContent =
            tasks.filter(task => task.completed).length;

        document.getElementById("pendingCount").textContent =
            tasks.filter(task => !task.completed).length;

    }

    // Search Tasks
    searchInput.addEventListener("input", displayTasks);

    // Filter Tasks
    filterSelect.addEventListener("change", displayTasks);

    // Initial Display
    displayTasks();
