const visitedUsers = new Set();

visitedUsers.add("윤유저");
visitedUsers.add("홍유저");
visitedUsers.add("윤유저"); // 중복 → 무시됨

console.log(visitedUsers.has("윤유저")); // true
console.log(visitedUsers.size); // 2

// 전체 순회
for (const user of visitedUsers) {
  console.log("방문자:", user);
}
