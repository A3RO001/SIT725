const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Serve static files from the same directory (for index.html)
app.use(express.static(__dirname));

// Handle socket connections
io.on('connection', (socket) => {
    console.log('A user connected!!');

    // Receive message from one client and broadcast to all
    socket.on('message', (msg) => {
        console.log('Message received:', msg);
        io.emit('message', msg); // send to all clients including sender
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected :(');
    });
});

// Start the server
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
