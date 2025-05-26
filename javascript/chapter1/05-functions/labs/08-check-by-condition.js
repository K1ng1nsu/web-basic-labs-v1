// 문제: 숫자 조건 검사기 만들기
// 숫자 하나와 조건을 전달받아, 조건을 만족하는지를 판단하는 함수를 작성하세요.
// checkByCondition(num, callback) 형태로 작성하며,
// callback 함수는 해당 숫자가 조건을 만족하면 true, 아니면 false를 반환합니다.

function checkByCondition(num, callback) {
  // TODO: callback을 이용해 조건 검사
  return callback(num);
}

// 1) 짝수인지 검사
// 2) 10보다 큰지 검사
// 3) 3의 배수인지 검사

let someNum = 30;

console.log(
  `${someNum} 은 ${
    checkByCondition(someNum, (num) => num % 2 == 0) ? '짝수' : '홀수'
  } 입니다`
);
console.log(
  `${someNum} 은 10보다 ${
    checkByCondition(someNum, (num) => num > 10) ? '큽니다' : '작습니다'
  }`
);

console.log(
  `${someNum}은 3의 배수가 ${
    checkByCondition(someNum, (num) => num % 3 == 0) ? '맞습니다.' : '아닙니다.'
  }`
);
