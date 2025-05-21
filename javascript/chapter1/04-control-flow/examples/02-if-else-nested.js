const score = 85;

if (score >= 90) {
  console.log("A학점");
} else if (score >= 80) {
  if (score >= 85) {
    console.log("B+학점");
  } else {
    console.log("B학점");
  }
} else {
  console.log("C학점 이하");
}
