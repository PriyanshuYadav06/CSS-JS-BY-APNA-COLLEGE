// function asyncfunc1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("Data1");
//             resolve("sucess...");
//         },4000);
//     })
// }
// function asyncfunc2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("Data2");
//             resolve("sucess...");
//         },4000);
//     })
// }
// console.log("fetching Data1.....");
// let p1=asyncfunc1();
// p1.then((res)=>{
//     console.log("Promise Resolved ",res);
// })                                          ismain dono eksath execute hota hain isliya humko promise chain ka use karna padega;)
// console.log("fetching Data2.....");
// let p2=asyncfunc2();
// p2.then((res)=>{
//     console.log("Promise Resolved ",res);
// })

// //promise chain;)
// let p1=asyncfunc1();
// console.log("fetching data1......")
// p1.then(()=>{
//     let p2=asyncfunc2();
//     console.log("fetching data2......")
//     p2.then(()=>{

//     })
// })














// const getpromise=()=>{
//     return new Promise((resolve,reject)=>{
//         console.log("Im a promise");
//        //resolve("sucesse..");
//         reject("erorr");
        
//     })
    
// }
// let promise=getpromise();
// promise.then((e)=>{
//     console.log("hello ",e)
// })
// promise.catch((e)=>{
//     console.log("catch ",e)
// })













//function getData(userId){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("Data:"+userId);
//             resolve("sucess...")
            
//         },5000);
//     })
// }












// function getData(dataid){
//    return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log("Data:"+dataid);
//         resolve();
//     }, 2000);
//    })
// }
// //promise-chain
// p1=getData(1);
// console.log("Data1 fetching....");

// p1.then(()=>{
//     p2=getData(2);
//     console.log("Data2 fetching....");
//     p2.then(()=>{
//         p3=getData(3);
//         console.log("Data3 fetching....");
//         p3.then(()=>{
//             console.log("All data fetched");
//             })
//     })
// })






//callback-Hell
// getData(1,()=>{
//     console.log("getting data2....");
//     getData(2,()=>{
//         console.log("getting data3....");
//         getData(3,()=>{
//             console.log("getting data4....");
//             getData(4,()=>{
//                 console.log("All data fetched");
//             })
//         })
//     })
// })

