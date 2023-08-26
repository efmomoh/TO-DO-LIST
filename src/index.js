// index.js

import "./style.css";
import { initTodoList } from "./newFun.js";
import "./update.js";

let tasks = [];

const taskList = document.getElementById("task-list");
const addTaskButton = document.querySelector("#add-task-btn");
const newTaskInput = document.getElementById("new-task");

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
    taskItem.setAttribute("draggable", true);
    taskItem.setAttribute("data-index", task.index);
    taskItem.innerHTML = `
      <input type="checkbox" ${task.completed ? "checked" : ""} data-index="${
      index + 1
    }">
      <span class="task-description">${task.description}</span>
      <i class="fa-regular fa-trash-can" data-index="${index + 1}"></i>
    `;
    taskList.appendChild(taskItem);
  });

  initTodoList(tasks, updateIndexes, performJob);
};

addTaskButton.addEventListener("click", () => {
  const newTaskDescription = newTaskInput.value.trim();
  if (newTaskDescription !== "") {
    const newTask = {
      description: newTaskDescription,
      completed: false,
      index: tasks.length + 1,
    };
    tasks.push(newTask);
    newTask.index = tasks.length;
    saveTasksToLocalStorage();
    performJob();
    newTaskInput.value = "";
  }
});

// Load tasks from local storage when the page loads or reloads
window.addEventListener("load", () => {
  const savedTasks = JSON.parse(localStorage.getItem("tasks"));
  tasks = savedTasks || [];
  saveTasksToLocalStorage();
  performJob();
});
