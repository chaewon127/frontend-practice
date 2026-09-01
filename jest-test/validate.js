// 실습 2 - 테스트 맛보기_유효성 검사
// // 공통으로 사용되는 유효성 검사 함수
// function validatePassword(password) {
//   return password.length >= 8;
// }

// module.exports = { validatePassword };

// 실습 3 - 이메일 유효성 검사
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

module.exports = { validateEmail };
