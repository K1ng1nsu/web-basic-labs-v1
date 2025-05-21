// 문제: prompt() 메서드를 활용해 사용자에게 숫자를 입력받아 홀수/짝수를 출력하세요.
const userInput = prompt('숫자를 입력하세요.');

alert(`${userInput} 은 ${userInput % 2 == 0 ? '짝수' : '홀수'} 입니다`);
