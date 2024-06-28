import { Project, projectsList } from "./project";
import { updateProjectOptions, filterTasksByProject } from "./utils";
import { tasksList } from "./task";
import { saveDataToLocalStorage } from "./eventHandler";

const projects = document.querySelector(".btnProjects");
projects.addEventListener("click", newProject);

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
      console.log(button.innerText);
      const divProject = this.parentNode;
      divProject.remove();
      //remove tag option

      // Remove project from projectsList
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
      saveDataToLocalStorage();
    });

    const domProjects = document.querySelector(".domProjects");

    divProject.appendChild(button);
    divProject.appendChild(deleteImg);
    domProjects.appendChild(divProject);

    updateProjectOptions();
    saveDataToLocalStorage();
    divInfo.innerHTML = "";
  });
}

// Function to save projectsList to localStorage
function saveProjects() {
  localStorage.setItem("projectsList", JSON.stringify(projectsList));
}

// Function to save tasksList to localStorage
function saveTasks() {
  localStorage.setItem("tasksList", JSON.stringify(tasksList));
}
