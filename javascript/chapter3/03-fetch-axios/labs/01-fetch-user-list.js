/*
[문제] fetch를 사용해 아래 API에서 사용자 목록을 가져오세요.

GET: https://jsonplaceholder.typicode.com/users

- JSON 형식으로 응답을 받아 콘솔에 이름(name)만 출력
- async/await 사용 필수
*/

const main = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const datas = await response.json();
  datas.forEach((data) => {
    console.log(data.name);
  });
};

main();
