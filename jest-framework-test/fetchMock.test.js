// 실습 1-4 모킹 기초 연습 - fetch 모킹 & mockResolvedValue 사용법
// const { fetchUserData } = require("./fetchMock");

// // 테스트 코드 작성
// test("fetchUserData 함수 테스트", async () => {
//   // 여기에 코드 작성
//   // 1. global.fetch를 모킹하세요
//   // 2. 모킹된 함수가 특정 응답을 반환하도록 설정하세요
//   global.fetch = jest.fn().mockResolvedValue({
//     ok: true,
//     json: jest.fn().mockResolvedValue({ id: 1, name: "철수" }),
//   });

//   // 3. fetchUserData 함수를 호출하고 결과를 검증하세요
//   const userData = await fetchUserData(1);
//   expect(userData).toEqual({ id: 1, name: "철수" });
// });

//-----------------------------------------------------

// 실습 3-1 비동기 테스트 연습 - async/await 방식 검증
// const { fetchUserData } = require("./fetchMock");

// test("사용자가 데이터를 성공적으로 가져오는 경우 모킹", async () => {
//   const mockUserData = { id: 1, name: "철수", email: "abc@naver.com" };
//   // 1. fetch API 모킹하기
//   global.fetch = jest.fn().mockResolvedValue({
//     ok: true,
//     json: jest.fn().mockResolvedValue(mockUserData),
//   });

//   // 2. fetchUserData 호출
//   const userData = await fetchUserData(1);

//   // 3. 결과 검증하기
//   expect(userData).toEqual(mockUserData);
// });

// test("네트워크 오류 발생 시 에러 처리", async () => {
//   // 1. fetch가 거부된 Promise를 반환하도록 모킹
//   global.fetch = jest.fn().mockRejectedValue(new Error("Network Error"));
//   // 2. 최소 1개의 assertion이 필요
//   expect.assertions(1);
//   // 3. fetchUserData 호출 및 에러 검증
//   try {
//     await fetchUserData(1);
//   } catch (error) {
//     // 4. 에러 메시지 검증
//     expect(error.message).toBe("Network Error");
//   }
// });

//-----------------------------------------------------

// 실습 3-2 비동기 테스트 연습 - Promise 방식 검증
const { fetchUserData } = require("./fetchMock");

test("사용자가 데이터를 성공적으로 가져오는 경우 모킹", async () => {
  const mockUserData = { id: 1, name: "철수", email: "abc@naver.com" };
  // 1. fetch API 모킹하기
  global.fetch = jest.fn().mockResolvedValue({
    ok: true,
    json: jest.fn().mockResolvedValue(mockUserData),
  });

  // 2. fetchUserData 호출
  const userData = await fetchUserData(1);

  // 3. 결과 검증하기
  expect(userData).toEqual(mockUserData);
});

test("네트워크 오류 발생 시 에러 처리", async () => {
  // 1. fetch가 거부된 Promise를 반환하도록 모킹
  global.fetch = jest.fn().mockRejectedValue(new Error("Network Error"));
  // 2. 최소 1개의 assertion이 필요
  expect.assertions(1);
  // 3. fetchUserData 호출 및 에러 검증
  try {
    await fetchUserData(1);
  } catch (error) {
    // 4. 에러 메시지 검증
    expect(error.message).toBe("Network Error");
  }
});
