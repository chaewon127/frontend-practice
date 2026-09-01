// 실습 6 - 학생 성적 등급
const { getGrade } = require("./grade");

test("90점 이상이면 A등급을 반환해야 함", () => {
  expect(getGrade(95)).toMatch(/A등급/);
});

test("70점대이면 '보통'이 포함된 문자열을 반환해야 함", () => {
  expect(getGrade(75)).toContain("보통");
});

test("null 입력 시 null을 반환해야 함", () => {
  expect(getGrade(null)).toBeNull();
});
