const http = require("node:http")
const fs = require("node:fs")

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Contect-Type": "text/html"});

    // const data =fs.readFileSync("./index.html");
    // res.end(data);

    // fs.createReadStream(__dirname + "/index.html").pipe(res);

    const name = "Kevin";
    let data = fs.readFileSync("./index.html", "utf-8");
    data = data.replace("{{name}}", name);
    res.end(data);
})

server.listen(8888, () => {
    console.log("Server running on port 8888");
});