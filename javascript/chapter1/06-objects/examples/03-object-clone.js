const student = {
  name: "이학생",
  scores: {
    math: 90,
    english: 85,
  },
};

const shallowCopy = { ...student };
const deepCopy = JSON.parse(JSON.stringify(student));

shallowCopy.scores.math = 70;

console.log(student.scores.math); // 70 (얕은 복사로 원본 영향 O)
console.log(deepCopy.scores.math); // 90 (깊은 복사로 원본 영향 X)
