// 학생 이름을 key, 점수를 value로 저장하는 Map
const scores = new Map();

scores.set("윤학생", 85);
scores.set("이학생", 92);
scores.set("김학생", 78);
scores.set("이학생", 100);

console.log(scores.get("이학생"));

// 전체 순회
for (const [name, score] of scores) {
  console.log(`${name}의 점수는 ${score}점입니다.`);
}
