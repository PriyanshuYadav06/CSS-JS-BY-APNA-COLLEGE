person={
    printmarks(){
        console.log("marks of person:",this.marks);
    },
    name:"priyansu Yadav",
    age:20,
    gender:"male",
    isStudent:true,
    marks:94.5,
    // printmarks:function(){
    //     console.log("marks:",this.marks);
        
    // },
}
// console.log(person.printmarks());
Monal={
    name:"Monal Raj",
    age:28,
    gender:"male",
    isStudent:false,
    marks:95,

}
Monal.__proto__ = person;



