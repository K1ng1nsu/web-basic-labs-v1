// [에러 처리] await에서 예외 발생시 try/catch로 처리
function failAfter(ms) {
  return new Promise((_, reject) => setTimeout(() => reject("작업 실패!"), ms));
}

async function testError() {
  try {
    await failAfter(500);
    console.log("이 메시지는 출력되지 않음");
  } catch (e) {
    console.error("에러 잡힘:", e);
  }
}
testError();
