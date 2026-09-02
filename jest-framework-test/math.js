// 실습 1-1 모킹 기초 연습 - jest.fn() 사용법
// 실습 1-2 모킹 기초 연습 - mockReturnValue 사용법
// 실습 1-3 모킹 기초 연습 - spyOn 사용법
const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
};

module.exports = {
  calculator,
};
