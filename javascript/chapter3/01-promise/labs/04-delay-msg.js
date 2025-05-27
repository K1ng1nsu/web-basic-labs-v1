// [문제] Promise객체를 이용해 ms초 후에 문자열 msg를 출력하는 비동기 함수를 작성해보세요.

function getPromise(ms, msg) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(msg);
    }, ms);
  });
}

getPromise(1000, '1초후');
getPromise(2000, '2초후');
getPromise(3000, '3초후');
