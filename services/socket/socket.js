module.exports = (io) => {
  io.on('connection', (socket) => {
    socket.emit('news', { hello: 'world' });
    socket.on('redProcess', (data) => {
      console.log(data);
    });
    socket.on('blueProcess', (data) => {
      console.log(data);
    });
    socket.on('greenProcess', (data) => {
      console.log(data);
    });
    socket.on('yellowProcess', (data) => {
      console.log(data);
    });
  });
}