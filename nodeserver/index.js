const http = require("node:http");

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Contect-Type": "text/plain"});
    res.end("Hello Kevin!");
    console.log(req)
});

server.listen(8888, () => {
    console.log("Server running on port 8888");
});