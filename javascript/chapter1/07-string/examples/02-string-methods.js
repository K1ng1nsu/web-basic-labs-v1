let message = "hello world";
console.log(message.toUpperCase()); // "HELLO WORLD"
console.log(message.toLowerCase()); // "hello world"
console.log(message.includes("world")); // true
console.log(message.includes("bye")); // false
console.log(message.indexOf("o")); // 4
console.log(message.lastIndexOf("o")); // 7
console.log(message.slice(0, 5)); // "hello"
console.log(message.slice(6)); // "world"
console.log(message.replace("hello", "hi")); // "hi world"
console.log(message.replaceAll("l", "L")); // "heLLo worLd"
console.log(message.trim()); // "hello world"
console.log(message.split(" ")); // ["hello", "world"]
console.log("bye".repeat(2)); // "byebye"

let input = "   welcome to string world!   ";
let result = input.trim().toUpperCase().replace("STRING", "JAVASCRIPT");
console.log(result); // "WELCOME TO JAVASCRIPT WORLD!"
