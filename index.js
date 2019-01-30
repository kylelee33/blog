const express = require('express')
const server = express()

server.use(express.static('public', {
    extensions: ['html', 'htm']
}))

const {PORT = 5000} = process.env
server.listen(PORT, () => console.log("Listening at http://localhost:%s", PORT))