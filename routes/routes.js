const express = require('express')

const router = express.Router()

const app = express()

app.use(express.json())

app.listen(3000, ()=>console.log('server has started!'))