/*
[문제] then/catch 기반 코드를 async/await로 리팩토링하세요.

function fetchData() {
  return fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(res => res.json())
    .then(data => {
      console.log("데이터:", data);
    })
    .catch(err => {
      console.error("에러:", err);
    });
}
fetchData();
*/

async function fetchData() {
  try {
    const respones = await fetch(
      'https://jsonplaceholder.typicode.com/posts/1'
    );
    const data = await respones.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    return 'error';
  }
}

fetchData();

// 다음문제로 0527 16:45
