// 문제 1 : visit()을 여러 번 호출해보고, 왜 항상 1이 나오는지 분석해보세요.
// 문제 2 : 이 문제를 해결하려면 visitor 변수를 어디에 선언해야 할까요?
// visit() 함수를 여러 번 호출하면 방문자 수가 1씩 증가하도록 만드세요.

function visit() {
    var visitor = 0;      // Q. 왜 방문자 수가 계속 1일까요?
    visitor++;
    console.log("현재 방문자 수:", visitor);
}
  
visit();
visit();
visit();
  

  
  