// [반복문에서 await] 각 작업을 순서대로 처리
function fetchMock(id, ms) {
  return new Promise((resolve) => setTimeout(() => resolve(`아이템${id}`), ms));
}

async function processItems() {
  for (let i = 1; i <= 3; i++) {
    const result = await fetchMock(i, 1000);
    console.log(result);
  }
}
processItems();
