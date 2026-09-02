// 실습 2-1 jest matcher 연습 - toHaveProperty 사용법
const { createProduct } = require("./product");

test("createProduct 함수 테스트", () => {
  const product = createProduct({
    id: "prod-123",
    name: "스마트폰",
    price: 1000000,
    category: {
      id: "cat-1",
      name: "전자기기",
    },
    tags: ["가전", "모바일", "신상품"],
  });

  // 기본 속성 검증
  // 1. toHaveProperty를 사용하여 id가 "prod-123"인지 검증하세요
  // 2. toHaveProperty를 사용하여 name이 "스마트폰"인지 검증하세요
  // 3. toHaveProperty를 사용하여 price가 1000000인지 검증하세요

  // 중첩 속성 검증
  // 4. toHaveProperty를 사용하여 category.id가 "cat-1"인지 검증하세요
  // 5. toHaveProperty를 사용하여 category.name이 "전자기기"인지 검증하세요
});
