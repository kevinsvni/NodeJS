const crypto = require("node:crypto");

process.env.UV_THREADPOOL_SIZE = 4

const start = Date.now();
for(let i=0; i<4; i++){
    crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
        console.log(`Hash: ${i+1}`, Date.now() - start);
    });
}


// crypto.pbkdf2("password", "salt", 100000, 512, "sha512");
// crypto.pbkdf2("password", "salt", 100000, 512, "sha512");
// crypto.pbkdf2("password", "salt", 100000, 512, "sha512");
// console.log("Hash: ", Date.now() - start);