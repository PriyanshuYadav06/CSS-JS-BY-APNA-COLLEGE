// async-await
// function getData(data) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Data:", data);
//       resolve(data);
//     }, 2000);
//   });
// }
// (async function fetchData() {
//   try {
//     console.log("data1 is fetching....");
//     await getData(1);
//     console.log("data2 is fetching....");
//     await getData(2);
//     console.log("data3 is fetching....");
//     await getData(3);
//     console.log("data4 is fetching....");
//     await getData(4);
//     console.log("data5 is fetching....");
//     await getData(5);
//     console.log("data6 is fetching....");
//     await getData(6);
//     console.log("all data is fetched....");
//   } catch (err) {
//     console.log("Error:", err);
//   }
// })();
// Promise-Chaining
// console.log("data1 is fetching....");
// getData(1)
//   .then(() => {
//     console.log("data2 is fetching....");
//     return getData(2);
//   })
//   .then(() => {
//     console.log("data3 is fetching....");
//     return getData(3);
//   })
//   .then(() => {
//     console.log("data4 is fetching....");
//     return getData(4);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// Call-Back Hell
// console.log("data1 is fetching....");
// getData(1, () => {
//   console.log("data2 is fetching....");
//   getData(2, () => {
//     console.log("data3 is fetching....");
//     getData(3, () => {
//       console.log("data4 is fetching....");
//       getData(4, () => {
//         console.log("all data is fetched....");
//       });
//     });
//   });
// });

// spread Operator && rest Operator
const arr = [1, 2, 3, 4, 5];
const brr = [6, 7, 8, 9, 10];
const mergedArr = [...arr, ...brr, 11, 12, 13, 14];
console.log(mergedArr);

function sum(a, b, c) {
  return a + b + c;
}
ele = [1, 2, 2];
console.log(sum(...ele));
