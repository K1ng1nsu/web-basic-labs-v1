// join(): 배열을 문자열로 결합
const words = ["Hello", "world", "!"];
console.log(words.join(" ")); // "Hello world !"

// includes(): 특정 값 포함 여부 확인
const fruits = ["apple", "banana", "cherry"];
console.log(fruits.includes("banana")); // true
console.log(fruits.includes("grape")); // false

// indexOf(): 첫 인덱스 반환
const nums = [1, 2, 3, 2, 1];
console.log(nums.indexOf(2)); // 1

// lastIndexOf(): 마지막 인덱스 반환
console.log(nums.lastIndexOf(2)); // 3

// slice(): 배열 일부 추출 (원본 유지)
const items = ["a", "b", "c", "d"];
console.log(items.slice(1, 3)); // ["b", "c"]

// splice(): 배열 변경 (삽입/삭제 - 원본 변경)
let colors = ["red", "green", "blue"];
colors.splice(1, 1, "yellow", "purple"); // green 제거, yellow/purple 삽입
console.log(colors); // ["red", "yellow", "purple", "blue"]

// concat(): 배열 병합 (원본 유지)
const a = [1, 2];
const b = [3, 4];
const merged = a.concat(b);
console.log(merged); // [1, 2, 3, 4]

// reverse(): 배열 반전 (원본 변경됨)
let arr = [1, 2, 3];
arr.reverse();
console.log(arr); // [3, 2, 1]

// toSorted(): 정렬된 새 배열 반환 (원본 유지)
const original = [3, 1, 2];
const sorted = original.toSorted((a, b) => a - b);
console.log(sorted); // [1, 2, 3]
console.log(original); // [3, 1, 2]

// toReversed(): 뒤집힌 새 배열 반환 (원본 유지)
const reversed = original.toReversed();
console.log(reversed); // [2, 1, 3]
