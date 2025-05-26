// fetch로 GET 요청 보내기
async function getPost() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await response.json();
  console.log("받은 데이터:", data);
}
getPost();
