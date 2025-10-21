 console.log("Hello World!");
 let key=prompt("Enter a key:");
 let value=prompt("Enter a value:");
 sessionStorage.setItem(key,value);
 console.log(`${key}:${sessionStorage.getItem(key)}`);
 if(key==0){
    sessionStorage.clear();
 }