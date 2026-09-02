// ============================================================
// 🐛  LOOPS — HOMEWORK  |  DEBUG TASKS
// ============================================================
// Fix the bug in each snippet.
// Explain what was wrong as a comment. Then fix it.
// ============================================================


// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This loop should log numbers 1 through 10.
// It only logs 1 through 9. What's wrong?

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// What's wrong ↓
// i < 10

// Your fix ↓
// i <= 10

// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// This loop should calculate the sum of 1 through 5 (answer: 15).
// It always logs 0. What's wrong?
let total = 0;

for (let i = 1; i <= 5; i++) {
  total += i;
}
console.log("Sum: " + total);

// What's wrong ↓
// let total = 0 is declared inside the loop so it's locally scoped only for the loop

// Your fix ↓
// declare total outside of the loop

// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This loop should log all ODD numbers from 1 to 10,
// then log "Done!" at the end.
// Instead it logs nothing and skips straight to "Done!".
// There are TWO bugs. Find both.

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 1) {
    console.log(i);
  } else {
    continue;
  }
}
console.log("Done!");

// Bug 1 ↓
// It's checking for even numbers and logging those numbers instead

// Bug 2 ↓
// Couldn't find the second bug. Only changed (i % 2 === 0) to (i % 2 === 1) and the program works


// Your fix ↓
// if (i % 2 === 1) {
//    console.log(i) 
// } else {
//    continue; 
// }