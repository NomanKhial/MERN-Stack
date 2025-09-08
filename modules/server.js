 const fs = require('fs')
 const http = require('http')

 const server = http.createServer((request, response)=>{
    if (request.url === '/about') {
        // const tb = fs.readFileSync("../index.html", "utf-8")
        // response.end(tb)

        const tb = fs.createReadStream("../index.html", {
            encoding:  "utf-8",
        }).pipe(response)

        // response.end(tb)
    }
    const student = {
        name: "Nomankhial",
        age:22,
        skills: ['front-end', 'backend']
    }
    response.writeHead(200, {"content-type": "application/json"})
    response.end(JSON.stringify(student))
 })

server.listen(3000, 'localhost', ()=>console.log('server has started'))