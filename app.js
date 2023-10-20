console.log("Filename: " + __filename);
console.log("Dirname: " + __dirname);

function print(){
    console.log("This was from setTimeout");
    // setInterval(print1, 2000)
}
setTimeout(print, 5000)

function print1(){
    console.log("This was from setInterval");
}
setInterval(print1, 2000)