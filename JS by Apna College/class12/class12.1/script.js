class ToyotaCar{
    brand;
    milage;
    constructor(brand,milage){
        this.brand=brand;
        this.milage=milage;
    }
    
    start(){
        console.log("Start!");  
    }
    stop(){
        console.log("Stop!");
    }
    // setbrand(brand){
    //     this.brand = brand;
    // }
}
// let fortuner=new ToyotaCar("Fortuner",25);
// fortuner.start();
// fortuner.stop();
// console.log(fortuner.milage)
class person{
    constructor(name,species){
        this.species="Human";
        this.name=name;
    }
    greet(){
        console.log("Hello");
    }
    eat(){
        console.log("I am eating");
    }
    sleep(){
        console.log("I am sleeping");
    }
    work(){
        console.log("I am working");
    }
}
class engineer extends person{
    constructor(name,branch){
        super(name);
        this.branch=branch;
    }
    work(){
        console.log("I am working as an engineer");
    }

}
let obj1=new engineer("Priyanshu Yadav","CSE");
obj1.greet();
class doctor extends person{
    work(){
        console.log("I am a doctor");
    }
}
let obj2=new doctor();