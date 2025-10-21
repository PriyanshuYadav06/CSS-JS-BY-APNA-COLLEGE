// Rest in Function Parameters
function sum(...numbers){
    return numbers.reduce((acc,curr)=>{
        return acc+curr;
    },0);
}
console.log(sum(1,2,3,4,5));
// Rest in Array Destructuring 
let arr=[1,2,3,4,5,6,7,8,9,10];
let [first,second,third,...rest]=arr;
console.log(first);
console.log(second);
console.log(third);
console.log(rest);
// Rest in Object Destructuring
let obj1={
    name:"Priyanshu Yadav",
    age:22,
    city:"Jodhpur",
}
let {name,age,...restObj}=obj1;
console.log(name);
console.log(age);
console.log(restObj);