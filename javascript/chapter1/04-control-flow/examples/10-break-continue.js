for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue; // 5는 건너뛰기
  }
  if (i === 8) {
    break; // 8에서 종료
  }
  console.log(i);
}
