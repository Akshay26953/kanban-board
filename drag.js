const columns = document.querySelectorAll(".column");
const tasks = document.querySelectorAll(".task");

tasks.forEach((task) => {
  task.addEventListener("dragstart", () => {
    console.log("drag start");
    task.classList.add("dragging");
  });
  task.addEventListener("dragend", () => {
    console.log("drag end");
    task.classList.remove("dragging");
  });
});

columns.forEach((column) => {
  column.addEventListener("dragover", (e) => {
    e.preventDefault();
    column.appendChild(document.querySelector(".dragging"));
  });
});
