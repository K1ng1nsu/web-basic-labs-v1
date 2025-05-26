/*
[문제] 여러 Promise 작업을 순차적으로 연결(체이닝)

아래 Promise 함수들로 1 → 2 → 3 순서로 실행해서,
최종 결과를 출력하세요.

function step1() {
  return new Promise(resolve => setTimeout(() => resolve("1단계 완료"), 300));
}
function step2() {
  return new Promise(resolve => setTimeout(() => resolve("2단계 완료"), 400));
}
function step3() {
  return new Promise(resolve => setTimeout(() => resolve("3단계 완료"), 500));
}

/*
[출력 예시]
1단계 완료
2단계 완료
3단계 완료
*/
