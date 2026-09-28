// ============================================================
// 🐛  DOM MANIPULATION — HOMEWORK  |  DEBUG TASKS
// ============================================================
// To test: swap <script src="app.js"> with <script src="debug.js">
// in index.html.
// ============================================================


// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This should set the board title but logs a TypeError. Why?

function renderBoardTitle() {
  const titleEl = document.querySelector("#board-title");
  titleEl.textContent = "My Task Board";
}

renderBoardTitle();

// What's wrong ↓
// querySelector is selecting a class and not an id

// Your fix ↓
//document.querySelector("#board-title");


// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// This loop should create a card for every task and append
// it to the list. But only the last card appears. Why?

function renderTasks() {
  const list = document.getElementById("list-todo");
  const tasks = ["Design page", "Write tests", "Fix bug"];

  tasks.forEach(function(taskTitle) {
    const li = document.createElement("li");
    li.textContent = taskTitle;
    list.append(li);
  });
}

renderTasks();

// What's wrong ↓
// we are updating it with innerHTML instead of appending it

// Your fix ↓
// list.append(li);


// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This function should add a "highlighted" class to all
// high-priority cards, but nothing changes on the page.
// There are TWO bugs.

function highlightTasks() {
  const highCards = document.querySelectorAll(".priority-high");

  for (let i = 0; i < highCards.length; i++) {
    highCards[i].classList.add("highlighted");
  }
}

highlightTasks();

// Bug 1 ↓
// First bug is <= in the for loop. This makes it so we try and add a class to an undefined element

// Bug 2 ↓
// Struggling to find the second bug. My guess is that there is no styling for the class "highlighted"
// inside the css file.

// Your fix ↓
// i < highCards.length