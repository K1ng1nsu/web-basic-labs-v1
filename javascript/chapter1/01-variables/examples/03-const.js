// const: 재할당 불가, 블록 스코프
console.log("=== const 예제 ===");

const PI = 3.14;
console.log("PI:", PI);

// PI = 3.1415; // Error: 재할당 불가

// 원시 타입 vs 참조 타입

const user = { name: "수지", age: 30 };
user.age = 33; // 객체 속성은 수정 가능
console.log("수정된 유저:", user);

// user = null;
// console.log(user);

const nums = [1, 2, 3];
nums.push(4); // 배열 요소 수정 가능
console.log("수정된 배열:", nums);

nums = null;
