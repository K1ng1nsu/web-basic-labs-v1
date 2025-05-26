// [POST 요청] axios로 JSON 데이터 전송
import axios from "axios";

async function createPost() {
  const newPost = {
    title: "Axios Post",
    body: "내용입니다",
    userId: 2,
  };

  const response = await axios.post(
    "https://jsonplaceholder.typicode.com/posts",
    newPost
  );
  console.log("생성된 포스트:", response.data);
}
createPost();
