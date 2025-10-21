function Greet() {
  console.log("Hello, World!");
}
Greet();

function sum(x, y) {
  return x + y;
}
console.log(sum(2, 5));

//Arrow Function
const arrowSum = (x, y) => {
  return x + y;
};

const arrowMul = (x, y) => {
  return x * y;
};
const printHello = () => {
  console.log("Hello");
};

//ForEach function(Highre Order Function)
let fruits = ["Apple", "Banana", "Cherry"];
fruits.forEach((val, idx, arr) => {
  console.log(val, idx, arr);
});
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.forEach((val, idx) => {
  arr[idx] = arr[idx] ** 2;
});
let numbers = [1, 2, 3, 4];
let doublenumbers = numbers.map((val) => {
  return val * 2;
});
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evennum = num.filter((val) => {
  return val % 2 === 0;
});

let numb = [1, 2, 3, 4, 5];
let summ = numb.reduce((acc, val) => acc + val, 0);

console.log(summ); // 15
