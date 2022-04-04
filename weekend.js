// let subtractFunction = (x, y) => {
//   return x - y;
// };

// console.log(subtractFunction);

// function scopeFunction() {
//   let myVar = "apple";
//   return myVar;
// }

// // scopeFunction();
// console.log(myVar);
let user = {
  name: "crystal",
  age: 30,
  email: "crystal@gmail.com",
  location: "houston",
  blogs: ["why cheese rules", "blog also"],
};
console.log(user);
console.log(user.name);
user.age = 35;
console.log(user.age);
console.log(user["name"]);
console.log(user["email"]);
user["name"] = "chun-li";
console.log(user["name"]);
