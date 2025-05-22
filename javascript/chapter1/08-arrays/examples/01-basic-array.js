let fruits = ["apple", "banana", "cherry"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
fruits[1] = "kiwi";
console.log(fruits);

let numbers = [1, 2, 3];
numbers.push(4); // [1, 2, 3, 4]
numbers.pop(); // [1, 2, 3]
numbers.unshift(0); // [0, 1, 2, 3]
numbers.shift(); // [1, 2, 3]
console.log(numbers);

let matrix = [
  [1, 2],
  [3, 4],
];
console.log(matrix[1][0]);
