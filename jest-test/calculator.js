function calculateTotal(price, quantity, discount) {
  return price * quantity * (1 - discount);
}

// 1. 장바구니 페이지에서 다음과 같이 작성
const cartTotal = calculateTotal(1000, 2, 0.1); // 1800원
console.log(`총 가격: ${cartTotal}원`);

// 2. 결제 페이지에서 다음과 같이 작성
const paymentTotal = calculateTotal(2000, 4); // NaN원
console.log(`총 가격: ${paymentTotal}원`);
