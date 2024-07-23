const ping = require('ping')

class PingService {
    async IsAlivePing(ip) {
        const isAlive = await ping.promise.probe(ip)
        return {isAlive: isAlive.alive}
    }
}

module.exports = PingService