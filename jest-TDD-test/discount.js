const PRODUCT_DISCOUNTS = [
  { minPrice: 200000, rate: 0.2 },
  { minPrice: 100000, rate: 0.1 },
  { minPrice: 50000, rate: 0.05 },
];

const GRADE_DISCOUNTS = {
  normal: 0,
  silver: 0.02,
  gold: 0.05,
  vip: 0.1,
};

function applyProductDiscount(price) {
  const discount = PRODUCT_DISCOUNTS.find(({ minPrice }) => price >= minPrice);

  if (!discount) {
    return price;
  }

  return price * (1 - discount.rate);
}

function applyGradeDiscount(price, grade) {
  const discountRate = GRADE_DISCOUNTS[grade] ?? 0;

  return price * (1 - discountRate);
}

function applyCoupon(price, coupon) {
  if (!coupon) {
    return price;
  }

  if (coupon.type === "fixed") {
    return price - coupon.value;
  }

  if (coupon.type === "percent") {
    return price * (1 - coupon.value / 100);
  }

  return price;
}

function calculatePrice(price, grade, coupon) {
  const originalPrice = price;

  // 상품 가격 할인
  price = applyProductDiscount(price);

  // 회원 등급 할인
  price = applyGradeDiscount(price, grade);

  // 쿠폰 할인
  price = applyCoupon(price, coupon);

  // 최종 가격은 원래 가격의 50% 미만으로 내려갈 수 없음
  const minimumPrice = originalPrice * 0.5;

  return Math.max(price, minimumPrice);
}

module.exports = { calculatePrice };
