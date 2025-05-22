// 호이스팅: var vs let/const
console.log("=== 호이스팅 예제 ===");

console.log("hoistedVar:", hoistedVar); // undefined
var hoistedVar = "var 변수";

// console.log("hoistedLet:", hoistedLet); // Error
let hoistedLet = "let 변수";

console.log("hoistedLet:", hoistedLet);
