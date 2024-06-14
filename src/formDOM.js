import { Project, projectsList } from "./project";
import { Task } from "./task";

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
  form.appendChild(selectProject); //PROJECT
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
    const project = selectProject.value; // Aggiungi il progetto selezionato

    // Task instance
    const newTask = new Task(taskName, description, date, priority, project);

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
  detailsButton.classList.add("details");
  detailsButton.textContent = "Details";

  const modifyImg = document.createElement("img");
  modifyImg.setAttribute("src", "images/modify.png");
  modifyImg.setAttribute("alt", "Modify");
  modifyImg.classList.add("icon");

  const deleteImg = document.createElement("img");
  deleteImg.setAttribute("src", "images/delete-icon.png");
  deleteImg.setAttribute("alt", "Delete");
  deleteImg.classList.add("icon");

  rightInfoDiv.appendChild(dateP);
  rightInfoDiv.appendChild(priorityP);
  rightInfoDiv.appendChild(detailsButton);
  rightInfoDiv.appendChild(modifyImg);
  rightInfoDiv.appendChild(deleteImg);

  taskInfoDiv.appendChild(leftInfoDiv);
  taskInfoDiv.appendChild(rightInfoDiv);

  tasksContainer.appendChild(taskInfoDiv);
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

    const button = document.createElement("button");
    button.innerText = newProject.name;
    button.classList.add("btnSidebar");
    button.addEventListener("click", () =>
      filterTasksByProject(newProject.name)
    ); // Event listener per filtrare task
    const divProjects = document.querySelector(".projects");
    divProjects.appendChild(button);

    // Aggiorna il select input per le task con il nuovo progetto
    updateProjectOptions();

    divInfo.innerHTML = "";
  });
}

function filterTasksByProject(projectName) {
  const allTasks = document.querySelectorAll(".taskInfo");
  allTasks.forEach((task) => {
    if (
      task.getAttribute("data-project") === projectName ||
      projectName === "None"
    ) {
      task.style.display = "flex";
    } else {
      task.style.display = "none";
    }
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
  const month = String(today.getMonth() + 1).padStart(2, "0"); // I mesi vanno da 0 a 11, quindi aggiungiamo 1
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}
