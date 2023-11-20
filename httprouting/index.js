const http = require("node:http")

const server = http.createServer((req, res) => {
    if(req.url === "/"){
        res.writeHead(200, {"Contect-Type": "text/html"});
        res.end("Home Page")
    } else if(req.url === "/home"){
        res.writeHead(200, {"Contect-Type": "text/html"});
        res.end("About Page")
    } else if(req.url === "/api"){
        res.writeHead(200, {"Contect-Type": "application/json"});
        res.end(JSON.stringify({
            fname: "Kevin",
            lname: "Savani"
        }))
    } else{
        res.writeHead(404);
        res.end("Page not found")
    }
})

server.listen(8888, () => {
    console.log("Server running on port 8888");
});