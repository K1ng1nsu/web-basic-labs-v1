// 문제 : 짝수 인지 홀수인지 여부를 판단하는 함수를 작성하세요.
// TODO: checkEvenOdd(num) → 짝수면 Even, 홀수면 Odd 반환

const checkEvenOdd = (num) => (num % 2 == 0 ? 'Even' : 'Odd');

const printmsg = (num) => {
  console.log(`${num} 은 ${checkEvenOdd(num)} 입니다`);
};

for (let i = 1; i < 10; i++) {
  printmsg(i);
}
