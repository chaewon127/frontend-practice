// 실습 1-1 모킹 기초 연습 - jest.fn() 사용법
const { calculator } = require("./math");

test("calculator.add 함수 모킹 테스트", () => {
  // 여기에 코드 작성
  // 1. calculator.add를 jest.fn()으로 모킹하세요
  calculator.add = jest.fn();
  // 2. 모킹된 함수를 호출해보고, 호출되었는지 검증하세요
  calculator.add(1, 2);
  expect(calculator.add).toHaveBeenCalled();
  // 3. 호출 인자를 검증하세요
  expect(calculator.add).toHaveBeenCalledWith(1, 2);
});
