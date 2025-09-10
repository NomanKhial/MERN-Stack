const express = require('express')
const router = express.Router()


const app = express()

app.use(express.json())
// chainable route handlers
router.route('/')
    .get((req, res)=> res.send('call to more organized version of home route'))
    .post((req, res)=> res.send('post request has been made'))

router.route(['/movies', '/movies/:name'])
    .post((req, res)=>{
        res.send(`post request has been made for ${req.params.name ?? 'Terenaam' }`)
    })

module.exports = router