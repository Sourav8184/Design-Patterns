"use strict";
class CoffeeDecorator {
    constructor(coffee) {
        this.coffee = coffee;
    }
    cost() {
        return this.coffee.cost();
    }
    description() {
        return this.coffee.description();
    }
}
class MilkDecorator extends CoffeeDecorator {
    cost() {
        return this.coffee.cost() + 10;
    }
    description() {
        return this.coffee.description() + ", Milk";
    }
}
class SugarDecorator extends CoffeeDecorator {
    cost() {
        return this.coffee.cost() + 5;
    }
    description() {
        return this.coffee.description() + ", Sugar";
    }
}
class CaramelDecorator extends CoffeeDecorator {
    cost() {
        return this.coffee.cost() + 15;
    }
    description() {
        return this.coffee.description() + ", Caramel";
    }
}
class SimpleCoffee {
    cost() {
        return 50;
    }
    description() {
        return "Simple Coffee";
    }
}
let myCoffee = new SimpleCoffee();
console.log(`${myCoffee.description()} - ₹${myCoffee.cost()}`);
myCoffee = new MilkDecorator(myCoffee);
console.log(`${myCoffee.description()} - ₹${myCoffee.cost()}`);
myCoffee = new SugarDecorator(myCoffee);
console.log(`${myCoffee.description()} - ₹${myCoffee.cost()}`);
myCoffee = new CaramelDecorator(myCoffee);
console.log(`${myCoffee.description()} - ₹${myCoffee.cost()}`);
