const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

io.on('connection', client => {
  console.log('a user connected');
  client.on('chat message', msg => {
    io.emit('chat message', msg);
  });
});

http.listen(3001, err => {
  if (err) throw err;
  console.log('listening on *:3001');
});
