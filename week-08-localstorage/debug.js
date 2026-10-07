// ============================================================
// 🐛  localStorage — HOMEWORK  |  DEBUG TASKS
// ============================================================


// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This saves a task array to localStorage and reads it back.
// But tasks.length logs 1 instead of 3, and tasks[0] is a string.
// What's wrong?

const tasksToSave = [
  { id: 1, title: "Task A" },
  { id: 2, title: "Task B" },
  { id: 3, title: "Task C" }
];

localStorage.setItem("tasks", JSON.stringify(tasksToSave));

const tasks = JSON.parse(localStorage.getItem("tasks"));
console.log(tasks.length);   // logs a large number — wrong
console.log(tasks[0]);       // logs "{" — wrong, expected an object

// What's wrong ↓
// We need to parse the data first. Since we are storing objects, we stringify them first but we need to parse them back into JS language

// Your fix ↓
// const tasks = JSON.parse(localStorage.getItem("tasks"));

// SIDE NOTE: It's best practice to always check for null before parsing but in this simple case we have a hard coded object so
// I just parsed it without checking

// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// This function should save the task board state and show
// a save indicator. The save works but the indicator never appears.
// What's wrong?

function saveBoardState(taskList) {
  localStorage.setItem("board", JSON.stringify(taskList));

  const indicator = document.getElementById("save-indicator");
  console.log(indicator.classList);
  console.log("1");
  indicator.classList.add("visible");

  setTimeout(function() {
    indicator.classList.remove("visible");
  }, 1500);
}

saveBoardState();

// The indicator element has this CSS:
// .save-indicator { opacity: 0; transition: opacity 0.3s; }
// .save-indicator.visible { opacity: 1; }
//
// saveBoardState() is being called from inside another function
// that also does heavy DOM work immediately after.
// Think about what could prevent the class from taking visual effect.

// What's wrong ↓
// The function is not being called inside that other function that was mentioned.

// Your fix — conceptual explanation is enough here ↓
// A simple test of console.logging the indicator classList and some other data type reveals that they are not being logged which means
// this function is not being properly called in that other function. That's why it's not working.

// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This loads tasks and renders them.
// It crashes on first load AND has a second bug that causes
// duplicate tasks on every subsequent load.
// Find both bugs.

let taskList = [];

function loadAndRender() {
  const raw = localStorage.getItem("boardTasks");

  if (raw === null) {
    return;
  } else {
    taskList = JSON.parse(raw);
  }

  document.getElementById("list-todo").innerHTML = "";

  taskList.forEach(function(task) {
    const li = document.createElement("li");
    li.textContent = task.title;
    document.getElementById("list-todo").appendChild(li);
  });


}

// Saving some tasks so the second bug can be demonstrated:
localStorage.setItem("boardTasks", JSON.stringify([
  { id: 1, title: "Task A", status: "todo" },
  { id: 2, title: "Task B", status: "todo" }
]));

loadAndRender();
loadAndRender(); // called again — what happens?

// Bug 1 (crash on first load) ↓
// I believe it crashes because we're not checking for null on the first load which will initially have nothing saved

// Bug 2 (duplicates) ↓
// Need to clear the elements before populating

// Your fix ↓
// if (raw === null) {
//    return;    
//} else {
//    taskList = JSON.parse(raw);
//}

// document.getElementById("list-todo").innerHTML
