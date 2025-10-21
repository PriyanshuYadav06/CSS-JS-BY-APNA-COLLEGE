// for(let i=0;i<=100000;i++){
//     console.log(i);
// }

// let i=0;
// while(i<=10){
//     console.log(i);
//     i++;
// }

// let i=0;
// do{
//     console.log(i);
//     i++;
// }while(i<=100);

// for of loop
// The for...of loop is used to iterate over iterable objects (like arrays, strings, maps, sets, etc.).
// let name ="Priyanshu Yadav";
// for(let i of name){
//     console.log(i);
// }

// 4. for...in Loop
// The for...in loop is used to iterate over the properties of an object.
/* The commented code block is defining an object named `obj` with properties such as `name`, `age`,
`gender`, `address`, `phone`, and `email`. Each property holds specific information about a person.
This object can be used to store and access details of an individual in a structured manner. */
const obj = {
  name: "Priyanshu Yadav",
  age: 20,
  gender: "Male",
  address: "Delhi",
  phone: "1234567890",
  email: "priyanshu@gmail.com",
};

for (let i in obj) {
  console.log(i, obj[i]);
}

// gameNumber=25;
// while(n!=gameNumber){
//     var n=prompt("guess number:");
// }console.log("HUrray");

let str = "Priyanshu Yadav";
console.log(str.length);
console.log(str[10]);

//special type od string js
age = 21;
let str1 = `Hello Priyanshu Yadav an my age is ${age}`;

let a = "   priyanshu yadav   ";

k = prompt("enter fullName:");
console.log("@" + k + "1245");
