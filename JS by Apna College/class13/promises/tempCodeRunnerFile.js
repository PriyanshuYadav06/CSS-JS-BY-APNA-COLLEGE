// let promise=new Promise((resolve,reject)=>{
//     console.log("hello")
//     reject(123);
// })

function getdata(dataid){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataid);
            resolve();
        },3000)
    })
}
result=getdata(123);