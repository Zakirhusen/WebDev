// Que 1 **************
var a=10
{
    var a=-10
}
let b=a
{
    let b=-20
}
// console.log('b is', b);//output= -10

// Que 2 **************
var scope ="global scope"
function check() {
    let scope="local scope"
    function f() {
        return scope
    }
    scope="no scope"
    return f
}
// console.log(check()());//output- no scope

// Que 3 **************
function foo(item) {
    return  //o/p- undefined
     [item] 
}
// console.log(foo(10));//output- undefined
// Que 4 **************
let i
for ( i = 0; i < 3; i++) {
    const log=(i)=>{
        return ()=>console.log("i is",i);//output- 3 3 3
    }
    setTimeout(log, 100);
}

// Que 5 **************
const obj={}
obj.prop="hello"
// obj="hello" // it shows error
console.log(obj);//output-{prop:"hello"}

// Que 6 **************
// console.log("");//output-
// // Que 7 **************
// console.log("");//output-
// // Que 8 **************
// console.log("");//output-
// // Que 9 **************
// console.log("");//output-
// // Que 10 **************
// console.log("");//output-
