/*
[문제] 콜백을 Promise로 변환하기

아래 함수는 콜백 방식으로 데이터를 받아오는 함수입니다.
이 함수를 Promise 방식으로 재작성하세요.

function fetchProduct(productId, callback) {
  setTimeout(() => {
    if (productId > 0) {
      callback(null, { id: productId, name: "상품" + productId });
    } else {
      callback("잘못된 상품 ID", null);
    }
  }, 800);
}

// 예시 사용법
fetchProduct(3, (err, product) => {
  if (err) {
    console.error("에러:", err);
  } else {
    console.log("상품 정보:", product);
  }
});
*/
