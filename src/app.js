const express = require('express')
const app = express()
const port = 3000

app.use(express.static('js'))

app.get('/', (req,res) => {
    res.send({'message':'Hello World'})
})

app.listen(port, () => {
    console.log('listening in port 3000')
})