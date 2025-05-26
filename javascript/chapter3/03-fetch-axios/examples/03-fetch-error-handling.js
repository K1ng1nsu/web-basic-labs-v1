// [에러 처리] HTTP 상태코드 확인
async function getInvalidPost() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/9999"
    );
    if (!response.ok) throw new Error(`HTTP 오류: ${response.status}`);
    const data = await response.json();
    console.log("정상 응답:", data);
  } catch (err) {
    console.error("에러 발생:", err);
  }
}
getInvalidPost();
