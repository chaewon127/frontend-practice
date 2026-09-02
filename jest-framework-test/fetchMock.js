// 실습 1-4 모킹 기초 연습 - fetch 모킹 & mockResolvedValue 사용법
// async function fetchUserData(userId) {
//   const response = await fetch(`https://api.example.com/users/${userId}`);
//   const data = await response.json();
//   return data;
// }

// module.exports = {
//   fetchUserData,
// };

//-----------------------------------------------------

// 실습 3-1 비동기 테스트 연습 - async/await 방식 검증
async function fetchUserData(userId) {
  try {
    const response = await fetch(`https://api.example.com/users/${userId}`);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "HTTP 에러");
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
}

module.exports = { fetchUserData };
