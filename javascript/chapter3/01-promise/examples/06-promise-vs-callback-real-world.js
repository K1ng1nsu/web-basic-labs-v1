// [실전 fetch 예시: Promise vs 콜백 스타일 비교]

// 1. 콜백 스타일로 fetch 흉내내기 (실제 fetch는 Promise 기반)
function fetchDataWithCallback(url, callback) {
  setTimeout(() => {
    if (url) callback(null, { data: "서버 데이터" });
    else callback("URL 없음", null);
  }, 800);
}
fetchDataWithCallback("/api/data", (err, result) => {
  if (err) {
    console.error("콜백-에러:", err);
  } else {
    console.log("콜백-데이터:", result);
  }
});

// 2. Promise 스타일(fetch 기본)
function fetchDataWithPromise(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url) resolve({ data: "서버 데이터" });
      else reject("URL 없음");
    }, 800);
  });
}
fetchDataWithPromise("/api/data")
  .then((result) => {
    console.log("Promise-데이터:", result);
  })
  .catch((err) => {
    console.error("Promise-에러:", err);
  });
