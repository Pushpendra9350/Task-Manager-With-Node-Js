const route = require('express').Router()

// this is all about routing 
route.use('/', require('./todos'))
route.use('/', require('./notes'))


exports = module.exports = { route }