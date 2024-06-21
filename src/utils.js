import { projectsList } from "./project";

export function updateProjectOptions() {
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

export function filterTasksByProject(projectName) {
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
    console.log(task);
    console.log("taskProject=", taskProject, "projectName=", projectName);
    if (taskProject === projectName || projectName === "None") {
      console.log(`Showing task with ID ${task.getAttribute("data-task-id")}`);
      task.style.display = "flex";
    } else {
      console.log(`Hiding task with ID ${task.getAttribute("data-task-id")}`);
      task.style.display = "none";
    }
  });
}

export function getFormattedDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}
