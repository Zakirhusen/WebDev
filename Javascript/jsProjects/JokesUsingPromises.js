console.log("this is joke");
let joke = document.getElementById("joke");
let jokeBtn = document.getElementById("jokeBtn");
// function jokes(){
//     let params={
//         headers:{
//             accept:'application/json'
//         }
//     }
//     fetch("https://icanhazdadjoke.com",params).then((res)=>{
//         // return(res.text());
//         return(res.json());
//     }).then((data)=>{
//         joke.innerHTML=`<i class="material-icons">mood</i> ${data.joke}`
//     })
//     .catch((error)=>{
//         console.log("something error");
//     })
// }
jokeBtn.addEventListener("click", jokes);
jokes();

// By async await

async function jokes() {
  let params = {
    headers: {
      accept: "application/json",
    },
  };
  let res = await fetch("https://icanhazdadjoke.com", params);
  let result = await res.json();
  console.log(result);
  joke.innerHTML = `<i class="material-icons">mood</i> ${result.joke}`;
}
