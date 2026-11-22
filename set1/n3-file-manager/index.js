// Name: Kent Winsley R. Maravilla | Section: IV-BSIT-C
// Activity: N3 – File Manager with fs and path | Date: November 22, 2026

const fs = require('fs');
const path = require('path');
const folder = path.join(__dirname, 'files');

// Create the files folder if it doesn't exist
if (!fs.existsSync(folder)) fs.mkdirSync(folder);

// Get command-line arguments
const [command, filename, ...textParts] = process.argv.slice(2);
const filePath = filename ? path.join(folder, path.basename(filename)) : '';
const content = textParts.join(' ');

// Handle commands with error handling
try {
    if (command === 'create') {
        if (!filename) throw new Error('Please provide a file name.');
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Created:', filePath);
    } else if (command === 'read') {
        console.log(fs.readFileSync(filePath, 'utf8'));
    } else if (command === 'update') {
        fs.appendFileSync(filePath, content, 'utf8');
        console.log('Text appended.');
    } else if (command === 'delete') {
        fs.unlinkSync(filePath);
        console.log('File deleted.');
    } else if (command === 'list') {
        const names = fs.readdirSync(folder);
        if (names.length === 0) console.log('No files yet.');

        // Display each file's path, name, extension, and contents
        names.forEach(name => {
            const fullPath = path.join(folder, name);
            console.log('\nPath:', fullPath);
            console.log('Name:', path.basename(name));
            console.log('Extension:', path.extname(name));
            console.log('Contents:', fs.readFileSync(fullPath, 'utf8'));
        });
    } else {
        console.log('Commands: create, read, update, delete, list');
        console.log('Example: node index.js create notes.txt Hello');
    }
} catch (error) {
    // Handle errors, including missing files
    if (error.code === 'ENOENT') console.log('That file does not exist.');
    else console.log('Error:', error.message);
}