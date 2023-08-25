// newFun.js

export const initTodoList = (tasksArray) => {
  const taskList = document.getElementById("task-list");
  const addTaskButton = document.querySelector("#add-task-btn");
  const newTaskInput = document.getElementById("new-task");
  const clearListButton = document.getElementById("clear-list");

  const saveTasksToLocalStorage = () => {
    localStorage.setItem("tasks", JSON.stringify(tasksArray));
  };

  const updateIndexes = () => {
    tasksArray.forEach((task, index) => {
      task.index = index + 1;
    });
  };

  const performJob = () => {
    taskList.innerHTML = "";

    tasksArray.forEach((task) => {
      const taskItem = document.createElement("li");
      taskItem.className = "task";
      taskItem.setAttribute("draggable", true);
      taskItem.setAttribute("data-index", task.index);
      taskItem.innerHTML = `
        <input type="checkbox" ${task.completed ? "checked" : ""}>
        <span class="task-description">${task.description}</span>
        <i class="fa-regular fa-trash-can"></i>
      `;
      taskList.appendChild(taskItem);
    });

    const taskItems = document.querySelectorAll(".task");

    taskItems.forEach((taskItem) => {
      taskItem.addEventListener("dragstart", (event) => {
        event.dataTransfer.setData(
          "text/plain",
          taskItem.getAttribute("data-index")
        );
      });

      taskItem.addEventListener("dragover", (event) => {
        event.preventDefault();
      });

      taskItem.addEventListener("drop", (event) => {
        event.preventDefault();
        const fromIndex =
          parseInt(event.dataTransfer.getData("text/plain")) - 1;
        const toIndex = parseInt(taskItem.getAttribute("data-index")) - 1;

        const movedTask = tasksArray.splice(fromIndex, 1)[0];
        tasksArray.splice(toIndex, 0, movedTask);

        updateIndexes();
        saveTasksToLocalStorage();
        performJob();
      });

      const checkbox = taskItem.querySelector("input[type='checkbox']");
      checkbox.addEventListener("change", () => {
        tasksArray[taskItem.getAttribute("data-index") - 1].completed =
          checkbox.checked;
        saveTasksToLocalStorage();
      });

      const deleteButton = taskItem.querySelector(".fa-trash-can");
      deleteButton.addEventListener("click", () => {
        tasksArray.splice(taskItem.getAttribute("data-index") - 1, 1);
        updateIndexes();
        saveTasksToLocalStorage();
        performJob();
      });

      const taskDescription = taskItem.querySelector(".task-description");
      taskDescription.addEventListener("click", () => {
        const newDescription = prompt(
          "Edit task description:",
          tasksArray[taskItem.getAttribute("data-index") - 1].description
        );
        if (newDescription !== null) {
          tasksArray[taskItem.getAttribute("data-index") - 1].description =
            newDescription;
          saveTasksToLocalStorage();
          performJob();
        }
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
      tasksArray.push(newTask);
      updateIndexes();
      saveTasksToLocalStorage();
      performJob();
      newTaskInput.value = "";
    }
  });

  clearListButton.addEventListener("click", () => {
    tasksArray = tasksArray.filter((task) => !task.completed);
    updateIndexes();
    saveTasksToLocalStorage();
    performJob();
  });

  const savedTasks = JSON.parse(localStorage.getItem("tasks"));
  tasksArray = savedTasks || [];

  updateIndexes();
  performJob();
};
