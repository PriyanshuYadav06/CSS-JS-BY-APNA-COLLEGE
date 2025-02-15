//Asynchronous nature of js
// console.log("first");
// console.log("second");


// setTimeout(() => {
//     console.log("Hello, world!");
// },2000);
// console.log("Third");

// call-back for sychronus programming
// function greet(name,callback){
//     console.log("Hello "+name);
//     callback(name);
// }

// greet("Priyanshu Yadav",(name)=>{
//     console.log("Good Morning!!"+name);
// });

// callback-Hell
function getData(dataid,callback){
    setTimeout(() => {
        console.log("Data:"+dataid);
        callback();
        
    }, 2000);
}
// getData(1);
// getData(2); //apan ko chyiyan ki age data 1 fetch ho phir data 2 fetch ho uske bad data 3 fetch hoo lekin for js asynchronous nature kya hota hain na sab ek sath execute ho jaa raha hain;
               //iske liya apan callback function ka use karte hain for individually series wise data fetch karne k liya 
// getData(3);

//this is called "callback-hell"
getData(1,()=>{
    console.log("getting data2....");
    getData(2,()=>{
        console.log("getting data3....");
        getData(3,()=>{
            console.log("getting data4....");
            getData(4,()=>{
                console.log("All data fetched");
            })
        })
    })
})



