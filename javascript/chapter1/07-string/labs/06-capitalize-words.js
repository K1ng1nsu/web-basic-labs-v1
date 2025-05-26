/* 모든 단어의 첫 글자를 대문자로 바꾸기 */
function capitalizeWords(sentence) {
  // TODO: split → map → join

  return sentence
    .split(' ')
    .map((str) => str.substring(0, 1).toUpperCase() + str.substring(1))
    .join(' ');
}
console.log(capitalizeWords('hello javascript world')); // "Hello Javascript World"
