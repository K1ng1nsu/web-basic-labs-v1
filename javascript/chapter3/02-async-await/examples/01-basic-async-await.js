// async 함수에서 await 사용하기
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  console.log("1초 대기 시작");
  await delay(1000);
  console.log("1초 후 출력");
}
main();
