const ping = require('ping')

const host = '192.168.201.1'

setInterval(() => {ping.promise.probe(host)
.then((res) => console.log(res))}, 3000)
