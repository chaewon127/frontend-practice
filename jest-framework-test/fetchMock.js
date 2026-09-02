// 실습 1-4 모킹 기초 연습 - fetch 모킹 & mockResolvedValue 사용법
async function fetchUserData(userId) {
  const response = await fetch(`https://api.example.com/users/${userId}`);
  const data = await response.json();
  return data;
}

module.exports = {
  fetchUserData,
};
