let btn = document.querySelector("button");
btn.addEventListener("click", () => {
  console.log("button clicked-handeler1");
});
btn.addEventListener("click", () => {
  console.log("button clicked-handeler2");
});
const handeler3 = () => {
  console.log("button clicked-handeler3");
};
btn.addEventListener("click", handeler3);

btn.addEventListener("click", () => {
  console.log("button clicked-handeler4");
});
btn.removeEventListener("click", handeler3);
// btn.onclick=()=>{
//     console.log("button clicked");
// }
// btn.onmouseover=()=>{
//     console.log("mouse over");
// }
let div = document.querySelector("div");
div.onmouseover = () => {
  console.log("div mouse over");
  div.style.backgroundColor = "Red";
};
