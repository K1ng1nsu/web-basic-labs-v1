[1, 2, 3].forEach((num) => console.log(num));

[1, 2, 3].map((x) => x * 2); // [2, 4, 6]

[1, 2, 3, 4].filter((x) => x % 2 === 0); // [2, 4]

[1, 2, 3].reduce((acc, cur) => acc + cur, 0); // 6

["a", "b", "c"].find((x) => x === "b"); // "b"

[3, 1, 2].sort(); // [1, 2, 3] (문자열 정렬됨)
[3, 1, 2].sort((a, b) => a - b); // 올바른 숫자 정렬
