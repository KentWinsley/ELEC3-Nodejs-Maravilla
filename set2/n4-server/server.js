// Name: Kent Winsley R. Maravilla | Section: IV-BSIT-C
// Activity: N4 – Basic HTTP Server | Date: November 25, 2026

const http = require('http');

// Create an HTTP server that listens on port 8000 and responds to different routes
const server = http.createServer((request, response) => {
    response.setHeader('Content-Type', 'text/html; charset=utf-8');

    // Handle different routes based on the request URL
    if (request.url === '/') {
        response.statusCode = 200;
        // Home page content
        response.end('<h1>Home</h1><p>Kent Winsley R. Maravilla</p><p>IV-BSIT-C</p>');
    } else if (request.url === '/about') {
        response.statusCode = 200;
        // About page content
        response.end('<h1>About</h1><p>I am a BSIT student learning Node.js.</p>');
    } else if (request.url === '/contact') {
        response.statusCode = 200;
        // Contact page content
        response.end('<h1>Contact</h1><p>Student contact page.</p>');
    } else {
        response.statusCode = 404;
        // handle unknown URLs
        response.end('<h1>404</h1><p>Page not found</p>');
    }
});

// Start the server and listen on port 8000
server.listen(8000, () => {
    console.log('Server running at http://localhost:8000');
});
