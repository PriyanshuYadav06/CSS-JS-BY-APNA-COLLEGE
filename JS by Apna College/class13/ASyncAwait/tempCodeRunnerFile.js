function getData(data){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(data);
        },2000);
    })
}
async function fetchData(){
    console.log("Data1 fetching....");
    let data1=await getData(1);
    console.log("Data2 fetching....");
    let data2=await getData(2);
    console.log("Data3 fetching....");
    let data3=await getData(3);
    console.log("Data4 fetching....");
    let data4=await getData(4);
    console.log("All data fetched...");
    console.log(data1,data2,data3,data4);
}
fetchData();