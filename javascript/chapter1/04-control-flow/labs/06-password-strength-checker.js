/* 사용자가 입력한 비밀번호가 다음 조건을 만족하는지 확인하고 모든 조건 만족 시 "강한 비밀번호", 아니면 부족한 항목을 명시하세요.
조건:
- 길이 8자 이상
- 대문자 1개 이상
- 숫자 1개 이상
- 특수문자 1개 이상 (!@#$%^&*)
*/

let isOverLength = false;
let hasCapital = false;
let hasNum = false;
let hasSpecialCharacter = false;

const arrSpecialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*'];

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
  const userInput = await askQuestion('비밀번호를 입력하세요');

  if (userInput.length >= 8) isOverLength = true;

  for (let i = 0; i < userInput.length; i++) {
    let char = userInput[i];

    if ('A' <= char && char <= 'Z') hasCapital = true;
    if ('0' <= char && char <= '9') hasNum = true;
    if (arrSpecialCharacters.includes(char)) hasSpecialCharacter = true;
  }

  console.log('isOverLength', isOverLength);
  console.log('hasCapital', hasCapital);
  console.log('hasNum', hasNum);
  console.log('hasSpecialCharacter', hasSpecialCharacter);
};
main();
