// Name: Kent Winsley R. Maravilla | Section: IV-BSIT-C
// Activity: N2 – Modular Calculator | Date: November 22, 2026

// Import the calculator function and formatter
const operations = require('./operations');
const formatResult = require('./formatter');
const path = require('path');

// Get command line arguments
const [operation, first, second] = process.argv.slice(2);
const a = Number(first);
const b = Number(second);

// Validate input
if (!operation || first === undefined || second === undefined ||
    Number.isNaN(a) || Number.isNaN(b)) {
    console.log('Usage: node index.js add 12 8');
    process.exit(1);
}

// Perform the operation and format the result
try {
    const choices = {
        add: operations.add,
        subtract: operations.subtract,
        multiply: operations.multiply,
        divide: operations.divide,
        average: operations.average
    };
    
    // Check if the operation is valid
    if (!choices[operation]) throw new Error('Unknown operation.');
    const result = choices[operation](a, b);
    console.log(formatResult(operation, a, b, result));
    console.log('Running from:', path.basename(__dirname));
} catch (error) {
    console.log('Error:', error.message);
}
