//Arithmatic Operator
let x=5;
let y=2;
console.log("x+y=",x+y);
console.log("x-y=",x-y);
console.log("x*y=",x*y);
console.log("x/y=",x/y);
console.log("x Mod y=",x%y);
console.log("x^y=",x**y);
let num=15;
if(num%2==0){
    console.log("even");
}else{
    console.log("odd");
}



// alert("Jai Shree Ram");
// var a=prompt("Enter a number:");
// if(a%5==0){
//     console.log(a,"Multiple of 5");
// }else{
//     console.log(a,"Not a multiple of 5");
// }
// giving students score according to their grades;
let marks=prompt("enter marks:");
if(marks>=90 && marks<=100){
    console.log("A");
}else if(marks>=70 && marks<=89){
    console.log("B");
}else if(marks>=60 && marks<=69){
    console.log("C");
}else if(marks>=50 && marks<=59){
    console.log("D");
}else{
    console.log("F");
}

//switch case
let day=10;
switch(day){
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid Day");
        break;
}