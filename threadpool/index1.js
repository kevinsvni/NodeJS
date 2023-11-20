const https = require("node:https");

const start = Date.now();
for(let i=0; i<12; i++){
    https
    .request("https://www.google.com", (res) => {
        res.on("data", () => {});
        res.on("end", () => {
            console.log(`Request: ${i+1}`, Date.now()-start);
        });
    })
    .end();
}


// crypto.pbkdf2("password", "salt", 100000, 512, "sha512");
// crypto.pbkdf2("password", "salt", 100000, 512, "sha512");
// crypto.pbkdf2("password", "salt", 100000, 512, "sha512");
// console.log("Hash: ", Date.now() - start);