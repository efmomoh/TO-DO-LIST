import './style.css';

const tasks = [
  {
    description: 'Build Multi-page Applications',
    completed: false,
    index: 1
  },
  {
    description: 'Develop Single Page Applications',
    completed: true,
    index: 2
  },
  {
    description: 'Create To-Do-Lists',
    completed: false,
    index: 3
  }
];

let draggedTaskIndex = null;

const performJob = () => {
  const taskList = document.getElementById('task-list');
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    const taskItem = document.createElement('li');
    taskItem.className = 'task';
    taskItem.innerHTML = `
      <input type="checkbox" ${task.completed ? 'checked' : ''} data-index="${index}">
      <span class="task-description">${task.description}</span>
      <i class="fa-solid fa-ellipsis-vertical"></i>
    `;
    taskList.appendChild(taskItem);
  });

  const taskItems = document.querySelectorAll('.task');
  taskItems.forEach((taskItem, index) => {
    taskItem.setAttribute('draggable', true);
    taskItem.setAttribute('data-index', index);

    taskItem.addEventListener('dragstart', (event) => {
      draggedTaskIndex = parseInt(event.target.getAttribute('data-index'));
    });

    taskItem.addEventListener('dragover', (event) => {
      event.preventDefault();
    });

    taskItem.addEventListener('drop', (event) => {
      const targetIndex = parseInt(event.target.getAttribute('data-index'));
      if (draggedTaskIndex !== null) {
        const [draggedTask] = tasks.splice(draggedTaskIndex, 1);
        tasks.splice(targetIndex, 0, draggedTask);
        draggedTaskIndex = null;
        performJob();
      }
    });
  });
};

const clearList = () => {
  tasks.length = 0;
  performJob();
};

document.addEventListener('DOMContentLoaded', () => {
  const addTaskButton = document.querySelector('.fa-rotate-90');
  const newTaskInput = document.getElementById('new-task');
  const clearListButton = document.getElementById('clear-list');
  const taskList = document.getElementById('task-list');

  addTaskButton.addEventListener('click', () => {
    const newTaskDescription = newTaskInput.value.trim();
    if (newTaskDescription !== '') {
      const newTask = {
        description: newTaskDescription,
        completed: false,
        index: tasks.length + 1
      };
      tasks.push(newTask);
      newTaskInput.value = '';
      performJob();
    }
  });

  clearListButton.addEventListener('click', clearList);

  taskList.addEventListener('click', (event) => {
    if (event.target.tagName === 'INPUT') {
      const index = event.target.getAttribute('data-index');
      tasks[index].completed = event.target.checked;
    } else if (event.target.classList.contains('fa-ellipsis-vertical')) {
      const index = event.target.getAttribute('data-index');
      tasks.splice(index, 1);
    }
    performJob();
  });

  taskList.addEventListener('dragenter', (event) => {
    const target = event.target;
    if (target.classList.contains('task')) {
      target.classList.add('dragging');
    }
  });

  taskList.addEventListener('dragleave', (event) => {
    const target = event.target;
    if (target.classList.contains('task')) {
      target.classList.remove('dragging');
    }
  });

  taskList.addEventListener('dragend', () => {
    const draggingTask = taskList.querySelector('.dragging');
    if (draggingTask) {
      draggingTask.classList.remove('dragging');
    }
  });

  performJob();
});