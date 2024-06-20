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
}

export function removeTask(taskId) {
  const index = tasksList.findIndex((task) => task.id === taskId);
  if (index !== -1) {
    tasksList.splice(index, 1);
  }
}
export function updateTask(updatedTask) {
  const taskIndex = tasksList.findIndex((task) => task.id === updatedTask.id);
  if (taskIndex !== -1) {
    tasksList[taskIndex] = updatedTask;
  }
}
