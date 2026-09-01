// 실습 1 - 테스트 맛보기_가격 계산
// const { calculateTotal } = require("./calculator");

// test("기본 계산 - 1000원 상품 2개의 가격은 2000원이 나오는지 확인", () => {
//   expect(calculateTotal(1000, 2)).toBe(2000);
// });

// test("할인 적용 - 1000원 상품 2개를 10% 할인하면 1800원이 나오는지 확인", () => {
//   expect(calculateTotal(1000, 2, 0.1)).toBe(1800);
// });

// test("기본 계산 - 3000원 상품 4개의 가격은 12000원이 나오는지 확인", () => {
//   expect(calculateTotal(3000, 4)).toBe(12000);
// });

// test("할인율 적용 - 5000원 상품 3개를 50% 할인하면 7500원이 나오는지 확인", () => {
//   expect(calculateTotal(5000, 3, 0.5)).toBe(7500);
// });

// test("할인율이 0인 경우 - 4000원 상품 2개를 0% 할인하면 8000원이 나오는지 확인", () => {
//   expect(calculateTotal(4000, 2, 0)).toBe(8000);
// });

// 기억해야 하는 것
// 1. test() 함수
// 2. test() 함수 안에 expect() 함수
// 3. expect() 함수 안에 Matcher(toBe, toEqual, toStrictEqual 등)
// 테스트 코드는 함부로 바꾸지 않는다.
