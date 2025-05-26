// 문제 : 세 개의 숫자를 입력받아 평균을 반환하는 함수를 작성하세요.
const readline = require('readline');

function askQuestion(query) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(query, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

const main = async () => {
  sum = 0;
  sum += Number(await askQuestion('숫자를 입력하세요. : '));
  sum += Number(await askQuestion('숫자를 입력하세요. : '));
  sum += Number(await askQuestion('숫자를 입력하세요. : '));

  console.log(`평균 : ${sum / 3}`);
};
main();
