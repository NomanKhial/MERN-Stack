// /**************************** 
//  Read File, 
//  We can read file in sync and
//  async way
// ******************************/

// const filesystem = require("fs");
// // reead synch return the red value
// const redContent = filesystem.readFileSync("./text.txt", "utf-8");
// // console.log(redContent)

// filesystem.readFile("./text.txt", "utf-8", (err, data) => {
//   // console.log(data)
// });

// /**************************** 
//  Writing into File, 
//  We can write file in sync and
//  async way
// ******************************/

// // this method is synchronous
// // filesystem.writeFile('./text.txt', 'Hey noma khial write data in text file!', ()=>{
// //     console.log('writting into file completed!')
// // })

// // this method write asynchoronously
// // filesystem.writeFile('./text.txt', 'nomankhial', ()=> {})

// //  filesystem.writeFileSync(". /noman.md", 'nomankhial userstories')

// /**************************** 
//      Creating Server
// ******************************/
// const http = require("http");
// const fs = require("fs");
// const path = require("path");

// const server = http.createServer((request, response) => {
//   // ! Path module
//   // console.log(path.basename('google.com/user.text)

//   // console.log(path.dirname('schools/students')) // return the directry name
//   // console.log(path.extname('google.net')) return the extention name
//   // console.log(path.isAbsolute("./home/users")) return boolean for url type
//   // console.log(path.isAbsolute("https://www.w3schools.com/"))
//   // console.log(path.join('https', '://google.com', '/users')) join multple url togather
//   // console.log(path.join('/users', '../system', './logs', 'file.txt'));
//   // const fullPath = path.join('/users', 'docs', 'file.txt');
//   // console.log(fullPath)

//   // console.log(path.resolve('index.html')) it will return the complete relative path

//   // console.log(__filename) return file name
//   // console.log(__dirname) return complete directry

//   // console.log(path.basename(__dirname)) return the last portion
//   // console.log(path.basename(__filename)) returns the last portion of file

//   // console.log(path.extname(path.resolve("index.html")))

//   // parsing the url

//   // console.log(path.parse(__dirname)) parse and retrn an object of fragement of complet path

//   // console.log(path.parse(__filename))

//   // console.log(path.format(path.parse(__filename))) it strigify parsed url back

//   /**
//     //  * path.basename() returns last fragment 
//     //  * path.extname() returns file extention
//     //  * path.join() joins two or more segment of paths
//     //  * path.resolve() process from right to left the segments and when it forms absolute path return
//     //  * path.parse() returns an object consisting of all sements og url
//     //  * path.format() format the parsed url back
//     //  * path.extname() return extention name of file
//     //  * path.isAbsolute() returns a bool value if path is absolute (true)
//     // *  path.normalize(`/team/${1+2}/gender`)
//     //  * _dirname
//     //  * _filename
//      * 
//      */

//     console.log(path.normalize(`/doc/${1+2}.//drivers`))

//   // console.log(path.delimiter) : / \

//   // console.log(path.join("home", "../about", "../index"))

//   // console.log(path.join('folder1', 'folder2', 'index.js'))
//   // console.log(path.isAbsolute(__filename))

//   // console.log(path.join(__dirname, "/node_modules/bin/nodemon.js"))

//   // console.log(path.resolve("/home", "about", "index")) Resolves a sequence of paths or path segments into an absolute path, processing from right to left until an absolute path is constructed.

//   //  console.log(path.resolve("index.html"))
//   let filePath = "";
//   if (request.url === "/") {
//     filePath = path.join(__dirname, "index.html");
//     response.writeHead(200, "response sent", { "content-type": "text/html" });
//   }
//   if (request.url === "/er.jpg") {
//     filePath = path.join(__dirname, "er.jpg");
//   }
//   if (request.url === "/style.css") {
//     filePath = path.join(__dirname, "style.css");
//     response.writeHead(200, { "content-type": "text/css" });
//   }
//   if (request.url === "/about") {
//     filePath = path.join(__dirname, "./about.html");
//     response.writeHead(200, { "content-type": "text/html" });
//   }

//   fs.readFile(filePath, (err, content) => {
//     response.end(content);
//   });
// });

// server.listen(3000, () => console.log("server has started!"));


// const express = require("express")
// const fs = require('fs')
// const path = require('path')
// const movies = JSON.parse(fs.readFileSync(path.join(__dirname, 'movies.json'), "utf-8"))

// const app = express()

// app.use(express.json())

// app.get("/api/v1/posts", (req, res)=>{
//   res.status(200).json(movies)
// })

// app.patch("/api/v1/posts/:id", (req, res)=>{



//   const requestedId = parseInt(req.params.id) 
//   const movietoUpdate =  movies.find(movie => movie.id === requestedId)

//   const movieIndex = movies.indexOf(movietoUpdate)

//   Object.assign(movietoUpdate, req.body)

//   movies[movieIndex] = movietoUpdate

//   fs.writeFileSync("./movies.json", JSON.stringify(movies))

//   res.status(200).json({modified: "succesfully", movies})
// })


// const users = JSON.parse(fs.readFileSync(path.join(__dirname + "/users.json"), "utf-8"))

// // endpoint for user editing


// app.patch("/api/v1/users/:id", (req, res)=>{
//   const requestedId = parseInt(req.params.id)
//   const machedObject = users.find(user => user.id === requestedId)
//   if (!machedObject) {
//     return res.status(404).json({msg: "No matched found"})
//   }
//   const matchObjectIndex = users.indexOf(machedObject)
  
//   Object.assign(machedObject, req.body)

//   users[matchObjectIndex] = machedObject

//   fs.writeFileSync("./users.json", JSON.stringify(users))

//   res.status(200).json(users)
// })



// delete method
// app.delete("/api/v1/users/:id", (req, res)=>{
//   const userId = parseInt(req.params.id)
//   const userObject = users.find(user => user.id === userId)


//   if (!userObject) {
//     return res.status(404).json({errorMesage: "User not found!"})
//   }

//   const userIndex = users.indexOf(userObject)

//   const deleted = users.splice(userIndex, 1)


//   fs.writeFileSync("./users.json", JSON.stringify(users))
//   res.status(204).json({deleted})
// })


// app.post("/api/v1/users", (req, res)=>{
//   users.push({id: Date.now() + crypto.randomUUID(), ...req.body})
//   fs.writeFileSync("./users.json", JSON.stringify(users))
//   res.status(201).json(users)
// })

// app.listen(8080)


// express routes

const express = require('express')
const app = express()


const router = express.Router()

// ! global middleware
app.use((req, res, next)=>{
  console.log('middleware is called!')
  next()
})


const routeMiddleWare = (req, res, next)=>{
  console.log('i am the post middleware')
  next()
}

// Chainable route handlers
app.route('/')
  .get((req, res)=>res.send('get request is made'))
  .post(routeMiddleWare, (req, res)=> res.send('post request is made'))
  .delete((req, res)=> res.send('delete request is made'))

app.listen(3000, ()=>console.log('server has started!'))