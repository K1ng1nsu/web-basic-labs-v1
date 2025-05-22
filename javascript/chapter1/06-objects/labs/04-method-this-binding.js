const student = {
  name: "윤학생",
  greet() {
    console.log(`안녕하세요, ${this.name}입니다.`);
  },
};

const greetFunc = student.greet;

// TODO: greetFunc() 를 this가 유지되도록 고쳐보세요
// 출력: 안녕하세요, 윤학생입니다.
