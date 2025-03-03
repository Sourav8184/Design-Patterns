"use strict";
class CashbackDiscount {
    giveDiscount() {
        console.log("Apply Cashback Discount");
    }
}
class FlatDiscount {
    giveDiscount() {
        console.log("Apply Flat Discount");
    }
}
class CouponDiscount {
    giveDiscount() {
        console.log("Apply Coupon Discount");
    }
}
class DiscountApplier {
    constructor(discountStrategy) {
        this.discountStrategy = discountStrategy;
    }
    getDiscount() {
        this.discountStrategy.giveDiscount();
    }
    setDiscountStrategy(discountStrategy) {
        this.discountStrategy = discountStrategy;
    }
}
const discount = new DiscountApplier(new CashbackDiscount());
discount.getDiscount(); // Output: Apply Cashback Discount
discount.setDiscountStrategy(new FlatDiscount());
discount.getDiscount(); // Output: Apply Flat Discount
discount.setDiscountStrategy(new CouponDiscount());
discount.getDiscount(); // Output: Apply Coupen Discount
