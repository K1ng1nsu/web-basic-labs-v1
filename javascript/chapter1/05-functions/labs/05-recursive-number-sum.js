// 문제 : 재귀 함수로 1부터 n까지의 합을 구하세요
// 예: sumTo(5) → 15
function sumTo(n) {
  // TODO
  if (n == 1) return 1;
  return n + sumTo(n - 1);
}

n = 100;

console.log(`1 부터 ${n} 까지의 합은 ${sumTo(n)} 입니다`);
