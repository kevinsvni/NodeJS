// const addFn = require("./moduleAdd")

// console.log("Hello World")
// console.log(addFn(1,4))
// console.log(addFn(4,4))

const SuperHero = require("./super-hero");

const batman = new SuperHero("Batman");
console.log(batman.getName());

batman.setName("Bruce Wayne");
console.log(batman.getName());

const superman = new SuperHero("Superman");
console.log(superman.getName());