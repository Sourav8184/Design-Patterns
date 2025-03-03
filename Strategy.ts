interface DiscountStrategy {
  giveDiscount(): void;
}

class CashbackDiscount implements DiscountStrategy {
  giveDiscount(): void {
    console.log("Apply Cashback Discount");
  }
}

class FlatDiscount implements DiscountStrategy {
  giveDiscount(): void {
    console.log("Apply Flat Discount");
  }
}

class CouponDiscount implements DiscountStrategy {
  giveDiscount(): void {
    console.log("Apply Coupon Discount");
  }
}

class DiscountApplier {
  private discountStrategy: DiscountStrategy;

  constructor(discountStrategy: DiscountStrategy) {
    this.discountStrategy = discountStrategy;
  }

  getDiscount(): void {
    this.discountStrategy.giveDiscount();
  }

  setDiscountStrategy(discountStrategy: DiscountStrategy): void {
    this.discountStrategy = discountStrategy;
  }
}

const discount = new DiscountApplier(new CashbackDiscount());
discount.getDiscount(); // Output: Apply Cashback Discount

discount.setDiscountStrategy(new FlatDiscount());
discount.getDiscount(); // Output: Apply Flat Discount

discount.setDiscountStrategy(new CouponDiscount());
discount.getDiscount(); // Output: Apply Coupen Discount
