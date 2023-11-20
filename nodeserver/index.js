const http = require("node:http");

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Contect-Type": "text/plain"});
    const superHero = {
        fname: "Kevin",
        lname: "Savani"
    }
    res.end(JSON.stringify(superHero));
    console.log(req)
});

server.listen(8888, () => {
    console.log("Server running on port 8888");
});