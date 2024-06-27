import "./style.css";
import "./images/delete-icon.png";
import "./images/modify.png";
import "./images/girl-7628308_1920.jpg";
import "./images/alert-circle-outline.png";
import "./images/calendar-today-outline.png";
import "./images/inbox-full-outline.png";
import "./images/check-all.png";
import "./project";
import "./domManipulation";
import "./eventHandler";
import "./projectManagement";
import "./utils";
import "./task";
// index.js
import { Task } from "./task";
import { filterTasksByProject, updateProjectOptions } from "./utils";
import { saveDataToLocalStorage } from "./eventHandler";
import { projectsList } from "./project";
import { tasksList } from "./task";
import { createForm, addTaskToDOM } from "./domManipulation";

// Funzione per caricare i dati dal localStorage
function loadDataFromLocalStorage() {
  loadProjectsFromLocalStorage();
  loadTasksFromLocalStorage();
  renderProjects();
  renderTasks();
}

// Funzione per caricare i progetti dal localStorage
function loadProjectsFromLocalStorage() {
  const storedProjects = localStorage.getItem("projectsList");

  if (storedProjects) {
    try {
      const parsedProjects = JSON.parse(storedProjects);
      projectsList.splice(0, projectsList.length, ...parsedProjects); // Replace contents of projectsList
    } catch (error) {
      projectsList.length = 0; // Clear projectsList if parsing fails
    }
  }
}

// Funzione per caricare i task dal localStorage
function loadTasksFromLocalStorage() {
  const storedTasks = localStorage.getItem("tasksList");

  if (storedTasks) {
    try {
      const parsedTasks = JSON.parse(storedTasks);
      tasksList.splice(0, tasksList.length); // Clear tasksList

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
    } catch (error) {
      tasksList.length = 0; // Clear tasksList if parsing fails
    }
  }
}

function renderProjects() {
  const projectsContainer = document.querySelector(".domProjects");
  if (!projectsContainer) return;

  projectsContainer.innerHTML = "";

  projectsList.forEach((project, index) => {
    const btnSidebar = document.createElement("button");
    btnSidebar.textContent = project._name;
    btnSidebar.classList.add("btnSidebar");
    btnSidebar.addEventListener("click", () =>
      filterTasksByProject(project._name)
    );

    const binImg = document.createElement("img");
    binImg.classList.add("icon");
    binImg.src = "images/delete-icon.png";
    binImg.setAttribute("alt", "Delete");
    binImg.setAttribute("id", "deleteProject");

    binImg.addEventListener("click", function () {
      const projectName = btnSidebar.innerText;
      const divProject = this.parentNode;
      divProject.remove();

      const projectIndex = projectsList.findIndex(
        (project) => project._name === projectName
      );
      if (projectIndex !== -1) {
        projectsList.splice(projectIndex, 1);
      }

      // Remove all tasks associated with the project from DOM and tasksList
      const tasksContainer = document.querySelector(".tasks");
      const tasksToRemove = [];
      tasksList.forEach((task, index) => {
        if (task.project === projectName) {
          // Remove task from DOM
          const taskElement = tasksContainer.querySelector(
            `.taskInfo[data-task-id="${task.id}"]`
          );
          if (taskElement) {
            taskElement.remove();
          }

          // Collect indexes of tasks to be removed
          tasksToRemove.push(index);
        }
      });

      // Remove tasks from tasksList in reverse order to avoid index issues
      for (let i = tasksToRemove.length - 1; i >= 0; i--) {
        tasksList.splice(tasksToRemove[i], 1);
      }

      // Update the localStorage
      saveDataToLocalStorage();
      updateProjectOptions();
    });

    const projImg = document.createElement("div");
    projImg.classList.add("projImg");
    projImg.appendChild(btnSidebar);
    projImg.appendChild(binImg);

    projectsContainer.appendChild(projImg);
  });
}

export function renderTasks() {
  const tasksContainer = document.querySelector(".tasks");
  if (!tasksContainer) return;

  tasksContainer.innerHTML = "";

  tasksList.forEach((task) => {
    addTaskToDOM(task);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  loadDataFromLocalStorage();

  const btnNewTask = document.querySelector(".newTask");
  if (btnNewTask) {
    btnNewTask.addEventListener("click", () => {
      createForm();
      saveDataToLocalStorage();
    });
  }
});
