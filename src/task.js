import { saveDataToLocalStorage } from "./eventHandler";
export let tasksList = [];

export class Task {
  constructor(name, description, date, priority, project) {
    this.id = Date.now();
    this._name = name;
    this._description = description;
    this._date = date;
    this._priority = priority;
    this._project = project;
  }

  get name() {
    return this._name;
  }

  get description() {
    return this._description;
  }

  get date() {
    return this._date;
  }

  get priority() {
    return this._priority;
  }

  get project() {
    return this._project;
  }
}

export function addTask(task) {
  tasksList.push(task);
  saveDataToLocalStorage();
}

export function removeTask(taskId) {
  const taskIndex = tasksList.findIndex((task) => task.id === taskId);
  if (taskIndex !== -1) {
    tasksList.splice(taskIndex, 1);
    saveDataToLocalStorage();
  }

  localStorage.setItem("tasksList", JSON.stringify(tasksList));
}

export function updateTask(updatedTask) {
  const taskIndex = tasksList.findIndex((task) => task.id === updatedTask.id);
  if (taskIndex !== -1) {
    tasksList[taskIndex] = updatedTask;
    saveDataToLocalStorage();
  }
}

export function loadTasksFromLocalStorage() {
  const storedTasks = localStorage.getItem("tasksList");
  if (storedTasks) {
    const parsedTasks = JSON.parse(storedTasks);
    parsedTasks.forEach((task) => {
      const newTask = new Task(
        task._name,
        task._description,
        task._date,
        task._priority,
        task._project || "None"
      );
      newTask.id = task.id;
      tasksList.push(newTask);
    });
  }
}
