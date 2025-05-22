const student = {
  name: "이학생",
  age: 21,
  major: "Computer Science",
};

console.log(student.name); // 점 표기법
console.log(student["major"]); // 대괄호 표기법

student.grade = "A+";
delete student.age;

console.log(student); // { name: '이학생', major: 'Computer Science', grade: 'A+' }

// 객체 속성 확인
console.log("age" in student);
console.log("major" in student);
console.log(student.hasOwnProperty("age"));
console.log(student.hasOwnProperty("major"));

// 구조 분해 할당 (순서 상관 X)
// 분해 할당받을 값이 없으면 기본값도 가능
let { name, age = 25, major } = student;
console.log(name, age, major);
