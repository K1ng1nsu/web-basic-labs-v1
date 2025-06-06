/*
[문제] 존재하지 않는 URL로 요청을 보내 에러를 유도하고,
각 방식(fetch, axios)으로 에러를 try/catch로 처리하세요.

요청: GET https://jsonplaceholder.typicode.com/404-not-found

- 에러 메시지와 HTTP 상태 코드를 콘솔에 출력
*/

import axios from 'axios';

const main1 = async () => {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/404-not-found'
    );
    if (!response.ok) {
      throw new Error('Something went to wrong');
    }
    const data = await response.json();
  } catch (error) {
    console.log(error);
  }
};

const main2 = async () => {
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/404-not-found'
    );
    const data = response.data;
  } catch (error) {
    console.log(error);
  }
};

// main1()
main2();
