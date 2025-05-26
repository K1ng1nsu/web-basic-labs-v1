/*
[문제] Promise에서 에러 처리

아래 Promise 함수에서,
- userId가 0 이하이면 에러가 발생하도록 만들고
- then/catch로 결과를 출력하세요.

function findUserById(userId) {
  // TODO: userId > 0이면 {id: userId, name: "사용자"} resolve
  //       userId <= 0이면 reject("유효하지 않은 ID")
}

findUserById(10).then(user => {
  console.log("성공:", user);
}).catch(err => {
  console.error("실패:", err);
});
*/
