// var: 함수 스코프, 재선언 가능
console.log("=== var 예제 ===");

var name = "지수";
console.log("이름:", name);

var name = "지훈"; // 재선언 가능
console.log("바뀐 이름:", name);

function varTest() {
  if (true) {
    var x = 10;
  }
  console.log("x 값:", x); // 함수 스코프
}
varTest();
