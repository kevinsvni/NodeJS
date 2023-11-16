const fs = require("node:fs");

console.log("First");

const data = fs.readFileSync("./file.txt", "utf-8");
console.log(data);

console.log("Second");

fs.readFile("./file.txt", "utf-8", (error, data) => {
    if(error){
        console.log(error)
    }else{
        console.log(data)
    }
})

console.log("Third");

fs.writeFileSync("./greet.txt", "Hello Kevin!");

fs.writeFile("greet.txt", " \n\nHello World!!!", {flag: "a"}, (err) => {
    if(err){
        console.log(err);
    }else{
        console.log("File written successfully")
    }
})
