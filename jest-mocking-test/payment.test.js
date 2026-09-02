const { processPayment } = require("./payment");
const logger = require("./logger");

describe("payment.js 테스트", () => {
  test("결제 금액 0 이하일 때 결제 실패 시 로그 확인", () => {
    processPayment(0);
    expect(logger.error).toHaveBeenCalledWith(
      "결제 처리 중 오류 발생: 결제 금액은 0보다 커야 합니다.",
    );
  });
});
