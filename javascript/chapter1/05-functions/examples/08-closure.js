// 클로저 : 외부 변수를 기억하는 함수
// 함수 내부의 상태를 기억하고 캡슐화를 완전한 은닉이 가능

function createCounter() {
  let count = 0; // 외부에서는 접근 불가한 private 변수

  return function () {
    count++;
    console.log(`현재 카운트: ${count}`);
  };
}

const counter = createCounter();

counter(); // 현재 카운트: 1
counter(); // 현재 카운트: 2

// -> 객체로 하면 안되나??
// 기본적으로 자바스크립트는 접근제어자가 불가했음. (2022 이후부터 # (private 상태) 가능)
