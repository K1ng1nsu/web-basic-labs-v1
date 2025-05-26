// [Promise로 비동기 처리]
function getUserDataPromise(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id === 1) {
        resolve({ id: 1, name: "윤유저" });
      } else {
        reject("유저를 찾을 수 없습니다.");
      }
    }, 1000);
  });
}

// 사용
getUserDataPromise(1)
  .then((user) => {
    console.log("Promise로 받은 유저:", user);
  })
  .catch((err) => {
    console.error("에러:", err);
  });
