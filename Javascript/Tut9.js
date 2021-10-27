// Loops

// ``````````````while loop````````````````
// let i=0;
// while (i<10 ){
//     i++
//     if (i===5) {
//         // break;
//         continue;
//     }
//     console.log(i);
// }


// ``````do-while loop
// i=12;
// do{
//     console.log(i);
//     i++;
// }while(i<10)


// ``````````````````for()````````

// for (let i = 0; i < 101; i++) {
//     console.log(i) ; 
// }

// let arr=[2,4,5,7,8,9];
// arr.forEach(function(i){
//     console.log(i);
// })

// // other way
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     console.log(element);
// }


// printing maths Table
// for (let i = 1; i <= 10; i++) {
//     for (let k = 1; k <= 10; k++) {
//         console.log(`${i}*${k} = ${i*k}`);
//     }
// }

let myobj = {
    name: 'zakir',
    'lastname': 'Husen',
    marks: [1, 2, 4, 5],
    isactive: true,
    game:function(){
        return "Gta"
    }
}
console.log(myobj.game())

// let k;
// for (let k in myobj) {
//     console.log(`${k} of object is ${myobj[k]}`)
// }
