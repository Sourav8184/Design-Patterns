interface Coffee {
  cost(): number;
  description(): string;
}

class CoffeeDecorator implements Coffee {
  protected coffee: Coffee;

  constructor(coffee: Coffee) {
    this.coffee = coffee;
  }

  cost(): number {
    return this.coffee.cost();
  }

  description(): string {
    return this.coffee.description();
  }
}

class MilkDecorator extends CoffeeDecorator {
  cost(): number {
    return this.coffee.cost() + 10;
  }

  description(): string {
    return this.coffee.description() + ", Milk";
  }
}

class SugarDecorator extends CoffeeDecorator {
  cost(): number {
    return this.coffee.cost() + 5;
  }

  description(): string {
    return this.coffee.description() + ", Sugar";
  }
}

class CaramelDecorator extends CoffeeDecorator {
  cost(): number {
    return this.coffee.cost() + 15;
  }

  description(): string {
    return this.coffee.description() + ", Caramel";
  }
}

class SimpleCoffee implements Coffee {
  cost(): number {
    return 50;
  }

  description(): string {
    return "Simple Coffee";
  }
}

let myCoffee: Coffee = new SimpleCoffee();
console.log(`${myCoffee.description()} - ₹${myCoffee.cost()}`);

myCoffee = new MilkDecorator(myCoffee);
console.log(`${myCoffee.description()} - ₹${myCoffee.cost()}`);

myCoffee = new SugarDecorator(myCoffee);
console.log(`${myCoffee.description()} - ₹${myCoffee.cost()}`);

myCoffee = new CaramelDecorator(myCoffee);
console.log(`${myCoffee.description()} - ₹${myCoffee.cost()}`);
