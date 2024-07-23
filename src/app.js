const express = require('express')
const app = express()
const port = 3000
const routerApi = require('./routes/routes.js')

app.use(express.json())

routerApi(app);

app.listen(port, () => {
    console.log('listening in port 3000')
})