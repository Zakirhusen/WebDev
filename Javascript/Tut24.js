//````````````````````` ES6 classes and inheritance  `````````````````````

console.log("Tut24->Es6Classes inheritance");

class Employee {
  constructor(givenName, givenExperience, givenSalary) {
    this.name = givenName;
    this.experience = givenExperience;
    this.salary = givenSalary;
  }
  slogan() {
    return `I am ${this.name} and this company is the best`;
  }
  joiningYear() {
    return `${2021 - this.experience}`;
  }
  // if we can use function without creating object
  static add(a, b) {
    return a + b;
  }
}

let harry = new Employee("Harry", 5, 2300);
console.log(harry);
// console.log(harry.slogan());
// console.log(harry.joiningYear());

// console.log(Employee.add(2, 4));

// Classes inheritance
// inherit from Employee classes
class Programmer extends Employee {
  constructor(givenName, givenExperience, givenSalary, language='Javascript') {
    super(givenName, givenExperience, givenSalary);
    this.language = language;
  }
}

let zakir=new Programmer("Zakir",5,6999,"Python")
console.log(zakir);
console.log(zakir.slogan());

