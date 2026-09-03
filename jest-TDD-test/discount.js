function calculatePrice(price, grade, coupon) {
  const originalPrice = price;

  // 1. 상품 가격 할인
  if (price >= 200000) {
    price *= 0.8;
  } else if (price >= 100000) {
    price *= 0.9;
  } else if (price >= 50000) {
    price *= 0.95;
  }

  // 2. 회원 등급 할인
  const gradeDiscount = {
    normal: 0,
    silver: 0.02,
    gold: 0.05,
    vip: 0.1,
  };

  price *= 1 - (gradeDiscount[grade] ?? 0);

  // 3. 쿠폰 할인
  if (coupon) {
    if (coupon.type === "fixed") {
      price -= coupon.value;
    } else if (coupon.type === "percent") {
      price *= 1 - coupon.value / 100;
    }
  }

  // 4. 원래 가격의 50% 이하로 내려가지 않도록 제한
  const minimumPrice = originalPrice * 0.5;

  price = Math.max(price, minimumPrice);

  return price;
}

module.exports = { calculatePrice };
