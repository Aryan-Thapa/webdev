const student={
    fullname:"Aryan",
    marks:94.8,
    printmarks:function(){
        console.log("marks=",this.marks);//student.marks(this.marks)this means that particular object for which the function is called.
    }
};
// prototypes
// IS objects have special properties called prototypes

const employee={
    calctax(){
        console.log("Tax is 10%");
    },
    // calctax2:function(){
    //     console.log("tax is 20%");
    // }
};

const karanarjun={
    salary:50000,
    calctax(){
        console.log("Tax is 20%");
    },
}

karanarjun.__proto__=employee;

// classes
// Program code template(blueprint) for creating objects

class Car{
    //Manually created constructor 
    constructor(brand,mileage){
        console.log("Creating a new object");
        this.brandname=brand;
        this.mileage=mileage;
    }
    start(){
        console.log("Start");
    }

    stop(){
        console.log("Stop");
    }
    // setBrand(brand){
    //     this.brandname=brand;
    // }
}
//object created using Car class
let fortuner=new Car("Toyota",7);
console.log(fortuner);
//object ki property
// fortuner.setBrand("Toyota");
let virtus=new Car("Volkswagen",10);
console.log(virtus);
// virtus.setBrand("Volkswagen");

// constructor is a special method
// by default it is automatically invoked by new(keyowrd)

// Inheritance is passing down of properties from parent class to child class

class Parent{
    hello(){
        console.log("Hello");
    }
}
class Child extends Parent{

}

let obj=new Child;

// Example2
class person{
    constructor(name){
        // console.log("Enter child constructor");
        this.species="Homo sapiens";
        this.name=name;
    }
    eat(){
        console.log("eat");
    }
    // sleep(){
    //     console.log("sleep");
    // }
    // work(){
    //     console.log("Do nothing");
    // }
}

class Engineer extends person{
    constructor(name){
        // console.log("enter child constructor");
        super(name);//to invoke the parent class conductor
        // this.branch=branch;
        // console.log("exit child constructor");
    }
    work(){
        super.eat(); //eat function from parent class will be invoked
        console.log("solve problems build something");
    }
}

let engObj=new Engineer("Aryan");
// class Doctor extends person{
//     work(){
//         console.log("Treat patients");
//     }
// }

// if child and parents have same method then in this case childs method will be used and this concept is known as method overriding


// Super keyword is used to call the constructor of its parent class to access parents properties and methods

