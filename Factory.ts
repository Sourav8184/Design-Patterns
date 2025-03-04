interface mobile {
  createMobile(): string;
}

class iPhone implements mobile {
  createMobile(): string {
    return "Iphone";
  }
}

class Vivo implements mobile {
  createMobile(): string {
    return "Vivo";
  }
}

class Oppo implements mobile {
  createMobile(): string {
    return "Oppo";
  }
}

class Samsung implements mobile {
  createMobile(): string {
    return "Samsung";
  }
}

class Factory {
  static productType(productType: string): mobile {
    switch (productType) {
      case "Iphone":
        return new iPhone();
      case "Vivo":
        return new Vivo();
      case "Oppo":
        return new Oppo();
      case "Samsung":
        return new Samsung();
      default:
        throw new Error("Invalid product type");
    }
  }
}

let mobile = Factory.productType("Oppo");
console.log(mobile.createMobile());

mobile = Factory.productType("Vivo");
console.log(mobile.createMobile());

mobile = Factory.productType("Iphone");
console.log(mobile.createMobile());

mobile = Factory.productType("Samsung");
console.log(mobile.createMobile());
