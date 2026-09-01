// 실습 5 - 과일 재고 관리
const { addFruit, removeFruit } = require("./inventory");

const fruits = ["사과", "바나나", "오렌지"];

test("과일을 추가하면 배열에 포함되어야 함", () => {
  const result = addFruit(fruits, "포도");
  expect(result).toContain("포도");
});

test("과일을 제거하면 배열에서 사라져야 함", () => {
  const result = removeFruit(fruits, "바나나");
  expect(result).not.toContain("바나나");
});

test("과일을 추가하면 배열 길이가 1 증가해야 함", () => {
  const result = addFruit(fruits, "포도");
  expect(result).toHaveLength(4);
});

test("바나나를 제거하면 나머지 과일만 남아야 함", () => {
  const result = removeFruit(fruits, "바나나");
  expect(result).toEqual(["사과", "오렌지"]);
});
