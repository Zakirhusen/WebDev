// ```````````````````````````Fetch Api``````````````````````
console.log("this is fetch api tut 32");
let myBtn = document.querySelector("#myBtn");
let content = document.querySelector("#content");
// function getData(){
//     console.log("started getdAta");

//     fetch("zak.txt").then((res)=>{
//         console.log("inside first then");
//         return res.text();
//     }).then((data)=>{
//         console.log("inside second then");
//         console.log(data);
//     })

// }
// console.log("before get data");
// getData()
// console.log("after get data");

function getData() {
  fetch("https://api.github.com/users")
    .then((res) => res.json())
    .then((data) => console.log(data));
}
getData();  

function postData() {
  console.log("inside postData");
  data = {
    title: "hi",
    body: "bar",
    userId: 10000,
  };
  params = {
    method: "poST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };
  fetch("https://jsonplaceholder.typicode.com/posts", params)
    .then((res) => res.json())
    .then((data) => console.log(data));
}
postData();
