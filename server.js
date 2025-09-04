
/**************************** 
 Read File, 
 We can read file in sync and
 async way
******************************/

const filesystem = require('fs')
// reead synch return the red value
const redContent = filesystem.readFileSync('./text.txt', 'utf-8')
// console.log(redContent)

filesystem.readFile('./text.txt', 'utf-8', (err, data)=>{
    // console.log(data)
})

/**************************** 
 Writing into File, 
 We can write file in sync and
 async way
******************************/

// this method is synchronous
// filesystem.writeFile('./text.txt', 'Hey noma khial write data in text file!', ()=>{
//     console.log('writting into file completed!')
// })

// this method write asynchoronously
// filesystem.writeFile('./text.txt', 'nomankhial', ()=> {})


//  filesystem.writeFileSync(". /noman.md", 'nomankhial userstories')


/**************************** 
     Creating Server
******************************/
const http = require('http');
const fs = require('fs');
const path = require('path');


const server = http.createServer((request, response)=>{
    let filePath = ''
    if (request.url === '/') {
        filePath = path.join(__dirname, "index.html");
        response.writeHead(200, "response sent", {"content-type": "text/html"})
    }
    if (request.url === '/style.css') {
        filePath = path.join(__dirname, 'style.css')
        response.writeHead(200, {"content-type": "text/css"})
    }

    fs.readFile(filePath, (err, content)=>{
        response.end(content)
    })
})

server.listen(3000, ()=>console.log('server has started!'))