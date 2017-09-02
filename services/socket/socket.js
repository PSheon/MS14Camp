let redScore = 0; let blueScore = 0; let greenScore = 0; let yellowScore = 0;

module.exports = (io) => {
  io.on('connection', (socket) => {
    socket.emit('news', { hello: 'world' });
    socket.on('redProgress', (data) => {
      redScore = data.redProgress;
      socket.broadcast.emit('Broadcast', { message: `勃根地酒紅頭盔已經完成 ${redScore} 關囉！`, team: 'red' });
      //console.log(data);
    });
    socket.on('blueProgress', (data) => {
      blueScore = data.blueProgress;
      socket.broadcast.emit('Broadcast', { message: `鈷藍盔甲已經完成 ${blueScore} 關囉！`, team: 'blue' });
      //console.log(data);
    });
    socket.on('greenProgress', (data) => {
      greenScore = data.greenProgress;
      socket.broadcast.emit('Broadcast', { message: `翠綠寶劍已經完成 ${greenScore} 關囉！`, team: 'green' });
      //console.log(data);
    });
    socket.on('yellowProgress', (data) => {
      yellowScore = data.yellowProgress;
      socket.broadcast.emit('Broadcast', { message: `象牙盾牌已經完成 ${yellowScore} 關囉！`, team: 'yellow' });
      //console.log(data);
    });
  });
}