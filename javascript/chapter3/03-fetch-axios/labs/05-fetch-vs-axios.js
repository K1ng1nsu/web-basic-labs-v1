/*
[문제] 동일한 요청을 fetch와 axios로 각각 구현하세요.

요청: GET https://jsonplaceholder.typicode.com/todos/1

- 두 방식 모두 async/await 사용
- 각각 결과 콘솔 출력
- 차이점 주석으로 정리
*/

import axios from 'axios';

const main1 = async () => {
  const respones = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await respones.json();
  console.log(data);
};

const main2 = async (params) => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/todos/1'
  );
  const data = response.data;
  console.log(data);
};

// main1();
main2();
