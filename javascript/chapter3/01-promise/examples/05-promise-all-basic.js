// [예제] Promise.all()로 병렬 비동기 처리

function fetchMock(id, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`결과${id}`);
    }, delay);
  });
}

async function runAll() {
  const promises = [fetchMock(1, 1000), fetchMock(2, 500), fetchMock(3, 1500)];

  console.log("요청 시작...");
  const results = await Promise.all(promises);
  console.log("모든 작업 완료:", results); // ["결과1", "결과2", "결과3"]
}
runAll();
