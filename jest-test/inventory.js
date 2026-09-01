// 실습 5 - 과일 재고 관리
function addFruit(fruits, fruit) {
  return [...fruits, fruit];
}

function removeFruit(fruits, fruit) {
  return fruits.filter((f) => f !== fruit);
}

module.exports = { addFruit, removeFruit };
