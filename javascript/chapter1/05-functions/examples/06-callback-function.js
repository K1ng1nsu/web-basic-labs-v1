// askQuestion은 고차함수, answerCallback은 콜백함수
// 고차함수 : 함수를 인자로 받거나 반환하는 함수
// 콜백함수 : 다른 함수에 전달되어 나중에 호출되는 함수
// 다형성을 이루는 방법 (자바에선 인터페이스 / 상속 / 메서드 오버라이딩을 통해 이뤘다면 자바스크립트에선 콜백을 통해)

function askQuestion(answerCallback) {
  console.log("질문: 수업 끝나고 뭐할래?");
  answerCallback(); // 사용자가 대답하는 함수 호출
}

askQuestion(function () {
  console.log("대답: 친구랑 밥 먹으러 갈거야!");
});

askQuestion(() => {
  console.log("대답: 바로 집으로 갈거야!");
});
