function getData(userId){
   return new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("Data:"+userId);
        resolve();
    },2000);
   })
}
//IIFE : Immediately Invoked Function Expression
(async function() {
    console.log("Data1 fetching....")
    await  getData(1); 
    console.log("Data2 fetching....")
    await  getData(2); 
    console.log("Data3 fetching....")
    await  getData(3); 
    console.log("Data4 fetching....")
    await  getData(4);
    console.log("All data fetched...");
})();
//async-await
async function fetchData() {
    console.log("Data1 fetching....")
    await  getData(1); 
    console.log("Data2 fetching....")
    await  getData(2); 
    console.log("Data3 fetching....")
    await  getData(3); 
    console.log("Data4 fetching....")
    await  getData(4);
    console.log("All data fetched...");  
}
fetchData();
//callback-hell
console.log("Data1 fetching....");
getData(1,()=>{
    console.log("Data2 fetching....")
    getData(2,()=>{
        console.log("Data3 fetching....")
        getData(3,()=>{
            console.log("Data4 fetching....")
            getData(4,()=>{
                console.log("All data fetched...");
            })
        })
    })
})
//promise-chain
let p1=getData(1);
console.log("Data1 fetching....")
p1.then(()=>{
    console.log("Data2 fetching....")
    let p2=getData(2);
    p2.then(()=>{
        console.log("Data3 fetching....")
        let p3=getData(3);
        p3.then(()=>{
            console.log("Data4 fetching....")
            let p4=getData(4);
            p4.then(()=>{
                console.log("All data fetched...");
            })
        })
    })
})
