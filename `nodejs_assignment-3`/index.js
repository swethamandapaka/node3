const http = require('http');
const fs = require('fs');
const portline = 4040
const server = http.createServer((req, res)=> {
  fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
})
server.listen(portline, ()=>console.log("Server running..."));
