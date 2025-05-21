// 문제: 배열 내 최소값, 최대값을 찾아보세요.

const numbers = [15, 3, 20, 8, 42];

let max = Number.MIN_VALUE;
let min = Number.MAX_VALUE;

for (const num of numbers) {
  if (num > max) {
    max = num;
  }
  if (min > num) {
    min = num;
  }
}

console.log(`최소값`, min);
console.log(`최대값`, max);
