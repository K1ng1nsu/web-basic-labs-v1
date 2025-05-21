// TODO: prompt로 입력받은 숫자의 각 자릿수 합을 구하도록 while 루프를 사용하여 작성하세요.

const userInput = prompt('숫자를 입력해주세요.');

let sum = 0;

for (let i = 0; i < userInput.length; i++) {
  sum += Number(userInput[i]);
}

alert(`각 자릿수의 합은 ${sum}`);
