// Asynchronous programming
console.log("Async programming");
// Async vs Sync
// Async allows multiple things to happens at same time
// few ways to write Async are 1. Async/await 2.promises 3.callback()
// Sync- In this things happen one at a time

// Examples

// Sync
// for (let index = 0; index < 400; index++) {
// console.log("this is index no" ,index);
// }
// here below msg cant print untill for loop excutes
// console.log("done printing");

// Sync
// setTimeout(() => {

//     for (let index = 0; index < 400; index++) {
//         console.log("this is index no" ,index);
//     }
// }, 1000);
// // here is done printing print on before for loop in console
// console.log("done printing");

// Another Example

// Sync
// function fun2() {
//   console.log("fun2() is called ");
// }
// function fun1() {
//   console.log("fun1() is called ");
//   fun2();
//   console.log("fun1() is called again ");
// }
// fun1()
// Async
function fun2() {
    setTimeout(()=>{ console.log("fun2() is called ")}, 1000);
};
function fun1() {
    console.log("fun1() is called ");
    fun2();
    console.log("fun1() is called again ");
}

fun1()