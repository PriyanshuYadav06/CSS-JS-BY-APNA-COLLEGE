// This code demonstrates the use of Promises in JavaScript.
let promise=new Promise((resolve,reject)=>{
    console.log("Hello");
    setTimeout(()=>{
        // resolve("success");
        reject("error1223");
    },3000);
})
promise.then((e)=>{
    console.log(e);
    return 123;
}).then((e)=>{
    console.log("next then"+e);
}).catch((err)=>{
    console.log("Error:",err);
})

