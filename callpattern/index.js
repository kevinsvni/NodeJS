function greet(name){
    console.log(`Hello ${name}`);
}

function higherOrderFunction(callback){
    const name = "Kevin";
    callback(name)
}

higherOrderFunction(greet);