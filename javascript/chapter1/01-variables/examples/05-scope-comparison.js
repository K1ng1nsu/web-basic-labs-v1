// var vs let vs const 스코프 차이 비교
console.log("=== 스코프 비교 예제 ===");

// var a = 1;
// let b = 2;
// console.log(a, b);

function scopeTest() {
  if (true) {
    var a = 1; // 함수 스코프
    let b = 2; // 블록 스코프
    const c = 3; // 블록 스코프
  }

  console.log("var a:", a); // 접근 가능 (함수 스코프)
  // console.log("let b:", b); // 접근 불가 ReferenceError (블록 스코프)
  // console.log("const c:", c); // 접근 불가 ReferenceError (블록 스코프)
}

scopeTest();
