let redScore = 0; let blueScore = 0; let greenScore = 0; let yellowScore = 0;

module.exports = (io) => {
  io.on('connection', (socket) => {
    socket.emit('news', { hello: 'world' });
    socket.on('redProgress', (data) => {
      redScore = data.redProgress;
      socket.broadcast.emit('Broadcast', { message: `紅隊已經得 ${redScore} 分囉` });
      console.log(data);
    });
    socket.on('blueProgress', (data) => {
      blueScore = data.blueProgress;
      socket.broadcast.emit('Broadcast', { message: `籃隊已經得 ${blueScore} 分囉` });
      console.log(data);
    });
    socket.on('greenProgress', (data) => {
      greenScore = data.greenProgress;
      socket.broadcast.emit('Broadcast', { message: `綠隊已經得 ${greenScore} 分囉` });
      console.log(data);
    });
    socket.on('yellowProgress', (data) => {
      yellowScore = data.yellowProgress;
      socket.broadcast.emit('Broadcast', { message: `黃隊已經得 ${yellowScore} 分囉` });
      console.log(data);
    });
  });
}