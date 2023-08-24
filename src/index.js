// index.js

import "./style.css";

let tasks = [];
console.log(tasks)

const taskList = document.getElementById("task-list");
const addTaskButton = document.querySelector("#add-task-btn");
const newTaskInput = document.getElementById("new-task");
const clearListButton = document.getElementById("clear-list");

const saveTasksToLocalStorage = () => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const updateIndexes = () => {
  tasks.forEach((task, index) => {
    task.index = index;
  });
};

const performJob = () => {
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const taskItem = document.createElement("li");
    taskItem.className = "task";
    taskItem.innerHTML = `
      <input type="checkbox" ${
        task.completed ? "checked" : ""
      } data-index="${index}">
      <span class="task-description">${task.description}</span>
      <i class="fa-regular fa-trash-can" data-index="${index}"></i>
    `;
    taskList.appendChild(taskItem);
  });

  const taskItems = document.querySelectorAll(".task");
  taskItems.forEach((taskItem, index) => {
    taskItem.setAttribute("draggable", true);

    taskItem.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("text/plain", index);
    });

    taskItem.addEventListener("dragover", (event) => {
      event.preventDefault();
    });

    taskItem.addEventListener("drop", (event) => {
      event.preventDefault();
      const fromIndex = parseInt(event.dataTransfer.getData("text/plain"));
      const toIndex = index;

      const [movedTask] = tasks.splice(fromIndex, 1);
      tasks.splice(toIndex, 0, movedTask);

      updateIndexes();
      saveTasksToLocalStorage();
      performJob();
    });

       const taskDescription = taskItem.querySelector(".task-description");
       taskDescription.addEventListener("click", () => {
         const newDescription = prompt(
           "Edit task description:",
           tasks[index].description
         );
         if (newDescription !== null) {
           tasks[index].description = newDescription;
           saveTasksToLocalStorage();
           performJob();
         }
       });

    const deleteButton = taskItem.querySelector(".fa-trash-can");
    deleteButton.addEventListener("click", () => {
      tasks.splice(index, 1);
      updateIndexes();
      saveTasksToLocalStorage();
      performJob();
    });
  });
};

addTaskButton.addEventListener("click", () => {
  const newTaskDescription = newTaskInput.value.trim();
  if (newTaskDescription !== "") {
    const newTask = {
      description: newTaskDescription,
      completed: false,
    };
    tasks.push(newTask);
    updateIndexes();
    saveTasksToLocalStorage();
    performJob();
    newTaskInput.value = "";
  }
});

clearListButton.addEventListener("click", () => {
  tasks = [];
  saveTasksToLocalStorage();
  performJob();
});

// Load tasks from local storage or use an empty array
const savedTasks = JSON.parse(localStorage.getItem("tasks"));
tasks = savedTasks || [];

updateIndexes();
performJob();
