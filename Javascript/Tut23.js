//````````````````````` OOps object ,object prototype,prototype inheritance  `````````````````````
console.log('tut23');
let obj={
    name:"quallis",
    speed:90
}
// console.log(obj);
//Creating  Object by constructer
let generalCar=function(givenName,givenSpeed){
    this.name=givenName;
    this.speed=givenSpeed
    this.run=function(){
        console.log(`${this.name} is running at speed of ${this.speed}`);
        
    }
}

let car1=new generalCar("maruti 800",70)
let car2=new generalCar("Nissan",90)
// console.log(car1);
// console.log(car1.speed);
// car1.run();

// console.log(car2.name);


// we can edit our prototype 
// generalCar.prototype.color='white'
// generalCar.prototype.getName=function(){
//     return this.name
// }

// console.log(car1);
// console.log(car2.getName());



// Creating Prototype in other way
const proto={
    fName:"zakir",
    slogan:function(){
        return `This company is the best`
    },
    changeName:function(newName){
        this.name=newName
    }
}

// it is create object
// const harry=Object.create(proto);
// harry.name="Harry"
// harry.role="programmer"

// console.log(proto.fName);
// console.log(harry.fName);
// console.log(harry.name);
// harry.changeName("Harry2")
// console.log(harry);


// it is also create object
const harry=Object.create(proto,{
    name:{value:"harry",writable:true},
    role:{value:"programmer"}
})
// harry.changeName("Harry2")
// console.log(harry);
// console.log(harry.name);
// console.log(harry.role);

// We cant use prototype too much instead we use classes

// ********prototype inheritance****

// Employee Constructor
function Employee(name,salary,experience){
    this.name=name;
    this.salary=salary;
    this.experience=experience
}

Employee.prototype.slogan=function(){
    return `This company is best ,Regards ${this.name}`
}
let zakir=new Employee('zakir',100,23)
console.log(zakir.slogan());


// Programmer  Constructor inherit from Employee
function Programmer(name,salary,experience,language){
    Employee.call(this,name,salary,experience);
    this.language=language;
}


// inherit prototype

// console.log(RohanDas.slogan());

// if cannt create prototype RonhanDas.slogan() cant run
Programmer.prototype=Object.create(Employee.prototype)
Programmer.prototype.constructor=Programmer;
let RohanDas=new Programmer("rohanDas",45,21,"python")
console.log(RohanDas);
// console.log(RohanDas.slogan());
