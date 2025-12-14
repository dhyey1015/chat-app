const express = require('express');
const http = require('http');
const path = require('path');
const {Server} = require("socket.io");

const file = path.resolve("./public/index.html")

const app = express();
const server = http.createServer(app);
const io = new Server(server)

io.on('connection', (socket) => { // socket => client
    socket.on('user-message-client', (message) => {
        io.emit('user-message-server', message)
    })
})

app.get('/', (req, res) =>{
    res.sendFile(file);
})

app.post('/signin', (req, res) =>{
    
})

server.listen(9000, () =>{console.log("server is started at port 9000")});

