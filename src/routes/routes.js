const expres = require('express')
const pingController = require('./pingRoutes')

const routes = (app) => {
    const router = expres.Router()
    app.use('/api/v1', router)
    router.use('/ping', pingController)
}

module.exports = routes
