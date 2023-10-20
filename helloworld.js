 var printStuff = function(stuff){
    console.log(stuff);
 }

 function mainFunction(anotherFunction, value){
    anotherFunction(value)
 }

 mainFunction(printStuff, 'Hello World')