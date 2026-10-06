// ============================================================
// 🏠  EVENT LISTENERS — HOMEWORK
// ============================================================
// Mini Project: Interactive Task Board
//
// The Task Board from DOM Manipulation is back — now make it
// fully interactive with event listeners.
//
// Every interaction must use addEventListener.
// All DOM operations must be inside named functions.
// ============================================================

// ============================================================
// THE DATA
// ============================================================
const tasks = [
  {
    id: 1,
    title: "Design landing page",
    assignee: "Alex",
    priority: "high",
    status: "todo",
  },
  {
    id: 2,
    title: "Set up project repo",
    assignee: "Sofia",
    priority: "high",
    status: "done",
  },
  {
    id: 3,
    title: "Write API docs",
    assignee: "Liam",
    priority: "medium",
    status: "inprogress",
  },
  {
    id: 4,
    title: "Fix login bug",
    assignee: "Alex",
    priority: "high",
    status: "inprogress",
  },
  {
    id: 5,
    title: "Add dark mode",
    assignee: "Maya",
    priority: "low",
    status: "todo",
  },
  {
    id: 6,
    title: "Code review PR #42",
    assignee: "Sofia",
    priority: "medium",
    status: "todo",
  },
  {
    id: 7,
    title: "Deploy to staging",
    assignee: "Liam",
    priority: "high",
    status: "done",
  },
  {
    id: 8,
    title: "Update dependencies",
    assignee: "Maya",
    priority: "low",
    status: "todo",
  },
];

// ----------------------------------------------------------
// TASK 1 — createTaskCard (returns a DOM element)
// ----------------------------------------------------------
// Declare a function called createTaskCard.
// Parameter: task (object)
//
// Build and return a complete <li> element:
//   1. Create <li> — class "task-card", dataset.id = task.id,
//      dataset.priority = task.priority
//   2. Create <p class="task-title"> — textContent: task.title
//   3. Create <div class="task-meta">:
//      - <span> with priority class + text: task.priority.toUpperCase()
//      - <span>: "👤 " + task.assignee
//   4. Create <div class="card-actions">:
//      - <button class="complete-btn"> textContent: "✅ Complete"
//      - <button class="remove-btn">   textContent: "🗑️ Remove"
//   5. If task.status === "done" → add class "completed" to the <li>
//   6. Append title, meta, and actions to the <li>
//   7. Return the <li>

function createTaskCard(task) {
  const li = document.createElement("li");
  li.classList.add("task-card");
  li.dataset.id = task.id;
  li.dataset.priority = task.priority;

  const p = document.createElement("p");
  p.classList.add("task-title");
  p.textContent = task.title;

  const div1 = document.createElement("div");
  div1.classList.add("task-meta");
  const prioritySpan = document.createElement("span");
  const assigneeSpan = document.createElement("span");
  prioritySpan.classList.add(`priority-${task.priority}`);
  prioritySpan.textContent = task.priority.toUpperCase();
  assigneeSpan.textContent = `👤 ${task.assignee}`;
  div1.append(prioritySpan, assigneeSpan);

  const div2 = document.createElement("div");
  const btnComplete = document.createElement("button");
  const btnRemove = document.createElement("button");
  div2.classList.add("card-actions");
  btnComplete.classList.add("complete-btn");
  btnComplete.textContent = "✅ Complete"
  btnRemove.classList.add("remove-btn");
  btnRemove.textContent = "🗑️ Remove"
  div2.append(btnComplete);
  div2.append(btnRemove);

  if (task.status === "done") {
    li.classList.add("completed");
  }

  li.append(p);
  li.append(div1);
  li.append(div2);

  return li;
}

// ----------------------------------------------------------
// TASK 2 — renderBoard + updateCounts
// ----------------------------------------------------------
// Declare a function called renderBoard.
// Parameter: taskList
//
// Clear all three lists first (set innerHTML = ""):
//   #list-todo, #list-inprogress, #list-done
//
// Loop through taskList using forEach.
// Call createTaskCard(task) for each.
// Append to the correct list based on task.status.
//
// After appending call updateCounts(taskList).
//
// ---
// Declare a function called updateCounts.
// Parameter: taskList
//
// Use filter to get these groups from taskList:
//   done        → status === "done"
//   pending     → status !== "done"
//   todo        → status === "todo"
//   inprogress  → status === "inprogress"
//
// Set textContent on six elements:
//   #task-count       → taskList.length + " tasks"
//   #completed-count  → "✅ " + done.length + " done"
//   #pending-count    → "⏳ " + pending.length + " pending"
//   #count-todo       → todo.length          (just the number — no label)
//   #count-inprogress → inprogress.length    (just the number — no label)
//   #count-done       → done.length          (just the number — no label)

function renderBoard(taskList) {
  const todo = document.getElementById("list-todo");
  const inprogress = document.getElementById("list-inprogress");
  const done = document.getElementById("list-done");

  todo.innerHTML = "";
  inprogress.innerHTML = "";
  done.innerHTML = "";

  taskList.forEach((task) => {
    const newCard = createTaskCard(task);

    if (task.status === "todo") {
      todo.append(newCard);
    } else if (task.status === "inprogress") {
      inprogress.append(newCard);
    } else {
      done.append(newCard);
    }
  });

  updateCounts(taskList);
}

function updateCounts(taskList) {
  const done = taskList.filter((task) => task.status === "done");
  const pending = taskList.filter((task) => task.status !== "done");
  const todo = taskList.filter((task) => task.status === "todo");
  const inprogress = taskList.filter((task) => task.status === "inprogress");

  const taskCount = document.getElementById("task-count");
  const completedCount = document.getElementById("completed-count");
  const pendingCount = document.getElementById("pending-count");
  const countTodo = document.getElementById("count-todo");
  const countInprogress = document.getElementById("count-inprogress");
  const countDone = document.getElementById("count-done");

  taskCount.textContent = `${taskList.length} tasks`;
  completedCount.textContent = `✅ ${done.length} done`;
  pendingCount.textContent = `⏳ ${pending.length} pending`;
  countTodo.textContent = `${todo.length}`;
  countInprogress.textContent = `${inprogress.length}`;
  countDone.textContent = `${done.length}`;
}

// ----------------------------------------------------------
// TASK 3 — handleAddTask (click event on the Add button)
// ----------------------------------------------------------
// Declare a function called handleAddTask.
//
// Inside:
//   1. Read values from:
//      - #task-title-input    (.value.trim())
//      - #task-assignee-input (.value.trim())
//      - #task-priority-input (.value)
//      - #task-status-input   (.value)
//   2. If title is empty → log "Title is required" and return early
//   3. Create a new task object:
//      { id: Date.now(), title, assignee: assignee || "Unassigned",
//        priority, status }
//   4. Push the new task to the tasks array
//   5. Re-render: call renderBoard(tasks)
//   6. Clear the title and assignee inputs
//
// Wire it up:
//   document.getElementById("add-task-btn")
//     .addEventListener("click", handleAddTask);

function handleAddTask() {
  const titleInput = document.getElementById("task-title-input");
  const assigneeInput = document.getElementById("task-assignee-input");
  const priority = document.getElementById("task-priority-input").value;
  const status = document.getElementById("task-status-input").value;

  const title = titleInput.value.trim();
  const assignee = assigneeInput.value.trim();

  if (!title) {
    console.log("Title is required");
    return;
  }

  const newTask = {
    id: Date.now(),
    title,
    assignee: assignee || "Unassigned",
    priority,
    status
  }

  tasks.push(newTask);
  renderBoard(tasks);

  titleInput.value = "";
  assigneeInput.value = "";
}

// wire up here
document.getElementById("add-task-btn").addEventListener("click", handleAddTask);

// ----------------------------------------------------------
// TASK 4 — handleBoardClick (event delegation for complete + remove)
// ----------------------------------------------------------
// Instead of adding listeners to every button individually,
// use delegation on each column's task list.
//
// Declare a function called handleBoardClick.
// Parameter: event
//
// Inside:
//   - Get the clicked element: event.target
//   - Get the task card: target.closest(".task-card")
//     (.closest() walks UP the DOM tree to find the nearest matching ancestor)
//   - If no card found → return early
//   - Get the task id: parseInt(card.dataset.id)
//   - Find the task in the tasks array using find
//
//   IF target.classList.contains("complete-btn"):
//     - Set task.status = "done"
//     - Add class "completed" to card
//     - Move card to #list-done using appendChild
//     - Call updateCounts(tasks)
//
//   IF target.classList.contains("remove-btn"):
//     - Remove the task from tasks array:
//       const index = tasks.findIndex(t => t.id === taskId)
//       tasks.splice(index, 1)
//     - Remove the card from the DOM: card.remove()
//     - Call updateCounts(tasks)
//
// Wire ONE listener to document.getElementById("board"):
//   Wait — the <main> has class "board" not id "board".
//   Use document.querySelector(".board")
//     .addEventListener("click", handleBoardClick);
//
// Write a comment: why use .closest() instead of event.target directly?

function handleBoardClick(event) {
  const target = event.target;
  const taskCard = target.closest(".task-card");

  if (!taskCard) {
    return;
  }

  const taskId = parseInt(taskCard.dataset.id);
  const task = tasks.find((task) => task.id === taskId);

  if (target.classList.contains("complete-btn")) {
    task.status = "done";
    taskCard.classList.add("completed");
    const doneList = document.getElementById("list-done");
    doneList.appendChild(taskCard);
  }

  if (target.classList.contains("remove-btn")) {
    const index = tasks.findIndex(t => t.id === taskId);
    tasks.splice(index, 1);
    taskCard.remove();
  }

  updateCounts(tasks);
}

// wire up here
document.querySelector(".board").addEventListener("click", handleBoardClick);


// ----------------------------------------------------------
// TASK 5 — handleFilterClick (filter buttons)
// ----------------------------------------------------------
// The header has four filter buttons with data-filter attributes:
//   data-filter="all", "high", "medium", "low"
//
// Declare a function called handleFilterClick.
// Parameter: event
//
// Inside:
//   - Get the filter value: event.target.dataset.filter
//   - If no filter value → return (clicked something that's not a button)
//
//   - Remove "active" class from ALL .filter-btn elements
//     (use querySelectorAll + forEach)
//   - Add "active" class to event.target
//
//   - Select ALL .task-card elements
//   - For each card:
//       IF filter === "all" → remove class "hidden"
//       ELSE IF card.dataset.priority === filter → remove "hidden"
//       ELSE → add "hidden"
//
// Use delegation on the .header-right div:
//   document.querySelector(".header-right")
//     .addEventListener("click", handleFilterClick);
//
// Write a comment: why use delegation here instead of
// individual listeners on each button?

function handleFilterClick(event) {
  const filterValue = event.target.dataset.filter;
  if (!filterValue) {
    return;
  }

  document.querySelectorAll(".filter-btn").forEach((btn) => btn.classList.remove("active"));
  event.target.classList.add("active");

  document.querySelectorAll(".task-card").forEach((card) => {
    if (filterValue === "all") {
      card.classList.remove("hidden");
    } else if (card.dataset.priority === filterValue) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  });
}

// wire up here
document.querySelector(".header-right").addEventListener("click", handleFilterClick);

// ----------------------------------------------------------
// TASK 6 — handleKeyDown (keyboard shortcuts)
// ----------------------------------------------------------
// Declare a function called handleKeyDown.
// Parameter: event
//
// Inside:
//   IF event.key === "Escape":
//     - Clear both input fields (#task-title-input, #task-assignee-input)
//     - Log: "Inputs cleared"
//
//   IF event.key === "Enter" AND event.target.id === "task-title-input":
//     - Call handleAddTask()
//     (lets users press Enter in the title field to add a task)
//
// Wire it up to document.

function handleKeyDown(event) {
  if (event.key === "Escape") {
    document.getElementById("task-title-input").textContent = "";
    document.getElementById("task-assignee-input").textContent = "";
    console.log("Inputs cleared");
  }

  if (event.key === "Enter" && event.target.id === "task-title-input") {
    handleAddTask();
  }
}

// wire up here
document.addEventListener("input", handleKeyDown);

// ----------------------------------------------------------
// TASK 7 — Connect the dots: init
// ----------------------------------------------------------
// Declare a function called init.
// Inside: call renderBoard(tasks).
//
// Call init() at the bottom.

function init() {
  renderBoard(tasks);
}

// ----------------------------------------------------------
// ⭐ STRETCH GOAL — live search
// ----------------------------------------------------------
// Add a search input somewhere on the page (you can add a
// plain <input id="search-input"> anywhere in the HTML above
// the board, inside .add-task-bar).
//
// Declare a function called handleSearch.
// Parameter: event
//
// Inside:
//   - Get the search query: event.target.value.toLowerCase().trim()
//   - Select all .task-card elements
//   - For each card:
//       Get the title text: card.querySelector(".task-title").textContent.toLowerCase()
//       IF the title includes the query → remove class "hidden"
//       ELSE → add class "hidden"
//
// Wire it up:
//   document.getElementById("search-input")
//     .addEventListener("input", handleSearch);
//
// Write a comment: why use "input" and not "change" for live search?

// ============================================================
// WIRE UP ALL LISTENERS (above init)
// ============================================================

function handleSearch(event) {
  const searchQuery = event.target.value.toLowerCase().trim();
  const taskCards = document.querySelectorAll(".task-card");

  taskCards.forEach((card) => {
    const title = card.querySelector(".task-title").textContent.toLowerCase();

    if (title.includes(searchQuery)) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  });
}


document.getElementById("search-input").addEventListener("input", handleSearch);
// ============================================================
// START
// ============================================================
init();
