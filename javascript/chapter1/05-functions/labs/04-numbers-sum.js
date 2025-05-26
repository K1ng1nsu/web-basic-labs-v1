// 문제 : 숫자 n을 입력받아 1부터 n까지의 합을 반환하는 함수를 작성하세요.
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
  const userInput = await askQuestion('숫자를 입력하세요. : ');
  console.log(
    `1 부터 ${userInput} 까지의 합은 ${
      (+userInput * (+userInput + 1)) / 2
    } 입니다.`
  );
};
// main();

const recursiveSum = (n) => {
  if (n == 1) return 1;

  return n + recursiveSum(n - 1);
};

const main2 = async () => {
  const userInput = await askQuestion('숫자를 입력하세요. : ');

  console.log(
    `1부터 ${userInput} 까지의 합은 ${recursiveSum(+userInput)} 입니다`
  );
};

main2();
