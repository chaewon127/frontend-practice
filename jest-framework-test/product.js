// 실습 2-1 jest matcher 연습 - toHaveProperty 사용법
function createProduct(data) {
  return {
    id: data.id || "기본 id",
    name: data.name || "기본 상품명",
    price: data.price || 0,
    category: data.category,
    tags: data.tags,
  };
}

module.exports = { createProduct };
