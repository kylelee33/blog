const express = require('express')
const server = express()

server.use(express.static('public', {
    extensions: ['html', 'htm']
}))

const {PORT = 80} = process.env
server.listen(PORT, () => console.log("Listening at http://localhost:%s", PORT))