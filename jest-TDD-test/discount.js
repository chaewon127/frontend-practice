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

// 상품 가격에 따른 할인
function applyProductDiscount(price) {
  // PRODUCT_DISCOUNTS 배열에서 현재 가격에 적용할 수 있는 첫 번째 할인 조건 찾기
  const discount = PRODUCT_DISCOUNTS.find(({ minPrice }) => price >= minPrice);

  // 할인 조건이 없으면 원래 가격 반환
  if (!discount) {
    return price;
  }

  // 할인 적용
  return price * (1 - discount.rate);
}

// 회원 등급에 따른 할인
function applyGradeDiscount(price, grade) {
  // GRADE_DISCOUNTS 객체에서 현재 회원 등급에 해당하는 할인율 가져오기
  // ?? 0 -> 오류 방지 : grade가 GRADE_DISCOUNTS에 없으면(Null이나 undefined) 0으로 처리
  const discountRate = GRADE_DISCOUNTS[grade] ?? 0;

  return price * (1 - discountRate);
}

// 쿠폰 할인
function applyCoupon(price, coupon) {
  if (!coupon) {
    return price;
  }

  // 쿠폰 타입에 따라 할인 적용 - 정액 할인
  if (coupon.type === "fixed") {
    return price - coupon.value;
  }

  // 쿠폰 타입에 따라 할인 적용 - 비율 할인
  if (coupon.type === "percent") {
    return price * (1 - coupon.value / 100);
  }

  return price;
}

function calculatePrice(price, grade, coupon) {
  // 원래 가격 저장 - 조건 검사(원래 가격의 50%보다 낮아지지 않도록 한다)를 위함
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
