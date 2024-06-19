import { Project, projectsList } from "./project";
import { Task, addTask, removeTask, tasksList, updateTask } from "./task";

const btnNewTask = document.querySelector(".newTask");
btnNewTask.addEventListener("click", createForm);

function createForm() {
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
    console.log(projectsList);
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

function addTaskToDOM(task) {
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
//add some style
function showTaskDetails(task) {
  const divElement = document.querySelector(".info.blurred-box");
  divElement.innerHTML = "";

  const title = document.createElement("h2");
  title.textContent = "Task Details";

  const taskName = document.createElement("p");
  taskName.textContent = `Name: ${task.name}`;

  const taskDescription = document.createElement("p");
  taskDescription.textContent = `Description: ${task.description}`;

  const taskDate = document.createElement("p");
  taskDate.textContent = `Date: ${task.date}`;

  const taskPriority = document.createElement("p");
  taskPriority.textContent = `Priority: ${task.priority}`;

  switch (task.priority) {
    case "1":
      taskPriority.style.color = "green";
      taskPriority.textContent = "Priority: Low";
      break;
    case "2":
      taskPriority.style.color = "orange";
      taskPriority.textContent = "Priority: Normal";
      break;
    case "3":
      taskPriority.style.color = "red";
      taskPriority.textContent = "Priority: High";
      break;
    default:
      taskPriority.style.color = "black";
      taskPriority.textContent = "Priority: Unknown";
  }

  const taskProject = document.createElement("p");
  taskProject.textContent = `Project: ${task.project}`;

  divElement.appendChild(title);
  divElement.appendChild(taskName);
  divElement.appendChild(taskDescription);
  divElement.appendChild(taskDate);
  divElement.appendChild(taskPriority);
  divElement.appendChild(taskProject);
}
export function newProject() {
  const inputName = document.createElement("input");
  inputName.setAttribute("type", "text");
  inputName.setAttribute("name", "name");
  inputName.setAttribute("id", "name");
  inputName.setAttribute("placeholder", "Project Name");
  inputName.classList.add("input-box");

  const buttonCancel = document.createElement("button");
  buttonCancel.classList.add("cancel", "input-box");
  buttonCancel.textContent = "Cancel";

  const buttonSubmit = document.createElement("button");
  buttonSubmit.classList.add("submit", "input-box");
  buttonSubmit.textContent = "Submit";

  const coupleButton = document.createElement("div");
  coupleButton.classList.add("coupleTag");
  coupleButton.appendChild(buttonCancel);
  coupleButton.appendChild(buttonSubmit);

  const divInfo = document.querySelector(".info.blurred-box");
  divInfo.innerHTML = "";
  divInfo.appendChild(inputName);
  divInfo.appendChild(coupleButton);

  buttonCancel.addEventListener("click", () => {
    divInfo.innerHTML = "";
  });

  buttonSubmit.addEventListener("click", () => {
    const projectName = inputName.value;

    const newProject = new Project(projectName);

    projectsList.push(newProject);

    const divProject = document.createElement("div");

    divProject.classList.add("projImg");
    const button = document.createElement("button");
    button.innerText = newProject.name;

    button.classList.add("btnSidebar");
    button.addEventListener("click", () =>
      filterTasksByProject(newProject.name)
    );

    const deleteImg = document.createElement("img");
    deleteImg.setAttribute("src", "images/delete-icon.png");
    deleteImg.setAttribute("alt", "Delete");
    deleteImg.setAttribute("id", "deleteProject");
    deleteImg.classList.add("icon");

    deleteImg.addEventListener("click", function () {
      const projectName = button.innerText;
      const divProject = this.parentNode;

      divProject.remove();
      //remove tag option

      const projectIndex = projectsList.findIndex(
        (project) => project.name === projectName
      );
      if (projectIndex !== -1) {
        projectsList.splice(projectIndex, 1);
      }

      //remove all tasks assosiacted to the project from DOM and taskList
      const tasksContainer = document.querySelector(".tasks");
      tasksList.forEach((task, index) => {
        if (task.project === projectName) {
          // remove task from DOM
          const taskElement = tasksContainer.querySelector(
            `.taskInfo[data-task-id="${task.id}"]`
          );
          if (taskElement) {
            taskElement.remove();
          }

          // remove task from tasksList
          tasksList.splice(index, 1);
        }
      });

      updateProjectOptions();
    });

    const domProjects = document.querySelector(".domProjects");

    divProject.appendChild(button);
    divProject.appendChild(deleteImg);
    domProjects.appendChild(divProject);

    updateProjectOptions();

    divInfo.innerHTML = "";
  });
}

function updateProjectOptions() {
  const selectProject = document.getElementById("projectSelector");

  if (!selectProject) {
    console.error("Element with ID 'projectSelector' not found in the DOM.");
    return;
  }

  selectProject.innerHTML = "";

  const optionDefault = document.createElement("option");
  optionDefault.setAttribute("disabled", "disabled");
  optionDefault.setAttribute("selected", "selected");
  optionDefault.textContent = "Select Project";
  selectProject.appendChild(optionDefault);

  const optionNone = document.createElement("option");
  optionNone.textContent = "None";
  selectProject.appendChild(optionNone);

  projectsList.forEach((project) => {
    const option = document.createElement("option");
    option.setAttribute("value", project.name);
    option.textContent = project.name;
    selectProject.appendChild(option);
  });
}

function filterTasksByProject(projectName) {
  const allTasks = document.querySelectorAll(".taskInfo");

  allTasks.forEach((task) => {
    const taskProject = task.getAttribute("data-project");
    console.log(
      `Filtering for project: ${projectName}, task project: ${taskProject}`
    );

    if (!taskProject) {
      console.warn(
        `Task with ID ${task.getAttribute(
          "data-task-id"
        )} does not have a project assigned.`
      );
    }

    if (taskProject === projectName || projectName === "None") {
      console.log(`Showing task with ID ${task.getAttribute("data-task-id")}`);
      task.style.display = "flex";
    } else {
      console.log(`Hiding task with ID ${task.getAttribute("data-task-id")}`);
      task.style.display = "none";
    }
  });
}
document.getElementById("all").addEventListener("click", () => {
  const allTasks = document.querySelectorAll(".taskInfo");
  allTasks.forEach((task) => {
    task.style.display = "flex";
  });
});

document.getElementById("highPriority").addEventListener("click", () => {
  const allTasks = document.querySelectorAll(".taskInfo");

  allTasks.forEach((task) => {
    const priorityElement = task.querySelector(".priority");
    if (priorityElement.textContent === "High") {
      task.style.display = "flex";
    } else {
      task.style.display = "none";
    }
  });
});

document.getElementById("today").addEventListener("click", () => {
  const allTasks = document.querySelectorAll(".taskInfo");
  allTasks.forEach((task) => {
    const taskDate = task.querySelector(".date");
    if (taskDate.textContent === getFormattedDate()) {
      task.style.display = "flex";
    } else {
      task.style.display = "none";
    }
  });
});

function getFormattedDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function updateTaskInDOM(updatedTask) {
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
  }
}

function editTaskForm(task) {
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
      ...task,
      name: inputName.value,
      description: textarea.value,
      date: inputDate.value,
      priority: selectPriority.value,
      project: selectProject.value,
    };

    updateTask(updatedTask); // Aggiorna la task nella lista globale
    updateTaskInDOM(updatedTask); // Aggiorna la task nel DOM

    divElement.innerHTML = "";
  });
}
