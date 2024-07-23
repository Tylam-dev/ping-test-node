const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.use('/api/v1/ping')

app.listen(port, () => {
    console.log('listening in port 3000')
})