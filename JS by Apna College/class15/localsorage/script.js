let key = prompt("Enter the key you want to set:");
let value = prompt("Enter the value you want to set:");
localStorage.setItem(key, value);
console.log(`key:${key} value:${localStorage.getItem(key)}`);
localStorage.removeItem("name");
let user = {
  name: "Priyanshu Yadav",
  company: "Capsitech",
  location: "Jodphur",
  age: 22,
  role: "Full Stack Developer",
};
// You can only store strings.
// If you want to store objects or arrays, you must convert them using JSON.stringify() and JSON.parse():
localStorage.setItem("user", JSON.stringify(user));
let storedUser = JSON.parse(localStorage.getItem("user"));
console.log(storedUser);
