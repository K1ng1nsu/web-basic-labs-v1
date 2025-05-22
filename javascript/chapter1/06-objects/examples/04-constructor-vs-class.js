// 생성자 함수 방식
function Student(name, major) {
  this.name = name;
  this.major = major;
}

Student.prototype.introduce = function () {
  console.log(`안녕하세요, ${this.major} 전공 ${this.name}입니다.`);
};

const s1 = new Student("윤학생", "컴퓨터공학");
s1.introduce();

// 클래스 방식
class StudentClass {
  constructor(name, major) {
    this.name = name;
    this.major = major;
  }

  introduce() {
    console.log(`안녕하세요, ${this.major} 전공 ${this.name}입니다.`);
  }
}

const s2 = new StudentClass("김학생", "심리학");
s2.introduce();
