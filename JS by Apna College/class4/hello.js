let fruits = ["Banana", "Apple", "Cherry", "Date"];

// Add elements to the end of the array
fruits.push("Elderberry", "Fig");
console.log("After push:", fruits); // ["Banana", "Apple", "Cherry", "Date", "Elderberry", "Fig"]

// Remove the last element from the array
fruits.pop();
console.log("After pop:", fruits); // ["Banana", "Apple", "Cherry", "Date", "Elderberry"]

// Add elements to the beginning of the array
fruits.unshift("Grape", "Honeydew");
console.log("After unshift:", fruits); // ["Grape", "Honeydew", "Banana", "Apple", "Cherry", "Date", "Elderberry"]

// Remove the first element from the array
fruits.shift();
console.log("After shift:", fruits); // ["Honeydew", "Banana", "Apple", "Cherry", "Date", "Elderberry"]

// Slice the array
let slicedFruits = fruits.slice(1, 4);
console.log("Sliced array:", slicedFruits); // ["Banana", "Apple", "Cherry"]

// Splice the array
fruits.splice(2, 1, "Fig", "Grapefruit");
console.log("After splice:", fruits); // ["Honeydew", "Banana", "Fig", "Grapefruit", "Cherry", "Date", "Elderberry"]

// Concatenate arrays
let moreFruits = ["Kiwi", "Lemon"];
let allFruits = fruits.concat(moreFruits);
console.log("After concat:", allFruits); // ["Honeydew", "Banana", "Fig", "Grapefruit", "Cherry", "Date", "Elderberry", "Kiwi", "Lemon"]

// Iterate over the array
fruits.forEach(function(fruit) {
  console.log("forEach:", fruit);
});

// Map the array
let uppercasedFruits = fruits.map(function(fruit) {
  return fruit.toUpperCase();
});
console.log("After map:", uppercasedFruits); // ["HONEYDEW", "BANANA", "FIG", "GRAPEFRUIT", "CHERRY", "DATE", "ELDERBERRY"]

// Filter the array
let shortNamedFruits = fruits.filter(function(fruit) {
  return fruit.length <= 5;
});
console.log("After filter:", shortNamedFruits); // ["Fig", "Date"]

// Reduce the array
let totalLength = fruits.reduce(function(total, fruit) {
  return total + fruit.length;
}, 0);
console.log("After reduce:", totalLength); // 44

// Find an element in the array
let foundFruit = fruits.find(function(fruit) {
  return fruit === "Cherry";
});
console.log("Found fruit:", foundFruit); // "Cherry"

// Find the index of an element
let foundIndex = fruits.findIndex(function(fruit) {
  return fruit === "Date";
});
console.log("Found index:", foundIndex); // 5

// Check if the array includes an element
let hasApple = fruits.includes("Apple");
console.log("Includes Apple:", hasApple); // false

// Get the index of an element
let indexOfBanana = fruits.indexOf("Banana");
console.log("Index of Banana:", indexOfBanana); // 1

// Join the array into a string
let fruitString = fruits.join(", ");
console.log("Joined string:", fruitString); // "Honeydew, Banana, Fig, Grapefruit, Cherry, Date, Elderberry"

// Reverse the array
fruits.reverse();
console.log("After reverse:", fruits); // ["Elderberry", "Date", "Cherry", "Grapefruit", "Fig", "Banana", "Honeydew"]

// Sort the array
fruits.sort();
console.log("After sort:", fruits); // ["Banana", "Cherry", "Date", "Elderberry", "Fig", "Grapefruit", "Honeydew"]
 


// example of map,filter and reduce function
let arr=[1,2,3,4,5,6,7,8,9,10];
const new_array1=arr.map((element,index)=>{
    return element*element;
    
})
const new_array2=arr.filter((element,index)=>{
    if(index%2===0){
        return element;
    }
})
const new_array3=arr.reduce((acc,curr)=>{
    acc*=curr;
    return acc;
},1)
console.log(new_array3);
