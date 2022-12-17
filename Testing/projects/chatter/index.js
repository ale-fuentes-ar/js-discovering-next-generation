const express = require('express');
const app = express();

const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', function(req, res) {
    //res.send('Hello human');
    res.render('index.ejs');
});

io.sockets.on("connection", function(socket){

    socket.on("username", function(username) {

        socket.username = username;
        io.emit(
            "is_online", 
            "● <em>" + socket.username + " joins the chat </em>"
        );
    });

    socket.on("disconnect", function(message) {

        io.emit(
            "is_online", 
            "◌ <em>" + socket.username + " out of chat </em>"
        );
    });

    socket.on("chat_message", function(message) {

        io.emit(
            "chat_message", 
            "<strong>" + socket.username + "</strong>: " + message
        );
    });

});

const server = http.listen(8080, function() {
    console.log('listen in *:8080');
});