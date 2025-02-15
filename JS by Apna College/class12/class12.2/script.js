// let a=10;
// let b=5;
// console.log("a+b:",a+b);
// console.log("a+b:",a+b);
// try{
//     console.log("a+b:",a+c);
// }catch(err){
//     console.log("Error:",err.message);
// }
// console.log("a+b:",a+b);
// console.log("a+b:",a+b);

let a=10;
let b=5;
function sum(a,b){
    try{
        console.log("a+b:",a+b);
        return;
    }catch{
        console.log("Error");
        return;
    }finally{
        console.log("Finally");
    }

}
sum(a,b);

