

function greetUser(name) {

    return `Hello ${name}`;

}

console.log(greetUser("Student"));



let student = {

    name: "Rahul",

    age: 22,

    course: "JavaScript"

};

console.log(student);

console.log(student.name);

student.age = 23;

student.city = "Hyderabad";

console.log(student);


// Object Destructuring

let { name, course } = student;

console.log(name);

console.log(course);


// Spread Operator

let student1 = {

    ...student,

    marks: 85

};

console.log(student1);


let tasks = [

    {
        id: 1,
        title: "Learn JavaScript",
        completed: false
    },

    {
        id: 2,
        title: "Practice Functions",
        completed: true
    },

    {
        id: 3,
        title: "Learn Classes",
        completed: false
    }

];

console.log(tasks);



let taskNames = tasks.map(
    task => task.title
);

console.log(taskNames);


let completedTasks = tasks.filter(
    task => task.completed === true
);

console.log(completedTasks);




let findTask = tasks.find(
    task => task.id === 2
);

console.log(findTask);




let findIndex = tasks.findIndex(
    task => task.title === "Learn Classes"
);

console.log(findIndex);



let someTask = tasks.some(
    task => task.completed === true
);

console.log(someTask);



let everyTask = tasks.every(
    task => task.title !== ""
);

console.log(everyTask);



let totalTasks = tasks.reduce( (total, task) => total + 1, 0 );

console.log(totalTasks);



class Task {

    constructor(title) {

        this.title = title;

        this.completed = false;

    }


    completeTask() {

        this.completed = true;

    }


    getTask() {

        return this.title;

    }

}


// Create Object

let task1 = new Task(
    "Learn JavaScript"
);

console.log(task1);

task1.completeTask();

console.log(task1);



class PriorityTask extends Task {

    constructor(title, priority) {

        super(title);

        this.priority = priority;

    }


    showPriority() {

        return `${this.title} - ${this.priority}`;

    }
}

let task2 = new PriorityTask(
    "Complete Assignment",
    "High"
);

console.log(task2);

console.log(task2.showPriority());

function saveTask() {

    return new Promise(
        (resolve, reject) => {

            setTimeout(() => {

                let success = true;

                if (success) {

                    resolve(
                        "Task saved successfully"
                    );

                } else {

                    reject(
                        "Task saving failed"
                    );

                }

            }, 2000);

        }
    );

}

saveTask()

    .then(result => {

        console.log(result);

    })

    .catch(error => {

        console.log(error);

    });



async function getTaskData() {

    try {

        let result = await saveTask();

        console.log(
            "Async/Await:",
            result
        );

    }

    catch (error) {

        console.log(error);

    }

}

getTaskData();


console.log("1. Start");


setTimeout(() => {

    console.log(
        "4. setTimeout"
    );

}, 0);

Promise.resolve().then(() => {

    console.log(
        "3. Promise"
    );

});

console.log(
    "2. End"
);

function addNumbers(...numbers) {

    return numbers.reduce(
        (sum, num) => sum + num,
        0
    );

}

console.log(
    addNumbers(10, 20, 30)
);

console.log(
    student.address?.city
);

let city =
    student.address?.city ?? "Hyderabad";

console.log(city);

let taskInput = document.getElementById("taskInput");

let addBtn = document.getElementById("addTaskBtn");

let taskList = document.getElementById("taskList");

addBtn.addEventListener("click",
    function () {

        let title = taskInput.value.trim();


        if (title === "") {
             alert("Please enter a task");
            return;

        }


        let newTask = new PriorityTask(
                title,
                "High"
            );


        let div = document.createElement("div");

 
        div.className = "task";


        div.innerHTML = `

            <h3>${newTask.title}</h3>

            <p>
                Priority:
                ${newTask.priority}
            </p>

            <button
                onclick="completeNewTask(this)"
            >
                Complete
            </button>

        `;


        taskList.appendChild(div);


        taskInput.value = "";

    }
);

function completeNewTask(button) {

    button.parentElement.style.textDecoration = "line-through";

    button.textContent = "Completed";

}
