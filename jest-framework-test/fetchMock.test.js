// 실습 1-4 모킹 기초 연습 - fetch 모킹 & mockResolvedValue 사용법
const { fetchUserData } = require("./fetchMock");

// 테스트 코드 작성
test("fetchUserData 함수 테스트", async () => {
  // 여기에 코드 작성
  // 1. global.fetch를 모킹하세요
  // 2. 모킹된 함수가 특정 응답을 반환하도록 설정하세요
  global.fetch = jest.fn().mockResolvedValue({
    ok: true,
    json: jest.fn().mockResolvedValue({ id: 1, name: "철수" }),
  });

  // 3. fetchUserData 함수를 호출하고 결과를 검증하세요
  const userData = await fetchUserData(1);
  expect(userData).toEqual({ id: 1, name: "철수" });
});
