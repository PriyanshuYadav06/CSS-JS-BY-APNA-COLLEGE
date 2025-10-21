// (function Greet(name){
//     console.log(`Hello ${name} How are you today?`);
// }("John"));
// (function isEven(num){
//     if(num%2===0) return true;
//     return false;
// })(23);
// console.log(isEven(23));
// const multiply=(function(x,y){
//     console.log(x*y);
// })(2,3);
// console.log(multiply(2,3));
// const divide=((x,y)=>{
//     console.log(x/y);
// })(10,5);
// console.log(divide(10,2));


// Named Function
function sum(x,y){
    return x+y;
}
console.log(sum(2,5));
// Function Expression
const square=function(x){
    return x**2;
}
console.log(square(2));
// Arrow Function 
const arrowSquare=(x)=>{
    return x**2;
}
console.log(arrowSquare(3));
// Immediately Invoked Function Expression (IIFE)
(function greet(name){
    console.log(`Hello, ${name}!`);
})("Priyanshu Yadav");