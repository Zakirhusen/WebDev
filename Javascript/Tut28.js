//```````````````````````` AJAX````````````````````````

// //Notes: 
// /* --> Ajax-Async javascript and XML -is set of technologis not a programming language

// --> Ajax helps in fetching data asynchronously without interfering existing page, reduce network bandwidth

// --> modern websites uses Json instead of XML

// --> Ajax uses XMLHttpRequest (also called xhr object) to achieve  this

// --> data can be transferred in any format and protocol ex -json ,xml,.txt,.html
// */

// console.log("Ajax Tutorial");
// let fetchBtn = document.getElementById("fetchBtn");
// // let backupBtn=document.getElementById("backupBtn")
// fetchBtn.addEventListener("click", buttonClickHandler);

// function buttonClickHandler() {
//   const xhr = new XMLHttpRequest();
// //   console.log('ready state',xhr.readyState);//here is ready state is 0
  
  
//   // True means Asynchronous
// //   xhr.open("GET", "zak.txt", true);
//   xhr.open("GET", 'https://jsonplaceholder.typicode.com/todos/1',true);
//   // console.log('ready state',xhr.readyState);//here is ready state is 1
  
//   // what to do on progress, this is optional
//   xhr.onprogress = function () {
//       console.log("on progress");
//     //   console.log('ready state',this.readyState);//here is ready state is 3
//     };
    
//     // xhr.onreadystatechange=function () {
//     //     console.log("ready state code is" ,this.readyState);
//     // }
    
//     // what to do on response is ready
//     xhr.onload = function () {
//         if (this.status===200) {
            
//             console.log(this.responseText );
//             console.log(JSON.parse( this.responseText ));
//             // console.log('ready state',this.readyState);//here is ready state is 4
//         }else{
//         console.log("some error Occured");
//     }
// };
// // until we  cant send above method not executed
// xhr.send();
// console.log("work is done");// this is message show at the top because we make xhr.open () is 'true' if it is 'false' message is show at bottom this means synchronous
// }


// for post() method
let fetchBtn = document.getElementById("fetchBtn");
// let populateBtn=document.getElementById("populateBtn")
fetchBtn.addEventListener("click", buttonClickHandler);

function buttonClickHandler() {
  const xhr = new XMLHttpRequest();
  
  
  // True means Asynchronous
  
//   xhr.open("POST", 'https://dummy.restapiexample.com/api/v1/create',true);

// Another post
  xhr.open("POST", 'https://jsonplaceholder.typicode.com/posts',true);

  xhr.getResponseHeader('content-type','application/json')  
    
    // what to do on response is ready
    xhr.onload = function () {
        // if (this.status===200) {
        if (this.status===201) {// for params1
            
            console.log(this.responseText) ;
        }
        else{
        console.log("some error Occured");
    }
};
let params=`{"name":"testabcd","salary":"123000","age":"23"}`
let params1=JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  })

// console.log(params);
xhr.send(params1);
}



let popBtn=document.getElementById("popBtn")
popBtn.addEventListener("click", popHandler);
let list=document.getElementById("list")

function popHandler() {
  const xhr = new XMLHttpRequest();
  
  console.log('cliking popBtn');
  // True means Asynchronous
  
  xhr.open("GET", 'https://reqres.in/api/users?page=2',true);


    
    // what to do on response is ready
    xhr.onload = function () {
        if (this.status===200) {
           let employeeList=JSON.parse( this.responseText).data
           console.log(employeeList);
           let html="";
           Array.from(employeeList).forEach(element => {
               html+=`<li>${(element.first_name).toUpperCase()}</li>`;
               console.log(element.first_name);
            });
            list.innerHTML=html;
        }
        else{
        console.log("some error Occured");
    }
};
xhr.send();
}