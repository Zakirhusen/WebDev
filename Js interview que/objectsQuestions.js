// que 1
let person={name:"zakirhusen"}
let personArr=[person]
let obj=person
person.name="sayed"
// person=null
// console.log('ob',obj);
// console.log("person",person);
// console.log("person",personArr);

let value={ 
    num:10
}
const multiply=(x={...value}) => { 
    console.log(x.num*=2);
}
multiply()
multiply()
multiply(value)
multiply(value)
multiply(value)

// que 2
function perInfo(obj1){
    obj1.age=23
    obj1={
        name:"zakirhusen",
        age:33
    }
    return obj1
}
let person1={
    name:"zakir",
    age:35
}
let person2=perInfo(person1)
console.log('person1',person1);
console.log('person2',person2);