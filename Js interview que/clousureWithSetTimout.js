// for(var i=0;i<5;i++){
//     let arr=2
//     setTimeout((function (f) {
//         console.log(i);
//     }),1000*i)
// }

// by using let we can solve the problem

// for(let i=0;i<5;i++){
//     setTimeout((function (f) {
//         console.log(i);
//     }),1000*i)
// }
// do not changing the var keyword 

for(let i=0;i<5;i++){
    function newFunc(i) {
        setTimeout((function () {
            console.log(i);
        }),1000*i)
    }
    newFunc(i)
}

