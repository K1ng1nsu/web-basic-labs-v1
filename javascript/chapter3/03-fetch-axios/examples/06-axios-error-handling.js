// [에러 처리] axios는 HTTP 에러도 catch로 감지
import axios from "axios";

async function getInvalidPost() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/invalid-url"
    );
    console.log(response.data);
  } catch (err) {
    console.error("요청 실패:", err.message);
    console.error("상태 코드:", err.response?.status);
  }
}
getInvalidPost();
