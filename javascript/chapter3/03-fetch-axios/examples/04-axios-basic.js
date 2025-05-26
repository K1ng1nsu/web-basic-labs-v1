// axios로 GET 요청
import axios from "axios";

async function getPost() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    console.log("받은 데이터:", response.data);
  } catch (err) {
    console.error("에러:", err);
  }
}
getPost();
