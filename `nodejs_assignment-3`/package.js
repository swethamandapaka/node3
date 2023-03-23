const http = require ("http")
const server = http.createServer((request,Response)=>{
    console.log("some client is requested")
    Response.end("you requested a service")
})
server.listen(3000,()=>{
 console.log("Backend app is running on port 3000")
})