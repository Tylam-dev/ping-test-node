
const socketIo = require('socket.io')
const service = require('../services/pingService')
const pingService = new service()
const socketApi = (server) => {
    const io = socketIo(server, {
        cors: {
            origin: "http://127.0.0.1:5500",
            methods: ["GET", "POST"]
        }
    })
    io.on('connection', (socket) => {
        console.log(`Nuevo cliente conectado: ${socket.id}`);
        let pingInterval
        socket.on('message', async(msg) => {
            if(msg.state === 'start'){
                pingInterval = setInterval(async() => {
                    const response = await pingService.IsAlivePing(msg.ip)
                    io.emit('message', {ping: 'active', hostAlive: response})
                },2000)
            }else if(msg.state === 'stop'){
                clearInterval(pingInterval)
            }
            console.log(`Mensaje recibido de ${socket.id}`);
        });
      
        socket.on('disconnect', () => {
            if(pingInterval){
                clearInterval(pingInterval)
            }
          console.log(`Cliente desconectado: ${socket.id}`);
        });
      });
}

module.exports = socketApi