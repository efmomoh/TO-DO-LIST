export const initStatusUpdates = (
  tasksArray,
  saveToLocalStorage,
  clearListButton,
  updateIndexes,
  performJob,
  saveTasksToLocalStorage
) => {
  const checkboxes = document.querySelectorAll("input[type='checkbox']");

  checkboxes.forEach((taskItem) => {
    const checkbox = taskItem.querySelector("input[type='checkbox']");
    checkbox.addEventListener("change", () => {
      const taskIndex = parseInt(taskItem.getAttribute("data-index")) - 1;
      checkboxes[taskIndex].completed = checkbox.checked;
      saveTasksToLocalStorage();
      performJob();
    });
  });

  clearListButton.addEventListener("click", () => {
    tasksArray = tasksArray.filter((task) => !task.completed);
    saveToLocalStorage();
  });

  const savedTasks = JSON.parse(localStorage.getItem("tasks"));
  tasksArray = savedTasks || [];
  saveTasksToLocalStorage();
  updateIndexes();
  performJob();
};
