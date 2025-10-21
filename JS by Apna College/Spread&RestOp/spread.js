let arr=[1,2,3,4,5];
// Using spread operator to create a new array with additional elements
let arr2=[...arr,6,7,8,9,10];
console.log(arr);
console.log(arr2);
// Using spread operator to combine two arrays
let arr3=[...arr,...arr2];
console.log(arr3);
// Spread in objects
let obj1={
    name:"Priyanshu Yadav",
    age:22,
}
console.log(obj1);
let obj2={
    ...obj1,
    city:"Jodhpur",
    Country:"India"
}
console.log(obj2);