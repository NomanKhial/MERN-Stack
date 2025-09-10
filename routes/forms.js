const express = require('express')
const formsRouter = express.Router({mergeParams:true, strict:true, caseSensitive:true})
const path = require('path')
const fs = require('fs')
const filePath = path.join(__dirname, "../contact-info.txt")
formsRouter.route('/contact')
        .get((req, res)=>{
const data = fs.readFileSync(filePath, "utf-8")
res.send(data)
        })
        .post((req, res) => {
    fs.writeFileSync(
        path.join(__dirname, "../contact-info.txt"), 
        JSON.stringify(req.body, null, 2), 
        "utf-8"
    )
    res.status(200).json({ msg: "file created" })
})


        module.exports = formsRouter