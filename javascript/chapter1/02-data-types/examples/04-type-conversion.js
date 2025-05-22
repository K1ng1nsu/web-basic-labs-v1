// 명시적(강제)/암시적(자동) 타입 변환
console.log("=== 타입 변환 ===");

// 숫자로 변환
console.log(Number("123")); // 123
console.log(Number("abc")); // NaN

// 문자열로 변환
console.log(String(456)); // "456"

// 불리언으로 변환 (*)
console.log(Boolean(0)); // false
console.log(Boolean("hello")); // true
console.log(Boolean("")); // false

if ("0") {
  console.log("설마 여기까지 오나?");
}
