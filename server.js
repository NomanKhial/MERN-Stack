const express = require('express')
const userEndpoint = require('./routes/useApi')
const moviesRouter = require('./routes/moviesApi')
const app = express()

app.use(express.json())
app.use('/', userEndpoint)
app.use('/', moviesRouter)

app.listen(3000, ()=> console.log('server has started'))