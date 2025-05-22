// 지역변수로는 함수 내부 상태를 유지할 수 없다.

// let count = 0; // 혹은 전역변수로 접근 상태 유지 가능

function counter() {
  let count = 0;
  count++;
  console.log(`현재 카운트: ${count}`);
}

counter(); // 1
counter(); // 1
