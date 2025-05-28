/*
[문제] Promise.all()을 사용하여 사용자 정보 3개를 동시에 불러오세요.

API:
https://jsonplaceholder.typicode.com/users/1
https://jsonplaceholder.typicode.com/users/2
https://jsonplaceholder.typicode.com/users/3

요구사항:
- fetch 또는 axios 중 하나 선택 (async/await 사용)
- Promise.all()로 동시에 요청 보낼 것
- 3명의 이름(name)만 배열로 출력할 것 (예: ["Leanne", "Ervin", "Clementine"])
- 에러가 발생하면 "요청 실패" 메시지를 출력하세요.
*/

async function fetchData(url) {
  return (await fetch(url)).json();
}

async function test() {
  const promises = [
    fetchData('https://jsonplaceholder.typicode.com/users/1'),
    fetchData('https://jsonplaceholder.typicode.com/users/2'),
    fetchData('https://jsonplaceholder.typicode.com/users/3'),
  ];

  let result;
  try {
    result = await Promise.all(promises);
  } catch (error) {
    console.error('요청 실패');
  }
  result.forEach((user) => console.log(user.name));
}
// test();

async function test2() {
  const promises = [
    fetch('https://jsonplaceholder.typicode.com/users/1'),
    fetch('https://jsonplaceholder.typicode.com/users/2'),
    fetch('https://jsonplaceholder.typicode.com/users/3'),
  ];

  const responses = await Promise.all(promises);

  console.log(responses);

  let datas = [];

  for (const response of responses) {
    datas.push(await response.json());
  }

  console.log(datas);

  let names = datas.map((user) => user.name);
  console.log(names);
  return names;
}
// test2().then((names) => console.log(names));

function test3() {
  const promises = [
    fetch('https://jsonplaceholder.typicode.com/users/1'),
    fetch('https://jsonplaceholder.typicode.com/users/2'),
    fetch('https://jsonplaceholder.typicode.com/users/3'),
  ];

  return Promise.all(promises);
}

test3()
  .then((responses) => {
    return Promise.all(responses.map((response) => response.json()));
  })
  .then((datas) => console.log(datas.map((data) => data.name)));
