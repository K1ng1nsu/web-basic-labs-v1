const student = {
  name: "윤학생",
  greet() {
    console.log(`안녕하세요, ${this.name}!`);
  },
};
student.greet();
setTimeout(student.greet, 1000); // undefined (this 사라짐)
setTimeout(student.greet.bind(student), 1000); // student 객체를 this로 고정
