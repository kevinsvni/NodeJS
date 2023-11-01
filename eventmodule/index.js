const EventEmitter = require("node:events");

const emitter = new EventEmitter();

emitter.on('order-pizza', (size, topping) => {
    console.log(`Ordered received! Baking ${size} a pizza with ${topping}`)
})

emitter.on('order-pizza', (size) => {
    if(size === 'large'){
        console.log('Serving a complimentary pop')
    }
})

emitter.emit('order-pizza', 'large', 'mushrooms')