// [POST 요청] fetch로 JSON 데이터 전송
async function createPost() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: "New Post",
      body: "Hello fetch!",
      userId: 1,
    }),
  });

  const data = await response.json();
  console.log("생성된 데이터:", data);
}
createPost();
