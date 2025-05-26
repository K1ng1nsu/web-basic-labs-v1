// [여러 비동기 작업 병렬 처리] Promise.all과 await
function fetchMock(id, ms) {
  return new Promise((resolve) => setTimeout(() => resolve(`데이터${id}`), ms));
}

async function getDataInParallel() {
  const [a, b] = await Promise.all([fetchMock(1, 500), fetchMock(2, 1000)]);
  console.log("병렬 처리 결과:", a, b);
}
getDataInParallel();
