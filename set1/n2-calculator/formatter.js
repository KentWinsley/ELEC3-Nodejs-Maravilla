// Name: Kent Winsley R. Maravilla | Section: IV-BSIT-C
// Activity: N2 – Modular Calculator | Date: November 22, 2026

// Formatter function to format the result of the operation
function formatResult(operation, a, b, result) {
    return `${a} ${operation} ${b} = ${result}`;
}

// Export the formatter function
module.exports = formatResult;
