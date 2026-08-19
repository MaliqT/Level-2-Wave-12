// ============================================================
// 🐛  DATA TYPES — HOMEWORK  |  DEBUG TASKS
// ============================================================


// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This tries to build a greeting using the customer's first name.
// It logs "undefined Rivera" instead of "Alex Rivera". What's wrong?

const customerName = "alex rivera";
const cleanName    = customerName.trim().toLowerCase();

// Trying to capitalise the first letter:
const titled = cleanName[0].toUpperCase() + cleanName.slice(1);
console.log(`Hello, ${titled}!`);

// What's wrong ↓
// declared cleanName but cleanname is called instead
// Your fix ↓

// const titled = cleanName[0].toUpperCase() + cleanName.slice(1);


// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// This calculates the total for an order item.
// The result is "79.992" instead of 159.98. What's wrong?

const itemPrice = "79.99";  // from a form input
const itemQty   = 2;

const lineTotal = itemPrice * itemQty;  // works — * coerces
const receipt   = `Total: $${lineTotal}`; // bug here

console.log(receipt); // "Total: $79.99159.98" — wrong

// What's wrong ↓
//const receipt = `Total: $${itemPrice + lineTotal}`;   since it's concatenating two strings together
// Your fix ↓
// const receipt = `Total: $${lineTotal}`

// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This builds a discount label and checks if a code is valid.
// There are TWO bugs — one produces a wrong boolean,
// one produces a wrong string.

const rawCode     = "  save10  ";
const validCode   = "SAVE10";

// Bug 1: comparing without cleaning
const cleanCode = rawCode.trim().toUpperCase();
const isValid = cleanCode === validCode;
console.log(`Code valid: ${isValid}`);  // false — wrong, should be true

// Bug 2: building a label with the raw code
const label = `Discount code: ${cleanCode} — valid: ${isValid}`;
console.log(label); // shows messy whitespace in the label

// Bug 1 ↓
//rawCode === validCode is performing strict equality so rawCode needs to be cleaned up

// Bug 2 ↓
//rawCode has extra whitespaces in it

// Your fix for both ↓
//const cleanCode = rawCode.trim().toUpperCase();
