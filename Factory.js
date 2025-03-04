"use strict";
class iPhone {
    createMobile() {
        return "Iphone";
    }
}
class Vivo {
    createMobile() {
        return "Vivo";
    }
}
class Oppo {
    createMobile() {
        return "Oppo";
    }
}
class Samsung {
    createMobile() {
        return "Samsung";
    }
}
class Factory {
    static productType(productType) {
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
