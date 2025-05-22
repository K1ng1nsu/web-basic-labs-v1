// 화살표 함수(arrow function)
// this가 필요한 경우 사용 X

const sayHello = () => {
  console.log("Hello, world!");
};

sayHello(); // 호출

setTimeout(sayHello, 1000);

// button.addEventListener("click", () => {
//   console.log(this); // window (또는 상위 스코프의 this)
// });
