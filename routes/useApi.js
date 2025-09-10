

const express = require('express')

const userEndpoint = express.Router()


userEndpoint.route('/login')
    .get((req, res)=> res.send('this is login page'))
    .post((req, res)=> res.send('you logged successfully') )
    .patch((req, res)=> res.send('user has updated'))
    .delete((req, res)=> res.send('user deleted'))


userEndpoint.route('/sign-up')
    .get((req, res)=> res.send('this is sign up page'))
    .post((re, res)=> res.send('you have successfully signup'))
module.exports = userEndpoint