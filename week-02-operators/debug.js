// ============================================================
// 🐛  OPERATORS — HOMEWORK  |  DEBUG TASKS
// ============================================================
// Fix the bug in each snippet.
// Explain what was wrong as a comment. Then fix it.
// ============================================================


// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This should calculate a 15% tip but the result is wrong.

const billAmount = 80;
const tipPercent = 15;
const tipAmount = billAmount * (tipPercent / 100);
console.log("Tip: $" + tipAmount);

// What's wrong ↓
// const tipAmount = billAmount % tipPercent;
// Your fix ↓
// const tipAmount = billAmount * (tipPercent / 100);

// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// The developer wants to track a countdown timer.
// Something is wrong with how the variable is declared.

let countdown = 10;
countdown -= 1;
countdown -= 1;
countdown -= 1;
console.log("Countdown: " + countdown);

// What's wrong ↓
// lines 31 - 33 countdown -= 1;
// Your fix ↓
// let countdown = 10;


// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This code is supposed to check if two usernames match.
// It always logs true even when they shouldn't match.
// There are also two style issues (not errors, but bad practice).
// Find the logic bug AND the two style issues.

const firstUsername = "gamer99";
const secondUsername = "Gamer99";
console.log("Names match: " + (firstUsername === secondUsername));

// Logic bug ↓
// The logic bug is using == instead of ===. In this case, the comparison is not strict so it only checks if the types are the same which they are which is why it always returns true

// Style issue 1 ↓
// First issue is using var to declare a variable. Old, deprecated, and non-scoping

// Style issue 2 ↓
// Second issue is the naming convention of variables. We have username1 and username2 which is bad practice. Variables should follow camel style naming and no numbers

// Your fix ↓
// const firstUsername
// const secondUsername
// console.log("Names match: " + (firstUsername === secondUsername))