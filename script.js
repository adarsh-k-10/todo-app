const addBtn = document.getElementById("btn");
const taskList = document.getElementById("task-list");
const inputBox = document.getElementById("inputbox");

window.addEventListener("DOMContentLoaded", loadTasks);

addBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const task = inputBox.value.trim();
    if (task === "") return;

    const taskObj = {
        text: task,
        completed: false,
    };

    const tasks = getTasks();
    tasks.push(taskObj);
    saveTasks(tasks);

    inputBox.value = "";
    loadTasks();
});

function getTasks() {
    return JSON.parse(localStorage.getItem("tasks")) || [];
}
function saveTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
function loadTasks() {
    const tasks = getTasks();
    taskList.innerHTML = "";

    tasks.forEach((taskObj, index) => {
        const li = document.createElement("li");
        li.className = "task-items";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = taskObj.completed;

        checkbox.addEventListener("change", () => {
            taskObj.completed = checkbox.checked;
            saveTasks(tasks);
            li.classList.toggle("completed", checkbox.checked);
        });

        const taskSpan = document.createElement("span");
        taskSpan.textContent = taskObj.text;

        const delBtn = document.createElement("button");
        delBtn.className = "del-btn";
        delBtn.textContent = "DELETE";

        delBtn.addEventListener("click", () => {
            tasks.splice(index, 1);
            saveTasks(tasks);
            loadTasks();
        });

        li.appendChild(checkbox);
        li.appendChild(taskSpan);
        li.appendChild(delBtn);
        if (taskObj.completed) li.classList.add("completed");
        taskList.appendChild(li);
    });
}
