// 문제: 사용자가 정답 숫자를 맞힐 때까지 계속 입력받는 게임을 만들어보세요. (while 사용)
// Math.random()으로 1~10 중 하나를 고르고 맞힐 때까지 반복
// prompt()

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
  const randomNum = Math.floor(Math.random() * 10) + 1;
  while (true) {
    let inputnum = await askQuestion('1~10 까지의 숫자를 입력해주세요. ');

    if (inputnum == randomNum) {
      console.log('정답입니다.');
      break;
    } else {
      console.log('틀렸습니다.');
    }
  }
};
main();
