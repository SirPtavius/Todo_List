import { projectsList } from "./project";
import { addTask, Task, removeTask, updateTask } from "./task";

export function createForm() {
  const divElement = document.querySelector(".info.blurred-box");

  divElement.innerHTML = "";

  const form = document.createElement("form");
  form.setAttribute("action", "");

  //title name
  const inputName = document.createElement("input");
  inputName.setAttribute("type", "text");
  inputName.setAttribute("name", "name");
  inputName.setAttribute("id", "name");
  inputName.setAttribute("placeholder", "Task Name");
  inputName.classList.add("input-box");

  //select project
  const selectProject = document.createElement("select");
  selectProject.setAttribute("name", "SelectProject");
  selectProject.setAttribute("id", "SelectProject");
  selectProject.classList.add("input-box");
  selectProject.setAttribute("id", "projectSelector");

  const optionDefault2 = document.createElement("option");
  optionDefault2.setAttribute("disabled", "disabled");
  optionDefault2.setAttribute("selected", "selected");
  optionDefault2.textContent = "Select Project";
  selectProject.appendChild(optionDefault2);

  const optionNone = document.createElement("option");
  optionNone.textContent = "None";
  selectProject.appendChild(optionNone);

  // Populate project options
  projectsList.forEach((project) => {
    const option = document.createElement("option");
    option.setAttribute("id", project.name);
    option.textContent = project.name;
    selectProject.appendChild(option);
  });

  //description
  const textarea = document.createElement("textarea");
  textarea.setAttribute("name", "description");
  textarea.setAttribute("id", "description");
  textarea.setAttribute("placeholder", "Description");
  textarea.setAttribute("maxlength", "250");
  textarea.classList.add("input-box");

  const formSection = document.createElement("div");
  formSection.classList.add("formSection");

  const coupleTag1 = document.createElement("div");
  coupleTag1.classList.add("coupleTag");

  //date
  const inputDate = document.createElement("input");
  inputDate.setAttribute("type", "date");
  inputDate.setAttribute("name", "date");
  inputDate.setAttribute("id", "date");
  inputDate.classList.add("input-box");

  // select priority
  const selectPriority = document.createElement("select");
  selectPriority.setAttribute("name", "priority");
  selectPriority.setAttribute("id", "priority");
  selectPriority.classList.add("input-box");

  //options
  const optionDefault = document.createElement("option");
  optionDefault.setAttribute("disabled", "disabled");
  optionDefault.setAttribute("selected", "selected");
  optionDefault.textContent = "Priority";

  const optionLow = document.createElement("option");
  optionLow.setAttribute("value", "1");
  optionLow.textContent = "Low";

  const optionNormal = document.createElement("option");
  optionNormal.setAttribute("value", "2");
  optionNormal.textContent = "Normal";

  const optionHigh = document.createElement("option");
  optionHigh.setAttribute("value", "3");
  optionHigh.textContent = "High";

  selectPriority.appendChild(optionDefault);
  selectPriority.appendChild(optionLow);
  selectPriority.appendChild(optionNormal);
  selectPriority.appendChild(optionHigh);

  coupleTag1.appendChild(inputDate);
  coupleTag1.appendChild(selectPriority);

  const coupleTag2 = document.createElement("div");
  coupleTag2.classList.add("coupleTag");

  const buttonCancel = document.createElement("button");
  buttonCancel.classList.add("cancel", "input-box");
  buttonCancel.textContent = "Cancel";

  const buttonSubmit = document.createElement("button");
  buttonSubmit.classList.add("submit", "input-box");
  buttonSubmit.textContent = "Submit";

  coupleTag2.appendChild(buttonCancel);
  coupleTag2.appendChild(buttonSubmit);

  formSection.appendChild(coupleTag1);
  formSection.appendChild(coupleTag2);

  form.appendChild(inputName);
  form.appendChild(selectProject);
  form.appendChild(textarea);

  form.appendChild(formSection);

  divElement.appendChild(form);

  //EVENT LISTENER BUTTONS
  buttonCancel.addEventListener("click", () => {
    divElement.innerHTML = "";
  });
  buttonSubmit.addEventListener("click", () => {
    const taskName = inputName.value;
    const description = textarea.value;
    const date = inputDate.value;
    const priority = selectPriority.value;
    const project = selectProject.value;

    // Task instance
    const newTask = new Task(taskName, description, date, priority, project);
    addTask(newTask);
    addTaskToDOM(newTask);

    divElement.innerHTML = "";
  });
}

export function addTaskToDOM(task) {
  const tasksContainer = document.querySelector(".tasks");

  const taskInfoDiv = document.createElement("div");
  taskInfoDiv.classList.add("taskInfo", "blurred-box");
  taskInfoDiv.setAttribute("data-project", task.project);
  taskInfoDiv.setAttribute("data-task-id", task.id);

  const leftInfoDiv = document.createElement("div");
  leftInfoDiv.classList.add("leftInfo");

  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.addEventListener("change", function () {
    if (this.checked) {
      taskNameP.style.textDecoration = "line-through";
    } else {
      taskNameP.style.textDecoration = "none";
    }
  });

  const taskNameP = document.createElement("p");
  taskNameP.textContent = task.name;

  const taskDescriptionP = document.createElement("p");
  taskDescriptionP.textContent = task.description;

  leftInfoDiv.appendChild(checkbox);
  leftInfoDiv.appendChild(taskNameP);
  leftInfoDiv.appendChild(taskDescriptionP);

  const rightInfoDiv = document.createElement("div");
  rightInfoDiv.classList.add("rightInfo");

  const dateP = document.createElement("p");
  dateP.textContent = task.date;
  dateP.classList.add("date");

  const priorityP = document.createElement("p");
  priorityP.textContent = task.priority;
  priorityP.classList.add("priority");

  switch (task.priority) {
    case "1":
      priorityP.style.color = "green";
      priorityP.textContent = "Low";
      break;
    case "2":
      priorityP.style.color = "orange";
      priorityP.textContent = "Normal";
      break;
    case "3":
      priorityP.style.color = "red";
      priorityP.textContent = "High";
      break;
    default:
      priorityP.style.color = "black";
      priorityP.textContent = "Unknown";
  }

  const detailsButton = document.createElement("button");
  detailsButton.setAttribute("id", "details");
  detailsButton.textContent = "Details";

  const modifyImg = document.createElement("img");
  modifyImg.setAttribute("src", "images/modify.png");
  modifyImg.setAttribute("alt", "Modify");
  modifyImg.setAttribute("id", "modify");
  modifyImg.classList.add("icon");

  const deleteImg = document.createElement("img");
  deleteImg.setAttribute("src", "images/delete-icon.png");
  deleteImg.setAttribute("alt", "Delete");
  deleteImg.setAttribute("id", "delete");
  deleteImg.classList.add("icon");

  deleteImg.addEventListener("click", function () {
    removeTask(task.id);
    taskInfoDiv.remove();
  });
  detailsButton.addEventListener("click", function () {
    showTaskDetails(task);
  });
  modifyImg.addEventListener("click", () => {
    editTaskForm(task);
  });

  rightInfoDiv.appendChild(dateP);
  rightInfoDiv.appendChild(priorityP);
  rightInfoDiv.appendChild(detailsButton);
  rightInfoDiv.appendChild(modifyImg);
  rightInfoDiv.appendChild(deleteImg);

  taskInfoDiv.appendChild(leftInfoDiv);
  taskInfoDiv.appendChild(rightInfoDiv);

  tasksContainer.appendChild(taskInfoDiv);
}

export function showTaskDetails(task) {
  const divElement = document.querySelector(".info.blurred-box");
  divElement.innerHTML = "";

  const title = document.createElement("h1");
  title.textContent = "Task Details";

  const taskName = document.createElement("p");

  taskName.innerHTML = `<b>Name:</b> ${task.name}`;
  taskName.classList.add("detailsTaskName");

  const taskDescription = document.createElement("p");
  taskDescription.innerHTML = `<b>Description:</b> ${task.description}`;
  taskDescription.classList.add("detailsDescription");

  const taskDate = document.createElement("p");
  taskDate.innerHTML = `<b>Date:</b> ${task.date}`;
  taskDate.classList.add("detailsDate");

  const taskPriority = document.createElement("p");
  switch (task.priority) {
    case "1":
      taskPriority.style.color = "green";
      taskPriority.innerHTML = `<b style="color: white;">Priority:</b> Low`;
      break;
    case "2":
      taskPriority.style.color = "orange";
      taskPriority.innerHTML = `<b style="color: white;">Priority:</b> Normal`;
      break;
    case "3":
      taskPriority.style.color = "red";
      taskPriority.innerHTML = `<b style="color: white;">Priority:</b> High`;
      break;
    default:
      taskPriority.style.color = "black";
      taskPriority.innerHTML = `<b style="color: white;>Priority:</b> Unknown`;
  }
  taskPriority.classList.add("detailsPriority");

  const taskProject = document.createElement("p");
  taskProject.innerHTML = `<b>Project:</b> ${task.project}`;
  taskProject.classList.add("detailsProject");

  divElement.appendChild(title);
  divElement.appendChild(taskName);
  divElement.appendChild(taskDescription);
  divElement.appendChild(taskDate);
  divElement.appendChild(taskPriority);
  divElement.appendChild(taskProject);
}

export function editTaskForm(task) {
  const divElement = document.querySelector(".info.blurred-box");

  divElement.innerHTML = "";

  const form = document.createElement("form");

  form.setAttribute("action", "");

  // Title name
  const inputName = document.createElement("input");
  inputName.setAttribute("type", "text");
  inputName.setAttribute("name", "name");
  inputName.setAttribute("id", "name");
  inputName.setAttribute("placeholder", "Task Name");
  inputName.classList.add("input-box");
  inputName.value = task.name;

  // Select project
  const selectProject = document.createElement("select");
  selectProject.setAttribute("name", "SelectProject");
  selectProject.setAttribute("id", "SelectProject");
  selectProject.classList.add("input-box");
  selectProject.setAttribute("id", "projectSelector");

  const optionDefault2 = document.createElement("option");
  optionDefault2.setAttribute("disabled", "disabled");
  optionDefault2.setAttribute("selected", "selected");
  optionDefault2.textContent = "Select Project";
  selectProject.appendChild(optionDefault2);

  const optionNone = document.createElement("option");
  optionNone.textContent = "None";
  selectProject.appendChild(optionNone);

  // Populate project options
  projectsList.forEach((project) => {
    const option = document.createElement("option");
    option.textContent = project.name;
    option.value = project.name;
    if (project.name === task.project) {
      option.setAttribute("selected", "selected");
    }
    selectProject.appendChild(option);
  });

  // Description
  const textarea = document.createElement("textarea");
  textarea.setAttribute("name", "description");
  textarea.setAttribute("id", "description");
  textarea.setAttribute("placeholder", "Description");
  textarea.setAttribute("maxlength", "250");
  textarea.classList.add("input-box");
  textarea.value = task.description;

  const formSection = document.createElement("div");
  formSection.classList.add("formSection");

  const coupleTag1 = document.createElement("div");
  coupleTag1.classList.add("coupleTag");

  // Date
  const inputDate = document.createElement("input");
  inputDate.setAttribute("type", "date");
  inputDate.setAttribute("name", "date");
  inputDate.setAttribute("id", "date");
  inputDate.classList.add("input-box");
  inputDate.value = task.date;

  // Select priority
  const selectPriority = document.createElement("select");
  selectPriority.setAttribute("name", "priority");
  selectPriority.setAttribute("id", "priority");
  selectPriority.classList.add("input-box");

  // Options
  const optionDefault = document.createElement("option");
  optionDefault.setAttribute("disabled", "disabled");
  optionDefault.setAttribute("selected", "selected");
  optionDefault.textContent = "Priority";

  const optionLow = document.createElement("option");
  optionLow.setAttribute("value", "1");
  optionLow.textContent = "Low";

  const optionNormal = document.createElement("option");
  optionNormal.setAttribute("value", "2");
  optionNormal.textContent = "Normal";

  const optionHigh = document.createElement("option");
  optionHigh.setAttribute("value", "3");
  optionHigh.textContent = "High";

  selectPriority.appendChild(optionDefault);
  selectPriority.appendChild(optionLow);
  selectPriority.appendChild(optionNormal);
  selectPriority.appendChild(optionHigh);

  selectPriority.value = task.priority;

  coupleTag1.appendChild(inputDate);
  coupleTag1.appendChild(selectPriority);

  const coupleTag2 = document.createElement("div");
  coupleTag2.classList.add("coupleTag");

  const buttonCancel = document.createElement("button");
  buttonCancel.classList.add("cancel", "input-box");
  buttonCancel.textContent = "Cancel";

  const buttonSubmit = document.createElement("button");
  buttonSubmit.classList.add("submit", "input-box");
  buttonSubmit.textContent = "Submit";

  coupleTag2.appendChild(buttonCancel);
  coupleTag2.appendChild(buttonSubmit);

  formSection.appendChild(coupleTag1);
  formSection.appendChild(coupleTag2);

  form.appendChild(inputName);
  form.appendChild(selectProject);
  form.appendChild(textarea);

  form.appendChild(formSection);

  divElement.appendChild(form);

  // EVENT LISTENER BUTTONS
  buttonCancel.addEventListener("click", () => {
    divElement.innerHTML = "";
  });
  buttonSubmit.addEventListener("click", () => {
    const updatedTask = {
      id: task.id,
      name: inputName.value,
      description: textarea.value,
      date: inputDate.value,
      priority: selectPriority.value,
      project: selectProject.value,
    };

    task._date = updatedTask.date;
    task._name = updatedTask.name;
    task._description = updatedTask.description;
    task._priority = updatedTask.priority;
    task._project = updatedTask.project;

    updateTask(updatedTask);
    updateTaskInDOM(updatedTask);

    divElement.innerHTML = "";
  });
}
export function updateTaskInDOM(updatedTask) {
  const taskInfoDiv = document.querySelector(
    `.taskInfo[data-task-id="${updatedTask.id}"]`
  );
  if (taskInfoDiv) {
    taskInfoDiv.querySelector(".leftInfo p:first-of-type").textContent =
      updatedTask.name;
    taskInfoDiv.querySelector(".leftInfo p:nth-of-type(2)").textContent =
      updatedTask.description;
    taskInfoDiv.querySelector(".rightInfo .date").textContent =
      updatedTask.date;
    const priorityP = taskInfoDiv.querySelector(".rightInfo .priority");
    priorityP.textContent = updatedTask.priority;

    switch (updatedTask.priority) {
      case "1":
        priorityP.style.color = "green";
        priorityP.textContent = "Low";
        break;
      case "2":
        priorityP.style.color = "orange";
        priorityP.textContent = "Normal";
        break;
      case "3":
        priorityP.style.color = "red";
        priorityP.textContent = "High";
        break;
      default:
        priorityP.style.color = "black";
        priorityP.textContent = "Unknown";
    }
    taskInfoDiv.setAttribute("data-project", updatedTask.project);
  }
}
