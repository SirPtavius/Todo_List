import { createForm } from "./domManipulation";
import { getFormattedDate } from "./utils";
import { projectsList } from "./project";
import { tasksList } from "./task";

const btnNewTask = document.querySelector(".newTask");
btnNewTask.addEventListener("click", createForm);

// Event listeners for filtering tasks
document.getElementById("all").addEventListener("click", showAllTasks);
document
  .getElementById("highPriority")
  .addEventListener("click", showHighPriorityTasks);
document.getElementById("today").addEventListener("click", showTodayTasks);

function showAllTasks() {
  const allTasks = document.querySelectorAll(".taskInfo");
  allTasks.forEach((task) => {
    task.style.display = "flex";
  });
}

function showHighPriorityTasks() {
  const allTasks = document.querySelectorAll(".taskInfo");
  allTasks.forEach((task) => {
    const priorityElement = task.querySelector(".priority");
    if (priorityElement.textContent === "High") {
      task.style.display = "flex";
    } else {
      task.style.display = "none";
    }
  });
}

function showTodayTasks() {
  const allTasks = document.querySelectorAll(".taskInfo");
  allTasks.forEach((task) => {
    const taskDate = task.querySelector(".date");
    if (taskDate.textContent === getFormattedDate()) {
      task.style.display = "flex";
    } else {
      task.style.display = "none";
    }
  });
}

export function saveDataToLocalStorage() {
  localStorage.setItem("projectsList", JSON.stringify(projectsList));
  localStorage.setItem("tasksList", JSON.stringify(tasksList));
}
