// ``````````````````````Callback function ``````````````````````
// def-callback fun is function that gets passed as argument to  another function to be "call back" later

// Ex1
// pretend data coming from the server
let students = [
  { name: "rohan", subject: "maths" },
  { name: "mohan", subject: "social" }
];
function enrollStudent(student,callback) {
  setTimeout(() => {
    students.push(student);
    callback()
  }, 1000);
}

function getStudents() {
  //setTimeout() also  callback function
  setTimeout(() => {
    let student = document.querySelector(".students");
    str = "";
    
    // forEach also takes callback function
    students.forEach(function (student) {
      str += `
      <li>${student.name}</li>
      `;
    });
    student.innerHTML=str;
  }, 13000);
}

let newStudent={ name: "Man mohan", subject: "Economis"}

// here we can getStudents() as argument to another function
enrollStudent(newStudent,getStudents)

// Ex2

const add=(a,b)=>{
  return a+b;
}
const sub=(a,b)=>{
  return a-b;
}
const multiply=(a,b)=>{
  return a*b;
}
let calculate=(a,b,operator)=>{
  console.log(operator(a,b));

}

calculate(20,30,multiply)
calculate(20,30,add)