const columns = document.querySelectorAll(".column");
const tasks = document.querySelectorAll(".task");
const form = document.getElementById("taskForm");

// form.addEventListener("submit", (e)=>{
//   e.preventDefault();
//   // const 
//   const value = form.task.value;
//   console.log(value)
// })


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
    const botTask = insertAbove(column, e.clientY);
    const moveTask = document.querySelector(".dragging");
    if (!botTask) {
      column.appendChild(moveTask);
    } else {
      column.insertBefore(moveTask, botTask);
    }
  });
});

function insertAbove(col, y) {
  const tasks = col.querySelectorAll(".task:not(.dragging)");

  let closestTask = null;
  let closestOffset = Number.NEGATIVE_INFINITY;
  tasks.forEach((task) => {
    const yPos = task.getBoundingClientRect().top;
    const offset = y - yPos;

    if (offset < 0 && offset > closestOffset) {
      closestOffset = offset;
      closestTask = task;
    }
  });
  return closestTask;
}
