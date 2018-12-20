

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', function(socket){
    socket.emit('news', {hello:'world'});
})


app.get('/', function(req, res){
    res.sendFile(__dirname + '/sockets.html');
});

io.on('connection', function(socket){
    socket.on('chat message', function(msg){
      console.log('message: ' + msg);
      io.emit('chat message', msg);
    });
  });

http.listen(3000, function(){
  console.log('listening on *:3000');
});