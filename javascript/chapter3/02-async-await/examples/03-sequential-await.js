// [여러 비동기 작업 순차 처리] await 연속 사용
function fetchMock(id, ms) {
  return new Promise((resolve) => setTimeout(() => resolve(`데이터${id}`), ms));
}

async function getAllData() {
  const data1 = await fetchMock(1, 500);
  console.log("1번:", data1);

  const data2 = await fetchMock(2, 500);
  console.log("2번:", data2);
}
getAllData();
