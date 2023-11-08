const buffer = new Buffer.from("Kevin");
console.log(buffer.toString());
console.log(buffer);
console.log(buffer.toJSON());

buffer.write("Savani");
console.log(buffer.toString());
console.log(buffer);
console.log(buffer.toJSON());