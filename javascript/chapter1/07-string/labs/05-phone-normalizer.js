/* 전화번호에서 하이픈 제거 */
function normalizePhone(phone) {
  // TODO: replaceAll 사용
  return phone.replaceAll('-', '');
}
console.log(normalizePhone('010-1234-5678')); // "01012345678"
