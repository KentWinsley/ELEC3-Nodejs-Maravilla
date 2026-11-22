// Name: Kent Winsley R. Maravilla | Section: IV-BSIT-C
// Activity: N2 – Modular Calculator | Date: November 22, 2026

// Define the operations
function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) {
    if (b === 0) throw new Error('Cannot divide by zero.');
    return a / b;
}
function average(a, b) { return (a + b) / 2; }

// Export the operations
module.exports = { add, subtract, multiply, divide, average };
