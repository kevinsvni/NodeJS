const PizzaShop = require("./pizza-shop");
const DrinkMachine = require("./drink-machine");

const pizzaShop = new PizzaShop();
const drinkMachine = new DrinkMachine();

pizzaShop.on("order", (size, topping) => {
    console.log(`Ordered received! Baking ${size} a pizza with ${topping}`);
    drinkMachine.serveDrink(size);
});

pizzaShop.order("large", "mashrooms");
pizzaShop.displayOrderNumber();