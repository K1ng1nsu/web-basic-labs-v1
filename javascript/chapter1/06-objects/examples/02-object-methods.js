const student = {
  name: "이학생",
  age: 25,
  major: "Computer Science",
  study(subject) {
    console.log(`${this.name} is studying ${subject}`);
  },
};

student.study("JavaScript");

const copyStudent = { ...student };
copyStudent.name = "윤학생";

copyStudent.study("Java");
student.study("JavaScript");
