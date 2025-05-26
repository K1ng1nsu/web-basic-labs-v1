// async/await로 fetch 데이터 받아오기
async function fetchTodo() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    console.log("Todo 데이터:", data);
  } catch (err) {
    console.error("에러:", err);
  }
}
fetchTodo();
