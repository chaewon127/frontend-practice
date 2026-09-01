// 실습 2 - 테스트 맛보기_유효성 검사
// const { validatePassword } = require("./validate");

// test("비밀번호가 8자 이상인 경우 true가 반환되는지 확인", () => {
//   expect(validatePassword("password123")).toBe(true);
// });

// test("비밀번호가 8자 미만인 경우 false가 반환되는지 확인", () => {
//   expect(validatePassword("pass")).toBe(false);
// });

// 실습 3 - 이메일 유효성 검사
const { validateEmail } = require("./validate");

test("유효한 이메일 입력 시 true를 반환하는지 확인", () => {
  expect(validateEmail("test@example.com")).toBeTruthy();
});

test("유효하지 않은 이메일 입력 시 false를 반환하는지 확인", () => {
  expect(validateEmail("testexample.com")).toBeFalsy();
});

// not을 사용하여 true가 아님을 확인
test("도메인 없이 이메일을 허용하지 않아야 함", () => {
  expect(validateEmail("test@")).not.toBeTruthy();
});
