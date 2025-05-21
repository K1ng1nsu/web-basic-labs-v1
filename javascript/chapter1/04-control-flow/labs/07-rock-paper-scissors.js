/* 
사용자와 컴퓨터가 가위바위보 게임을 합니다.
사용자는 "가위", "바위", "보" 중 하나를 입력하고, 컴퓨터는 무작위로 선택합니다.
3판 2선승제로 승부를 결정하세요.

-- 출력 예시 -- 

[1라운드]
당신의 선택: 가위
컴퓨터의 선택: 보
당신이 이겼습니다! (1승 0패)

[2라운드]
당신의 선택: 보
컴퓨터의 선택: 바위
당신이 이겼습니다! (2승 0패)

🎉 게임 종료: 당신의 승리입니다!

Math.random() - 난수 생성 함수
*/

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
const getComputerPick = () => {
  const randomNum = Math.floor(Math.random() * 3);

  if (randomNum == 0) {
    return '가위';
  }
  if (randomNum == 1) {
    return '바위';
  }
  if (randomNum == 2) {
    return '보';
  }
};

const figureWhoWin = (userPick, computerPick) => {
  if (userPick === '가위' && computerPick === '바위') return 'computer';
  if (userPick === '바위' && computerPick === '보') return 'computer';
  if (userPick === '보' && computerPick === '가위') return 'computer';

  return 'user';
};
// prettier-ignore
const logStatus = (userPick,computerPick,winner,round,userWin,computerWin) => {
  console.log(`[${round} 라운드]`);
  console.log(`당신의 선택: ${userPick}`);
  console.log(`컴퓨터의 선택: ${computerPick}`);
  if (winner === `tie`) {
    console.log(`비겼습니다. ${userWin} 승 ${computerWin} 패`);
  } else {
    if (winner === 'user') {
      console.log(`이겼습니다. ${userWin} 승 ${computerWin} 패`);
    } else {
      console.log(`졌습니다. ${userWin} 승 ${computerWin} 패`);
    }
  }
};

const main = async () => {
  let userWin = 0;
  let computerWin = 0;
  let roundCount = 0;

  while (true) {
    roundCount++;

    const userPick = await askQuestion('당신의 선택: ');
    const computerPick = getComputerPick();
    if (userPick === computerPick) {
      // prettier-ignore
      logStatus(userPick,computerPick,'tie',roundCount,userWin,computerWin);
    } else {
      let winner = figureWhoWin(userPick, computerPick);
      if (winner == 'user') userWin++;
      if (winner == 'computer') computerWin++;
      // prettier-ignore
      logStatus(userPick,computerPick,winner,roundCount,userWin,computerWin);
    }

    if (userWin >= 2 || computerWin >= 2) {
      console.log(`게임 종료 ${userWin} 승 ${computerWin} 패`);
      break;
    }
  }
};

main();
