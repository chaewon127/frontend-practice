const { calculateTotal } = require("./calculator");

test("기본 계산 - 1000원 상품 2개의 가격은 2000원이 나오는지 확인", () => {
  expect(calculateTotal(1000, 2)).toBe(2000);
});

test("할인 적용 - 1000원 상품 2개를 10% 할인하면 1800원이 나오는지 확인", () => {
  expect(calculateTotal(1000, 2, 0.1)).toBe(1800);
});

// 기억해야 하는 것
// 1. test() 함수
// 2. test() 함수 안에 expect() 함수
// 3. expect() 함수 안에 테스트 할 함수
// 테스트 코드는 함부로 바꾸지 않는다.
