// ```````````````````````````Async await ```````````````````````````
// async returns promise
// console.log("this is tut 33");
// async function harry(){
//     console.log('inside harry function');
//     return "harry"
//     // console.log('after calling harry');
// }
// console.log('before calling harry');
// let a= harry();
// console.log('after calling harry');
// console.log(a);
// a.then((data)=> console.log(data))//here we using promise returned by async
// console.log('this last line of the js file');



async function gitHub(){
    // here in async function we are waiting for two promises  to resolve
    console.log('inside gitHub function');
    const response=await fetch("http://api.github.com/users");  //waiting first promise to resolve
    console.log('before response');
    const users=await response.json(); //second promise
    console.log('users resolved');
    return users
}
console.log('before calling gitHub');
let x=gitHub()
console.log('after calling gitHub');
console.log(x);
x.then((data)=>console.log(data))  //here we using promise returned by gitHub()
console.log('this last line of the gitHub');