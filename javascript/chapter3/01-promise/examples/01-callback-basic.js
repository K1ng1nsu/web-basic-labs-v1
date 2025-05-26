// [콜백 함수로 비동기 처리]
function getUserData(id, callback) {
  setTimeout(() => {
    if (id === 1) {
      callback(null, { id: 1, name: "윤유저" });
    } else {
      callback("유저를 찾을 수 없습니다.", null);
    }
  }, 1000);
}

// 사용
getUserData(1, (err, user) => {
  if (err) {
    console.error("에러:", err);
  } else {
    console.log("콜백으로 받은 유저:", user);
  }
});
