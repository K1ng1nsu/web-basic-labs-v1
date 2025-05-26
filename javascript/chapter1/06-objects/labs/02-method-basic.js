const student = {
  name: '윤학생',
  greet() {
    // TODO: this를 사용해 "안녕하세요, 윤학생입니다!" 출력
    console.log(`안녕하세요, ${this.name}입니다!`);
  },
};

// TODO: student.greet() 실행

student.greet();
