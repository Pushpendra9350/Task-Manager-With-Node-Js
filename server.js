// this is for getting express 
const express = require('express')

// initialize express as a server 
const server = express()


var port = process.env.PORT || 8080

// in order to 
server.use(express.json())
server.use(express.urlencoded({ extended: true }))


server.use('/public', express.static(__dirname + '/public'))


server.use('/todos', require('./routes/api/index').route)


server.listen(port, () => console.log("server has been started"))