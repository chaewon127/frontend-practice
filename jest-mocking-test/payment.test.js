const { processPayment } = require("./payment");
const logger = require("./logger");

jest.mock("./logger"); //logger 모듈 모킹

describe("payment.js 테스트", () => {
  test("결제 금액 0 이하일 때 결제 실패 시 로그 확인", () => {
    // logger.error = jest.fn(); // logger.error를 모킹 & 이 코드가 없어도 테스트는 성공하지만, logger.info, logger.warn 를 processPayment 함수에 추가 시 로그 파일이 생성될 수 있으므로 안전하게 모듈을 모킹하는 것이 좋다.
    processPayment(0);
    expect(logger.error).toHaveBeenCalledWith(
      "결제 처리 중 오류 발생: 결제 금액은 0보다 커야 합니다.",
    );
  });

  test("지원하지 않는 결제 방식일 때 로그 확인", () => {
    // logger.error = jest.fn();
    processPayment(10000, "USD", "잘못된 결제 방식");
    expect(logger.error).toHaveBeenCalledWith(
      "결제 처리 중 오류 발생: 지원하지 않는 결제 방식입니다. 지원 방식: card, bank, mobile",
    );
  });
});
