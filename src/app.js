const express = require('express')
const http = require('http')
const app = express()
const port = 3000
const routerApi = require('./routes/routes.js')
const socketApi = require('./socket/socket.js')
const serverSocket = http.createServer(app)

app.use(express.json())

routerApi(app);

serverSocket.listen(5151, socketApi(serverSocket))
app.listen(port, () => {
    console.log('listening in port 3000')
})