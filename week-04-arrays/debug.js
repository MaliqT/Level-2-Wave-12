// ============================================================
// 🐛  ARRAYS — HOMEWORK  |  DEBUG TASKS
// ============================================================
// Fix the bug in each snippet.
// Explain what was wrong as a comment. Then fix it.
// ============================================================


// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This should log the middle element ("C") of the array.
// Instead it logs undefined. What's wrong?

const letters = ["A", "B", "C", "D", "E"];
const middleIndex = Math.floor(letters.length / 2);
console.log(letters[middleIndex]);

// What's wrong ↓
// letters.length / 2 will return 2.5 but JS returns the ceiling of the result

// Your fix ↓
// Math.floor(letters.length / 2);


// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// This loop should build a total of all prices.
// It logs NaN instead of a number. What's wrong?

const prices = [10, 20, 30, 40];
let total = 0;

for (let i = 0; i < prices.length; i++) {
  total += prices[i];
}

console.log("Total: $" + total);

// What's wrong ↓
// i <= prices.length means that i will iterate + 1 of the element count for the array since the array index starts at 0 and ends at length - 1.

// Your fix ↓
// i < prices.length


// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This code is supposed to find the highest score in the array
// and log the winner's name. It always logs the wrong winner.
// There are TWO bugs. Find both.

const names  = ["Alice", "Bob", "Carol", "Dave"];
const scores = [82, 91, 78, 95];

let topIndex  = 0;
let topScore  = 0;

for (let i = 0; i < scores.length; i++) {
  if (scores[i] > topScore) {
    topScore = scores[i];
    topIndex = i;
  }
}

console.log("Winner: " + names[topIndex] + " with " + topScore);

// Bug 1 ↓
// As of right now the code does not break. The corrrect winner and their name is displayed from the start. However, I guess I can spot bad practices
// Bug 1 would be bad practice at topIndex = 1 since the index for arrays start at 0 we want topIndex to be 0


// Bug 2 ↓
// I cannot find the second bug

// Your fix ↓
// let topIndex = 0;