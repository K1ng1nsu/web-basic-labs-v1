// 호이스팅 동작을 예측하고, 결과를 직접 확인해보세요.

// 문제 1: 이 코드의 실행 결과는 무엇일까요?
console.log('1. foo:', foo); //undefined
var foo = 'hello';

// 문제 2: 아래 코드는 왜 오류가 날까요?
// 실행해 보고, 주석으로 이유를 써보세요.
// console.log("2. bar:", bar); // 초기화되기 전엔 접근이 불가능해서
let bar = 'world';

// 문제 3: const도 호이스팅될까요? // 네
// 아래 코드를 수정해서 오류 없이 출력되게 해보세요.
const pi = 3.14;
console.log('3. pi:', pi);

// 문제 4: 다음 코드의 실행 결과를 순서대로 예측해보세요.
function test() {
  console.log('4. x:', x); // ? undefined
  var x = 10;
  console.log('5. x:', x); // ? 10
}
test();
