//function currying-means it is technique of transforming of funtion of multiple argument into several functions of single argument
// example
let adds=(a,b)=>a+b
// above function is converting into function currying as show below
let addition = a=>b=>(a+b)

let ad=addition(8)(84)
console.log('ad',ad);
// Infinit currying

// function add(a) {
    //     retu
    // }
// let add=a=>(b)=>b?add(a+b):a

function add(a) {
    console.log('args',...arguments)
    return function (b) {
        return b?add(a+b):a
    }
    
}
let a=add(4)(5)(7)(7)(7)(4)(5)(4)(5)()
    console.log(a);