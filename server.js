const express = require('express')
const userEndpoint = require('./routes/useApi')
const moviesRouter = require('./routes/moviesApi')
const formsRouter = require('./routes/forms')
const app = express({})

app.use(express.static("./public"))
app.use(express.json())
app.use(express.urlencoded())
app.use('/', userEndpoint)
app.use("/", formsRouter)
app.use('/', moviesRouter)
app.set("view engine", "ejs");

app.listen(3000, ()=> console.log('server has started'))