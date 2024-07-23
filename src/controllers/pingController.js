const express = require('express')
const router = express.Router()
const service = require('../services/pingService')
const pingService = new service()

router.get('/:ip',async (req, res) => {
    const { ip } = req.params
    res.send(await pingService.IsAlivePing(ip))
})

module.exports = router
