const user = {
  name: "지수",
  age: 28,
  city: "Seoul",
  obj: {},
  func: function () {},
};

for (const key in user) {
  console.log(`${key}: ${user[key]}`);
}
