// ============================================================
// 🐛  ARRAY METHODS — HOMEWORK  |  DEBUG TASKS
// ============================================================
// Fix the bug in each snippet.
// Explain what was wrong as a comment. Then fix it.
// ============================================================


// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This should create a new array of prices with tax added (10%).
// Instead it logs an array of undefined. What's wrong?

const prices = [29.99, 49.99, 14.99, 99.99];

const withTax = prices.map(function(price) {
  return (price * 1.10).toFixed(2);
});

console.log("With tax:", withTax);

// What's wrong ↓
// map is supposed to have a return value

// Your fix ↓
// return (price * 1.10).toFixed(2)


// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// This should return only the pending orders.
// But it returns an empty array. Why?

const orders = [
  { id: 1, status: "delivered" },
  { id: 2, status: "pending"   },
  { id: 3, status: "pending"   },
  { id: 4, status: "cancelled" }
];

const pending = orders.filter(function(order) {
  return order.status === "pending";
});

console.log(pending);

// What's wrong ↓
// It returns an empty array because it's not checking for a boolean value and thus cannot return anything
// order.status = "pending";

// Your fix ↓
// order.status === "pending";


// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This should calculate the total value of all orders
// (quantity × price for each). It produces a wrong result.
// There are TWO bugs.

const lineItems = [
  { product: "Shirt",  quantity: 2, price: 29.99 },
  { product: "Jeans",  quantity: 1, price: 59.99 },
  { product: "Jacket", quantity: 3, price: 89.99 }
];

const orderTotal = lineItems.reduce(function(acc, item) {
  return acc + item.quantity * item.price;
}, 0);

console.log("Order total: $" + orderTotal.toFixed(2));

// Bug 1 ↓
// The first bug is because there is no initial value for acc in the reduce method.

// Bug 2 ↓
// I guess the second bug is the notation of the value of orderTotal

// Your fix ↓
//}, 0); for line 72
// orderTotal.toFixed(2) for line 74
