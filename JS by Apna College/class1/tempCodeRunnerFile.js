let nums=[1,2,3,4,5,6,7,8,9,10];
let num1=[];
const fun=nums.reduce((acc,curr)=>{
    acc= acc+curr;
    return acc;
},0)
console.log(fun);