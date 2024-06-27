export let projectsList = [];

export class Project {
  constructor(name) {
    this._name = name;
    this._tasks = [];
  }

  get name() {
    return this._name;
  }

  addTask(task) {
    this._tasks.push(task);
  }

  get tasks() {
    return this._tasks;
  }
}
