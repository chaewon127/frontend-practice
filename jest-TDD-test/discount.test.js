const { calculatePrice } = require("./discount");

describe("calculatePrice", () => {
  test("5만원 미만은 상품 가격 할인이 적용되지 않는다", () => {
    expect(calculatePrice(40000, "normal")).toBe(40000);
  });

  test("5만원 이상이면 5% 상품 할인이 적용된다", () => {
    expect(calculatePrice(50000, "normal")).toBe(47500);
  });

  test("10만원 이상이면 10% 상품 할인이 적용된다", () => {
    expect(calculatePrice(100000, "normal")).toBe(90000);
  });

  test("20만원 이상이면 20% 상품 할인이 적용된다", () => {
    expect(calculatePrice(200000, "normal")).toBe(160000);
  });

  test("실버 회원은 추가 2% 할인이 적용된다", () => {
    // 100,000 → 상품 할인 10% → 90,000
    // 실버 할인 2% → 88,200
    expect(calculatePrice(100000, "silver")).toBe(88200);
  });

  test("골드 회원은 추가 5% 할인이 적용된다", () => {
    // 100,000 → 90,000 → 85,500
    expect(calculatePrice(100000, "gold")).toBe(85500);
  });

  test("VIP 회원은 추가 10% 할인이 적용된다", () => {
    // 100,000 → 90,000 → 81,000
    expect(calculatePrice(100000, "vip")).toBe(81000);
  });

  test("정액 쿠폰을 적용할 수 있다", () => {
    // 100,000 → 90,000 → 90,000 - 5,000
    expect(
      calculatePrice(100000, "normal", {
        type: "fixed",
        value: 5000,
      }),
    ).toBe(85000);
  });

  test("비율 쿠폰을 적용할 수 있다", () => {
    // 100,000 → 90,000 → 20% 할인 → 72,000
    expect(
      calculatePrice(100000, "normal", {
        type: "percent",
        value: 20,
      }),
    ).toBe(72000);
  });

  test("할인 적용 순서는 상품 할인 → 회원 등급 할인 → 쿠폰 할인이다", () => {
    // 100,000
    // 상품 할인 10% → 90,000
    // 골드 할인 5% → 85,500
    // 쿠폰 20% → 68,400
    expect(
      calculatePrice(100000, "gold", {
        type: "percent",
        value: 20,
      }),
    ).toBe(68400);
  });

  test("할인 금액이 커도 원래 가격의 50% 미만으로 내려가지 않는다", () => {
    // 100,000의 최소 가격 = 50,000
    expect(
      calculatePrice(100000, "vip", {
        type: "fixed",
        value: 50000,
      }),
    ).toBe(50000);
  });

  test("쿠폰으로 50%보다 더 큰 할인이 발생해도 최소 가격은 원래 가격의 50%이다", () => {
    expect(
      calculatePrice(200000, "vip", {
        type: "percent",
        value: 100,
      }),
    ).toBe(100000);
  });
});
