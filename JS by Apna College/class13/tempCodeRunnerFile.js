// Asynchronous nature of js
// function getData(dataid) {
//   setTimeout(() => {
//     console.log("Data:" + dataid);
//   }, 2000);
// }
// getData(1);
// getData(2);
// getData(3);
// getData(4);
// this is the problem in js asynchronous nature we want to fetch the data line by line serially but its fetching the data all at once
// so we will use the call back function
function getData(dataid, callback) {
  setTimeout(() => {
    console.log("Data:" + dataid);
    callback();
  }, 2000);
}
// this is called "callback-hell"
console.log("getting data1....");
getData(1, () => {
  console.log("getting data2....");
  getData(2, () => {
    console.log("getting data3....");
    getData(3, () => {
      console.log("getting data4....");
      getData(4, () => {
        console.log("All data fetched");
      });
    });
  });
});
// solving the problem using promises
function asyncfunc(dataid) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data:" + dataid);
      resolve("success");
    }, 2000);
  });
}
console.log("fetching Data1....");
asyncfunc(1)
  .then((res) => {
    console.log("fetching Data2....");
    return asyncfunc(2);
  })
  .then((res) => {
    console.log("fethching Data3....");
    return asyncfunc(3);
  })
  .then((res) => {
    console.log("fethching Data4....");
    return asyncfunc(4);
  })
  .then((res) => {
    console.log("All data fetched");
  });

// Async Await
function getdata(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data:" + userId);
      resolve("success");
    }, 2000);
  });
}
async function fetchData() {
  console.log("Data1 fetching....");
  await getdata(1);
  console.log("Data2 fetching....");
  await getdata(2);
  console.log("Data3 fetching....");
  await getdata(3);
  console.log("Data4 fetching....");
  await getdata(4);
  console.log("All data fetched");
}
fetchData();
// this is the best way to handle asynchronous nature of js
