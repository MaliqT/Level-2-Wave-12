// ============================================================
// 🐛  FUNCTIONS — HOMEWORK  |  DEBUG TASKS
// ============================================================

// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This arrow function should return the full name
// but always returns undefined. What's wrong?

const getFullName = (first, last) => {
  return first + " " + last;
};

console.log(getFullName("Alex", "Rivera"));

// What's wrong ↓
//There is no return keyword present. This is a function expression and it's explicit meaning it needs the return keyword.

// Your fix — write TWO versions:
//   a) Fix by adding return inside the braces
//   b) Fix by removing the braces (one-liner implicit return)

// MY FIX
// const getFullame = (first, last) => {
//  return first + " " + last; 
//};

// or

// const getFullName = (first, last) => first + " " + last;

// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// This should return "Admin", "Moderator", or "Member"
// depending on role. It works for "admin" but returns
// undefined for everything else. What's wrong?

function getRoleLabel(role) {
  if (role === "admin") {
    return "Admin";
  } else if (role === "mod") {
    return "Moderator";
  } else {
    return "Member";
  }
}

//console.log(getRoleLabel("admin")); // "Admin" ✅
//console.log(getRoleLabel("mod")); // undefined ❌
//console.log(getRoleLabel("member")); // undefined ❌

// What's wrong ↓
// There was no return for the else if chain and else statement

// Your fix ↓
// return "Moderator"
// return "Member"

// Bonus: rewrite the whole function as an arrow function
// using nested ternaries (just to see what it looks like —
// then write a comment about whether you'd actually use it).

const roleLabel = (role) => role === "admin" ? "Admin" : role === "mod" ? "Moderator" : "Member";

console.log(roleLabel("admin"));
console.log(roleLabel("mod"));
console.log(roleLabel("member"));

//Honestly, I only see myself using this in certain situations. For the most part, I like readable code, not just for myself and nested ternaries may trip up some people so I wouldn't use it a whole lot.

// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This discount calculator has TWO bugs.
// Both cause wrong math — find them both.

const applyDiscount = (price, discountPercent = 10) => {
  const discountAmount = price * (discountPercent/100);
  const finalPrice = price - discountAmount;
  return finalPrice;
};

console.log(applyDiscount(100, 20)); // expected: 80
console.log(applyDiscount(50)); // expected: 45

// Bug 1 (math) ↓
// price * discountPercent since we're applying percent to a whole number, we need to convert the percent value to decimal.

// Bug 2 (math) ↓
// price + discountAmount is adding on the discount on top of the price meaning the user will end up paying the discount

// Your fix ↓
// price * (discountPercent / 100)
// price - discountAmount;
