/*
[문제] 아래 비동기 함수를 두 방식으로 호출해, 전체 실행 시간을 비교해보세요.

function asyncJob(ms) {
  return new Promise(resolve => setTimeout(() => resolve(ms), ms));
}

- 1) await를 반복문(for of)에서 사용 (순차 실행)
- 2) Promise.all과 await로 병렬 실행

각 방식에서 콘솔로 각 작업의 시작/끝, 전체 소요시간을 출력해보세요.
*/
