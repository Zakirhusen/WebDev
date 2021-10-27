// `````````````````````` Promises  ``````````````````````
// promise is substitute of callback function
// it returns resolve reject or pending state

function func1() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      const error = true;
      if (!error) {
        console.log("Your promise has been resolved");
        resolve("thanks for resolving");
    } else {
        console.log('promise has been not resolved');
        reject("Sorry not fulfilled");
      }
    }, 2000);
  });
}
func1().then(function(success){ //here function() is reslove
    console.log(`Harry : ${success}`);
}).catch(function(fail){//here function() is reject
    console.log(`Harry:Bad bro ${fail}`);
});



// EX2
let students = [
    { name: "rohan", subject: "maths" },
    { name: "mohan", subject: "social" }
  ];

  function enrollStudent(student) {
      return new Promise(function(resolve,reject){
          const error=false;
          if (error) {
              setTimeout(() => {
                students.push(student);
                console.log('promise is in resolve state');
                resolve()
              }, 3000);

          } else {
              reject('Some error occured')
          }
      })
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
    }, 1000);
  }
  
  let newStudent={ name: "Man mohan", subject: "Economis"}
  
//   enrollStudent(newStudent).then(function(){
//       getStudents()
//   }).catch()

//   or we can write the getStudents() in then
  enrollStudent(newStudent).then(getStudents).catch(function(fail){
      console.log( fail);
    })